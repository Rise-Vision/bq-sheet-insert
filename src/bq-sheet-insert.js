process.env.NODE_ENV="production";
process.env.CONFIG_FILE = process.env.CONFIG_FILE || "components-widgets-config.js";
Error.stackTraceLimit = 20;

const {dateCells, queries} = require(`${__dirname}/../${process.env.CONFIG_FILE}`);
const assert = require("assert");
const spreadsheet = require("./spreadsheet.js");

const {BigQuery} = require("@google-cloud/bigquery");
const bq = new BigQuery({projectId: process.env.GCLOUD_PROJECT});

module.exports = {
  run(req, resp) {
    validateConfig();

    return spreadsheet.insertColumn()
    .then(spreadsheet.updateNewColumnDate)
    .then(setSpreadsheetValuesFromBQ)
    .then(spreadsheet.commit)
    .catch(err=>console.error(err))
    .then(()=>resp.status(200).send());
  }
};

function setSpreadsheetValuesFromBQ() {
  return Promise.all(queries.map(({name, query, useLegacySql, rowLabels, dateField, valueFields})=>{
    console.log(`querying ${name}`);

    return bq.query({query, useLegacySql})
    .then(([rows])=>Promise.all(rows.map(bqRow=>{
      const values = valueFields.map(fieldName=>bqRow[fieldName]);

      if (!bqRow[dateField]) {throw Error(`Missing field ${dateField} in result ${JSON.stringify(bqRow)}`)}
      return spreadsheet.updateSheet(rowLabels, bqRow[dateField], values);
    })));
  }));
}

if (process.env.CLI_RUN) {module.exports.run({}, {status() {return {send() {}}}})}

function validateConfig() {
  assert(Array.isArray(dateCells), "Date cells should contain an array");

  const dateColumn = dateCells[0].substring(0, 1);
  const mixedMsg = "Date cells should all be in the same column";

  assert(dateCells.every(cell=>cell.startsWith(dateColumn)), mixedMsg);
}
