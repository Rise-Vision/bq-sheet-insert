process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 110729268,
  sheetName: "Slides",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "error: loading slides timeout",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-slides' AND event='loading slides timeout' AND level='error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "error: loading slides timeout",
      ],
      dateField: "date"
    },
    {
      name: "warning: loading slides timeout",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-slides' AND event='loading slides timeout' AND level='warning' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "warning: loading slides timeout",
      ],
      dateField: "date"
    },
  ]
};
