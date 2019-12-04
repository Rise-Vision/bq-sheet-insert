process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 1998127647,
  sheetName: "Weather",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "data error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='data error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data error",
      ],
      dateField: "date"
    },
    {
      name: "displayAddress is incomplete or missing",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='displayAddress is incomplete or missing' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "displayAddress is incomplete or missing",
      ],
      dateField: "date"
    },
    {
      name: "request error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='request error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "request error",
      ],
      dateField: "date"
    },
    {
      name: "cache API not available",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='cache API not available' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "cache API not available",
      ],
      dateField: "date"
    },
    {
      name: "cache put failed",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='cache put failed' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "cache put failed",
      ],
      dateField: "date"
    },
    {
      name: "client offline",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-weather' AND event='client offline' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "client offline",
      ],
      dateField: "date"
    }
  ]
};