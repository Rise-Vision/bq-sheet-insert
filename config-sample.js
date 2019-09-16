process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "1D_JyusR6h8q1ZabLzfA21PrdwDMp_FtPHRwKa5mK12c",
  sheetId: 0,
  sheetName: "Sheet1",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "Sample Query",
      query: "SELECT CURRENT_DATE() date, RAND() * 10 metric1 union all SELECT DATE_ADD(CURRENT_DATE(), interval -1 DAY) date, RAND() * 10 metric1",
      useLegacySql: false,
      valueFields: [
        "metric1"
      ],
      rowLabels: [
        "Metric One"
      ],
      dateField: "date"
    }
  ]
};
