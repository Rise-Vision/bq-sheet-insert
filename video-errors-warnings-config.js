process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 302930942,
  sheetName: "Video",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "file-rls-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-video' AND event='file-rls-error' limit 7",
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
      name: "player-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-video' AND event='player-error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "player-error",
      ],
      dateField: "date"
    },
    {
      name: "file-not-found",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-video' AND event='file-not-found' limit 7",
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
      name: "video-stuck",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='rise-video' AND event='video-stuck' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "video-stuck",
      ],
      dateField: "date"
    }
  ]
};
