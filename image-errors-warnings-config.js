process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 1811912568,
  sheetName: "Image",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "file-insufficient-disk-space-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='file-insufficient-disk-space-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "file-insufficient-disk-space-error",
      ],
      dateField: "date"
    },
    {
      name: "file-not-found",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='file-not-found' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "file-not-found",
      ],
      dateField: "date"
    },
    {
      name: "file-rls-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='file-rls-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "file-rls-error",
      ],
      dateField: "date"
    },
    {
      name: "image-format-invalid",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='image-format-invalid' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "image-format-invalid",
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
      name: "image-load-fail",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='image-load-fail' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "image-load-fail",
      ],
      dateField: "date"
    },
    {
      name: "image-rls-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='image-rls-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "image-rls-error",
      ],
      dateField: "date"
    },
    {
      name: "image-svg-fail",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='image-svg-fail' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "image-svg-fail",
      ],
      dateField: "date"
    },
    {
      name: "file-not-found",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-image' AND event='file-not-found' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "file-not-found",
      ],
      dateField: "date"
    }
  ]
};
