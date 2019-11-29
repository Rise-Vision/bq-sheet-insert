process.env.NODE_ENV="production";
Error.stackTraceLimit = 20;

const {dateCells, queries} = require(`${__dirname}/../config.js`);
const assert = require("assert");
const spreadsheet = require("./spreadsheet.js");

const {BigQuery} = require("@google-cloud/bigquery");
const bq = new BigQuery({projectId: process.env.GCLOUD_PROJECT});

module.exports = {
  runHttp(req, resp) {
    return run()
    .catch(e=>console.error(e))
    .then(()=>resp.status(200).send());
  },
  runPubSub(pubSubEvent, context) {
    const eventAge = Date.now() - Date.parse(context.timestamp);
    const eventMaxAge = 180000;

    if (eventAge > eventMaxAge) {
      console.log(`Dropping event ${context.eventId} with age ${eventAge} ms.`);
      return;
    }

    return run();
  }
};

if (process.env.CLI_RUN) {run();}

function run() {
  validateConfig();
  spreadsheet.clearSheetDataCache();

  return spreadsheet.insertColumn()
  .then(setSpreadsheetValuesFromBQ)
  .then(spreadsheet.commit);
}

function setSpreadsheetValuesFromBQ() {
  return Promise.all(queries.map(({name, query, useLegacySql, rowLabels, dateField, valueFields})=>{
    console.log(`querying ${name}`);

    return bq.query({query, useLegacySql})
    .then(([rows])=>Promise.all(rows.map(bqRow=>{
      const values = valueFields.map(fieldName=>bqRow[fieldName]);

      if (!bqRow[dateField]) {throw Error(`Missing field ${dateField} in result ${JSON.stringify(bqRow)}`)}
      return spreadsheet.updateSheet(rowLabels, bqRow[dateField], values, name);
    })));
  }));
}

function validateConfig() {
  assert(Array.isArray(dateCells), "Date cells should contain an array");

  const dateColumn = dateCells[0].substring(0, 1);
  const mixedMsg = "Date cells should all be in the same column";

  assert(dateCells.every(cell=>cell.startsWith(dateColumn)), mixedMsg);
}
