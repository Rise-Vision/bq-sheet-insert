process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 0,
  sheetName: "Reliability",
  range: `A1:L50`,
  dateCells: ["B1", "B4", "B13", "B26"],
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
      name: "Components",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentReliabilityStable` limit 7",
      useLegacySql: false,
      valueFields: [
        "financial_r",
        "rss_r",
        "weather_r",
        "image_r",
        "slides_r",
        "video_r",
        "counter_r",
        "configuration_r",
        "pud_r",
        "text_r"
      ],
      rowLabels: [
        "rise-data-financial",
        "rise-data-rss",
        "rise-data-weather",
        "rise-image",
        "rise-slides",
        "rise-video",
        "rise-data-counter",
        "RisePlayerConfiguration",
        "rise-play-until-done",
        "rise-text"
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
