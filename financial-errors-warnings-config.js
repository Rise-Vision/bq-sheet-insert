process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 940943220,
  sheetName: "Financial",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "data-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='data-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data-error",
      ],
      dateField: "date"
    },
    {
      name: "error parsing response",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='error parsing response' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "error parsing response",
      ],
      dateField: "date"
    },
    {
      name: "Instrument is unavailable, invalid or unknown",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='Instrument is unavailable, invalid or unknown' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "Instrument is unavailable, invalid or unknown",
      ],
      dateField: "date"
    },
    {
      name: "Invalid attributes",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='Invalid attributes' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "Invalid attributes",
      ],
      dateField: "date"
    },
    {
      name: "request-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='request-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "request-error",
      ],
      dateField: "date"
    },
    {
      name: "cache API not available",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='cache API not available' limit 7",
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
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='cache put failed' limit 7",
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
      name: "error parsing response from expired/invalid cache",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='error parsing response from expired/invalid cache' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "error parsing response from expired/invalid cache",
      ],
      dateField: "date"
    },
    {
      name: "error parsing response from valid cache",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='error parsing response from valid cache' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "error parsing response from valid cache",
      ],
      dateField: "date"
    },
    {
      name: "firebase not connected",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='firebase not connected' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "firebase not connected",
      ],
      dateField: "date"
    },
    {
      name: "Rise is not permissioned to show the instrument",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-data-financial' AND event='Rise is not permissioned to show the instrument' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "Rise is not permissioned to show the instrument"
      ],
      dateField: "date"
    }
  ]
};
