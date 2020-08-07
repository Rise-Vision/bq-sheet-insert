process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || `${__dirname}/creds.json`;

module.exports = {
  spreadsheetId: "153xzGRSzQ-mThJYYPvOBn6hEEX-sp11gichn6e3cW18",
  sheetId: 1113178797,
  sheetName: "RisePlayerConfiguration",
  range: `A1:L50`,
  dateCells: ["B1"],
  queries: [
    {
      name: "file-insufficient-disk-space-error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='file-insufficient-disk-space-error' limit 7",
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
      name: "invalid component data",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='invalid component data' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "invalid component data",
      ],
      dateField: "date"
    },
    {
      name: "no presentation id",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='no presentation id' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "no presentation id",
      ],
      dateField: "date"
    },
    {
      name: "attribute data file read error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='attribute data file read error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "attribute data file read error",
      ],
      dateField: "date"
    },
    {
      name: "local messaging connection",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='not connected to Local Messaging, cannot send PUD template-done event' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "not connected to Local Messaging, cannot send PUD template-done event",
      ],
      dateField: "date"
    },
    {
      name: "data file error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='data file error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data file error",
      ],
      dateField: "date"
    },
    {
      name: "data file read error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='data file read error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data file read error",
      ],
      dateField: "date"
    },
    {
      name: "data file RLS error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='data file RLS error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "data file RLS error",
      ],
      dateField: "date"
    },
    {
      name: "write component property error",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='write component property error' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "write component property error",
      ],
      dateField: "date"
    },
    {
      name: "component not found for id in attribute data",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='component not found for id in attribute data' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "component not found for id in attribute data",
      ],
      dateField: "date"
    },
    {
      name: "component bindOnConfigured overflow triggered",
      query: "SELECT * FROM `client-side-events.Display_Events.ComponentErrorsAndWarnings` WHERE rollout_stage='stable' AND component='RisePlayerConfiguration' AND event='component bindOnConfigured overflow triggered' limit 7",
      useLegacySql: false,
      valueFields: [
        "count"
      ],
      rowLabels: [
        "component bindOnConfigured overflow triggered",
      ],
      dateField: "date"
    }
  ]
};
