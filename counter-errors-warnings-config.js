process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 1334850602,
  sheetName: "Counter",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "data-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-counter' AND event='data-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data-error",
      ],
      dateField: "date"
    }
  ]
};
