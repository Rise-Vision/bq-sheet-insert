process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 0,
  sheetName: "Reliability",
  range: `A1:L50`,
  dateCells: ["B1", "B5", "B14", "B26"],
  queries: [
    {
      name: "Core Widgets",
      query: "SELECT * FROM `client-side-events.Widget_Events.CoreWidgetsReliability` limit 7",
      useLegacySql: false,
      valueFields: [
        "calendar_r",
        "rss_r",
        "spreadsheet_r",
        "text_r",
        "twitter_r"
      ],
      rowLabels: [
        "Calendar Widget",
        "RSS Widget",
        "Sheet Widget",
        "Text Widget",
        "Twitter Widget"
      ],
      dateField: "date"
    },
    {
      name: "RisePlayerConfiguration",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "RisePlayerConfiguration"
      ],
      dateField: "date"
    },
    {
      name: "rise-data-financial",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-data-financial' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-data-financial"
      ],
      dateField: "date"
    },
    {
      name: "rise-data-rss",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-data-rss' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-data-rss"
      ],
      dateField: "date"
    },
    {
      name: "rise-data-weather",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-data-weather' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-data-weather"
      ],
      dateField: "date"
    },
    {
      name: "rise-image",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-image' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-image"
      ],
      dateField: "date"
    },
    {
      name: "rise-play-until-done",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-play-until-done' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-play-until-done"
      ],
      dateField: "date"
    },
    {
      name: "rise-slides",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-slides' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-slides"
      ],
      dateField: "date"
    },
    {
      name: "rise-text",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-text' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-text"
      ],
      dateField: "date"
    },
    {
      name: "rise-video",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliability` WHERE rollout_stage='stable' AND component='rise-video' limit 7",
      useLegacySql: false,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "rise-video"
      ],
      dateField: "date"
    },
    {
      name: "Rise Cache",
      query: "SELECT * FROM [client-side-events:Rise_Cache_V2.cache_reliability] limit 3",
      useLegacySql: true,
      valueFields: [
        "Reliability"
      ],
      rowLabels: [
        "RC Reliability"
      ],
      dateField: "total_date"
    }
  ]
};
