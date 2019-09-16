# BigQuery Sheet Insert

This will run multiple [BigQuery](https://cloud.google.com/bigquery/) (BQ) queries, adding the results of each query to rows in a [Google Sheets](https://developers.google.com/sheets/) spreadsheet.

It is expected that the sheet is organized with metrics and dates having recent dates to the left, as follows:

 kpi    | date3 | date2  | date1
 -------|-------|--------|-------
 kpiA   |  0.1  |   0.1  | 0.1
 kpiB   |  0.1  |   0.1  | 0.1
 kpiC   |  0.1  |   0.1  | 0.1

The dates should be in the format d-mon. For example, 1-Jun.

On each run, a new column will be inserted for today's date. So in the table above, date4 would be inserted and existing columns date3-date1 would be moved to the right after date4. Then the values for each kpi will be added from the BQ results according to the configuration. The configuration maps a BQ result column name to a Sheet kpi name in column 1 of the Sheet.

### Getting started with the sample

Create a new spreadsheet with yesterday's date formatted as d-mon in cell B1 and text "Metric One" in cell A2.

A column will be added for today's date when the program runs.

Rename config-sample.js to config.js and replace the spreadsheetId with the id for the newly created spreadsheet. 

Create a service account and give it permission to edit the sheet then start the update via CLI.

``` bash
npm install
CLI_RUN=true GCLOUD_PROJECT=[your-project-name] GOOGLE_APPLICATION_CREDENTIALS=[path/to/service/acct.json] node src/bq-sheet-insert.js
```

### Configuration

The config.js configuration file should export an array of query configuration objects.

Each query configuration object specifies which query to run, which field in the result contains the date values, and which field in the result set contains the kpi result values.

A query configuration object has the following fields:

 - name: Name of the query, used for logging
 - query: The query string
 - useLegacySql: Boolean
 - valueFields: Array of strings matching a field returned from the BQ query indicating which fields contain the values to add to the sheet
 - rowLabels: Array of strings indicating the rows that the values should be inserted into. Each label should match the text value of some row in column 1 of the sheet.
 - dateField: String matching a field returned from the BQ query indicating which field contains the date

Example:

``` javascript
module.exports = [
  {
    name: "Item counts",
    query: "SELECT * FROM [my-project:My_Dataset.item_counts] limit 5",
    useLegacySql: true,
    valueFields: ["count1", "count2"],
    rowLabels: ["Item Count1", "Item Count2"],
    dateField: "dt"
  }
];
```

So in the above example the query might return the following:

 dt         | count1 | count2
 -----------|--------|----------
 2019-06-10 | 55     | 65
 2019-06-11 | 45     | 75
 2019-06-12 | 35     | 85

In that case the spreadsheet would be updated as follows:
 
 kpi         | Jun-12 | Jun-11 | Jun-10
 ------------|--------|--------|-------
 Item Count1 | 35     | 45     | 55  
 Item Count2 | 85     | 75     | 65  

The config file also has the following fields for the overall sheet:

 - spreadsheetId
 - sheetId
 - sheetName: The name of the sheet (tab title at bottom of spreadsheet)
 - range: The cell range containing all of the rowLabels
 - dateCells: An array of cells that should receive the date for today's run. They should all be in the same column

### Limitations

###### Data limits

Note that each date row in the BQ result set corresponds to a cell value update for each value field. In the above example three date rows are returned and there are two value fields. So there is a total of six (3 * 2) cells that will be updated in the spreadsheet. Make sure that queries have a **LIMIT** specified so that the update is only attempted on the last 5 or so days. Attempting to use this tool to update hundreds of days worth of data will likely fail due to sheets api limitations.

###### Continuity expectation

Note that the program expects daily runs. If a date column for previous days is missing, errors may result.

### See also

###### [Google Sheets data connector for BigQuery](https://cloud.google.com/blog/products/g-suite/connecting-bigquery-and-google-sheets-to-help-with-hefty-data-analysis)
