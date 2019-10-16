#!/usr/bin/env bash

GOOGLE_APPLICATION_CREDENTIALS=$1
CONFIG_FILES=(components-widgets-config.js image-video-config.js)

for i in "${CONFIG_FILES[@]}"; do
  CLI_RUN=true GCLOUD_PROJECT=client-side-events GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS CONFIG_FILE=$i node src/bq-sheet-insert
done

