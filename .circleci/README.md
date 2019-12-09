### Automated Deployment Configuration

The sheet insert function is set up so that it can be called from multiple triggers:

 - HTTP
 - PubSub
 - CLI

The PubSub trigger is convenient for use as an automated Google Cloud Function (GCF) job initiated by Google Cloud Scheduler. Cloud Scheduler cannot directly trigger a GCF function, but it can trigger a PubSub topic and the GCF function can be set as a subscriber to the same topic.

In order to work properly, the The configuration for CircleCI expects the auth credentials to be available as an environment variable (GCLOUD_AUTH_BASE64). This credential file comes from a service account that has permission to write to the spreadsheet as well as write permission to a staging Google Cloud Storage (GCS) bucket for deployment.

It's also expected that the query configuration file exists in a separate branch for each deployment job. For example, deploy_delivery_gcf runs `git checkout origin/configuration/delivery -- config.js` which brings the configuration file from the delivery branch into the current directory for later inclusion in the zip file for deployment.

The deployment is performed via npm script `npm run prepare`.  This will ensure the required files are present and then create the zip file (excluding hidden files and node_modules).

The CircleCI job will then copy that zip file to the staging bucket and deploy the GCF function. 

The GCF function should be configured and manually tested with the Cloud Scheduler PubSub trigger before attempting automated deployment.
