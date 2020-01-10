module.exports = {
  spreadsheetId: "1YCuBpyavDgxU_0Izu9mQTdCZqJacmoeWIrjJpvkdw7U",
  sheetId: 1665212950,
  sheetName: "KPI's",
  range: `A1:L50`,
  dateCells: ["D1", "D7", "D12", "D15"],
  queries: [
    {
      name: "BQ Analysis",
      query: "SELECT * FROM `rise-core-log.billingData.BQAnalysisCostsPerDay` LIMIT 5",
      useLegacySql: false,
      valueFields: ["total_cost"],
      rowLabels: ["Query Costs"],
      dateField: "date"
    },
    {
      name: "Rise Cache",
      query: "SELECT * FROM [client-side-events:Rise_Cache_V2.cache_reliability] limit 5",
      useLegacySql: true,
      valueFields: ["Reliability"],
      rowLabels: ["Rise Cache Reliability"],
      dateField: "total_date"
    },
    {
      name: "Installer",
      query: "SELECT date, (completions/starts) as Reliability FROM [client-side-events:Aggregate_Tables.NewInstallationStats] order by date desc limit 5",
      useLegacySql: true,
      valueFields: ["Reliability"],
      rowLabels: ["Installer Reliability"],
      dateField: "date"
    },
    {
      name: "Upgrade",
      query: "SELECT date, (completions/starts) as Reliability FROM [client-side-events:Aggregate_Tables.ModuleUpgradeStats] order by date desc limit 5",
      useLegacySql: true,
      valueFields: ["Reliability"],
      rowLabels: ["Upgrade Reliability"],
      dateField: "date"
    },
    {
      name: "Player",
      query: "SELECT date, ((total_count - failed_count)/total_count) as Reliability FROM [client-side-events:Aggregate_Tables.PlayerModuleStats] ORDER BY date DESC limit 5",
      useLegacySql: true,
      valueFields: ["Reliability"],
      rowLabels: ["Player Reliability"],
      dateField: "date"
    },
    {
      name: "Content Watchdog",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.content_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Content Watchdog Reliability"],
      dateField: "date"
    },
    {
      name: "Licensing",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.licensing_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Licensing Module Reliability"],
      dateField: "date"
    },
    {
      name: "Messaging",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.local_messaging_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Local Messaging Reliability"],
      dateField: "date"
    },
    {
      name: "System Metrics",
      query: "select date, pct / 100 pct from `client-side-events.System_Metrics_Events.system_metrics_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["System Metrics Reliability"],
      dateField: "date"
    },
    {
      name: "Local Storage",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.local_storage_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Local Storage Reliability"],
      dateField: "date"
    },
    {
      name: "Watchdog Module",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.watchdog_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Module Watchdog Reliability"],
      dateField: "date"
    },
    {
      name: "Watchdog",
      query: "select date, pct / 100 pct from `client-side-events.ChromeOS_Player_Events.reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Chrome OS Reliability"],
      dateField: "date"
    },
    {
      name: "Display Control",
      query: "select date, pct / 100 pct from `client-side-events.Module_Events.display_control_reliability` order by date desc limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Display Control Reliability"],
      dateField: "date"
    },
    {
      name: "Viewer",
      query: "SELECT date, pct / 100 pct FROM `client-side-events.Module_Events.viewer_restarts` limit 5",
      useLegacySql: false,
      valueFields: ["pct"],
      rowLabels: ["Viewer Reliability"],
      dateField: "date"
    },
    {
      name: "Uptime",
      query: "SELECT * FROM `client-side-events.Uptime_Events.K12AverageUptimePct` order by date desc limit 5",
      useLegacySql: false,
      valueFields: [
        "average_uptime_pct",
        "rendererPct",
        "networkPct",
        "whitescreenPct",
      ],
      rowLabels: [
        "Uptime K12",
        "Rendering Uptime K12",
        "Networking Uptime K12",
        "Whitescreen Uptime K12"
      ],
      dateField: "date"
    },
    {
      name: "KPI Costs",
      query: `SELECT
        d.date date,
        total_display_count,
        ceil(total_display_count_avg_30_moving) avg_30_moving_d,
        total_cost,
        cost_rvaserver2 rvaserver2,
        cost_avid_life_623 storage,
        storage_30_moving,
        cost_messaging messaging,
        dollars_per_display_month,
        avg_30_moving,
        ROUND(dollars_per_display_month - avg_30_moving, 4) delta_from_avg,
        round((dollars_per_display_month - avg_30_moving) / avg_30_moving * 100, 4) pct_delta_from_avg
      FROM (
        SELECT
          *,
          ROUND(total_cost / total_display_count * 30, 4) dollars_per_display_month,
          AVG(total_cost / total_display_count * 30) OVER (ORDER BY d.date ASC ROWS BETWEEN 29 PRECEDING AND CURRENT ROW) AS avg_30_moving,
          AVG(total_display_count) OVER (ORDER BY d.date ASC ROWS BETWEEN 29 PRECEDING AND CURRENT ROW) AS total_display_count_avg_30_moving,
          AVG(cost_avid_life_623) OVER (ORDER BY d.date ASC ROWS BETWEEN 29 PRECEDING AND CURRENT ROW) AS storage_30_moving
        FROM
          [rise-core-log:billingData.ProjectCostColumnsByDateView]
        ORDER BY
          date DESC) limit 5`,
      useLegacySql: true,
      valueFields: [
        "storage",
        "dollars_per_display_month"
      ],
      rowLabels: [
        "Storage Bandwidth",
        "Cost for Day"
      ],
      dateField: "date"
    }
  ]
}
