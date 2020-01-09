#!/usr/bin/env bash

GOOGLE_APPLICATION_CREDENTIALS=$1

# To avoid exceeding the sheets API quota of 100 read requests in 1 minute, follow the below instructions
# 1) Uncomment the first setting of CONFIG_FILES
# 2) In command line run the following: ./run_errors_warnings.sh [path/to/service/acct.json]
# 3) Once processing is complete, wait one minute.
# 4) Comment out the first setting of CONFIG_FILES and uncomment next one
# 5) Run the same previous command in command line
# 6) Continue process for as many CONFIG_FILES settings listed

# CONFIG_FILES=(financial-errors-warnings-config.js rss-errors-warnings-config.js weather-errors-warnings-config.js)
# CONFIG_FILES=(image-errors-warnings-config.js slides-errors-warnings-config.js video-errors-warnings-config.js)
# CONFIG_FILES=(counter-errors-warnings-config.js time-date-errors-warnings-config.js riseplayerconfiguration-errors-warnings-config.js)

for i in "${CONFIG_FILES[@]}"; do
  CLI_RUN=true GCLOUD_PROJECT=client-side-events GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS CONFIG_FILE=$i node src/bq-sheet-insert
done

