const {google} = require("googleapis");
const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const {spreadsheetId, sheetId, sheetName, range, dateCells} = require(`${__dirname}/../${process.env.CONFIG_FILE}`);

const monthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sheetsAPICache = {};
const sheetDataCache = {rows: [], rowLookups: {}};

const rangeValueData = [];

const CODE_POINT_A = "A".codePointAt(0);

module.exports = {
  clearSheetDataCache() {
    sheetDataCache.rows = [];
    sheetDataCache.rowLookups = {};
  },
  updateSheet(rowLabels, dateStr, values, name) {
    if (typeof dateStr === "object") {dateStr = dateStr.value;}

    return getSheetData()
    .then(sheetRows=>{
      rowLabels.forEach((label, idx)=>{
        let sheetRow, sheetCol;

        try {
          sheetRow = getSheetRow(sheetRows, label);
          sheetCol = getSheetCol(sheetRows[0], dateStr);
        } catch(e) {
          e.message = `${e.message}: ${name}`;
          console.error(e);
          return;
        }

        updateRangeValueData(sheetRow, sheetCol, values[idx])
        console.log(`Set [${label}, ${dateStr}] = ${values[idx]} at [${sheetRow}, ${sheetCol}]`);
      });
    });
  },
  commit() {
    const update = {
      spreadsheetId,
      resource: {
        valueInputOption: "USER_ENTERED",
        data: rangeValueData
      }
    };

    return getSheetsApi()
    .then(sheets=>sheets.spreadsheets.values.batchUpdate(update))
    .then(()=>console.log(`Committed ${rangeValueData.length} updates into sheet ${sheetName}`))
  },
  insertColumn() {
    return isNewColumnNeeded()
    .then(needed=>{
      if (!needed) {return;}

      return getSheetsApi()
      .then(sheets=>{
        return sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        resource: {
          requests: [
            {
              insertDimension: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: dateCells[0].codePointAt(0) - CODE_POINT_A,
                  endIndex: dateCells[0].codePointAt(0) - CODE_POINT_A + 1 // endIndex bound is exclusive
                },
                inheritFromBefore: false,
              }
            }
          ]
        }
      })})
      .then(pasteFormulasIntoNewColumn)
      .then(updateNewColumnDate)
      .then(()=>module.exports.clearSheetDataCache());
    })
  }
}

function isNewColumnNeeded() {
  return getSheetData()
  .then(sheetRows=>{
    const dateColIdx = dateCells[0].codePointAt(0) - CODE_POINT_A;
    const dateRowIdx = dateCells[0][1] - 1;

    console.log(`New column needed? Checking sheet value [${dateRowIdx},${dateColIdx}]${sheetRows[dateRowIdx][dateColIdx]} for ${todaysDateString()}`);

    return sheetRows[dateRowIdx][dateColIdx] !== todaysDateString();
  });
}

function todaysDateString() {
  const date = new Date();
  return `${date.getUTCDate()}-${monthText[date.getUTCMonth()]}`;
}

function updateNewColumnDate() {
  return getSheetsApi()
  .then(sheets=>sheets.spreadsheets.values.batchUpdate({
     spreadsheetId,
     resource: {
       valueInputOption: "USER_ENTERED",
       data: dateCells.map(dateCell=>({
         range: `${sheetName}!${dateCell}`,
         values: [[todaysDateString()]]
       }))
     }
  }));
}

function updateRangeValueData(sheetRow, sheetCol, val) {
  rangeValueData.push({
    range: `${sheetName}!${sheetCol}${sheetRow}`,
    values: [[val]]
  });
}

function getSheetData() {
  if (sheetDataCache.rows.length) {return Promise.resolve(sheetDataCache.rows);}

  return getSheetsApi()
  .then(sheets=>{
    return sheets.spreadsheets.values.get({spreadsheetId, range: `${sheetName}!${range}`});
  })
  .then(sheetDataResp=>sheetDataCache.rows = sheetDataResp.data.values);
}

function getSheetRow(sheetRows, rowText) {
  return sheetDataCache.rowLookups[rowText] || findAndCacheRow();

  function findAndCacheRow() {
    const rowIdx = sheetRows.findIndex(row=>row[0] === rowText);
    if (rowIdx === -1) throw Error("row not found")

    return sheetDataCache.rowLookups[rowText] = rowIdx + 1;
  }
}

function getSheetCol(firstSheetRow, dateStr) {
  const dt = new Date(dateStr);
  const dayNum = trimLeadingZero(String(dt.getUTCDate()));
  const monthStr = dt.toUTCString().split(" ")[2];

  return colLetter(firstSheetRow.indexOf(`${dayNum}-${monthStr}`));

  function trimLeadingZero(str) {
    return str.startsWith("0") ? str.substring(1) : str;
  }

  function colLetter(idx) {
    if (idx === -1) throw Error(`column not found ${dayNum}-${monthStr}: ${dateStr}`)

    return String.fromCodePoint(idx + 65);
  }
}

function getSheetsApi() {
  if (sheetsAPICache.sheets) {return Promise.resolve(sheetsAPICache.sheets);}

  return google.auth.getClient({scopes})
  .then(auth=>{
    return sheetsAPICache.sheets = google.sheets({version: "v4", auth});
  });
}

function pasteFormulasIntoNewColumn() {
  return getSheetsApi()
  .then(sheets=>{
    return sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    resource: {
      requests: [
        {
          copyPaste: {
            source: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: parseInt(range.split(":")[1].replace(/\D/g,"")),
              startColumnIndex: dateCells[0].codePointAt(0) - CODE_POINT_A + 1,
              endColumnIndex: dateCells[0].codePointAt(0) - CODE_POINT_A + 2 // endColumnIndex bound is exclusive
            },
            destination: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: parseInt(range.split(":")[1].replace(/\D/g,"")),
              startColumnIndex: dateCells[0].codePointAt(0) - CODE_POINT_A,
              endColumnIndex: dateCells[0].codePointAt(0) - CODE_POINT_A + 1 // endColumnIndex bound is exclusive
            },
            pasteType: "PASTE_FORMULA",
            pasteOrientation: "NORMAL"
          }
        }
      ]
    }
  })});
}
