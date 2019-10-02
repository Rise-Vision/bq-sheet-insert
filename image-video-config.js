process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 1229209404,
  sheetName: "Image/Video",
  range: `A1:L50`,
  dateCells: ["B1", "B6"],
  queries: [
    {
      name: "Image / Video Reliability",
      query: "SELECT * FROM `client-side-events.Widget_Events.ImageVideoReliability` limit 7",
      useLegacySql: false,
      valueFields: [
        "image_rls_single_r",
        "image_rls_folder_r",
        "image_non_rls_r",
        "video_rls_single_r",
        "video_rls_folder_r",
        "video_non_rls_r"
      ],
      rowLabels: [
        "Image RLS Single File",
        "Image RLS Folder",
        "Image Non RLS",
        "Video RLS Single File",
        "Video RLS Folder",
        "Video Non RLS"
      ],
      dateField: "date"
    }
  ]
};
