'use strict';

// Store ENV variables in .env to set up your local development
// https://github.com/motdotla/dotenv#usage
require('dotenv').config();
const Registry = require('oc').Registry;

// Minimal configuration for the registry
// For advanced configuration check the documantion:
// https://github.com/opentable/oc/wiki/Registry
const configuration = {
  baseUrl: process.env.NOW_URL || process.env.BASEURL,
  port: process.env.PORT || 3000,
  publishAuth: {
    type: 'basic',
    username: process.env.PUBLISH_USERNAME,
    password: process.env.PUBLISH_PASSWORD
  },
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    path: `//s3.${process.env.S3_REGION}.amazonaws.com/${process.env.S3_BUCKET}/`,
    componentsDir: 'components'
  },
  dependencies: []
};

// Instantiate the registry
// An express.js app is exposed as registry.app
const registry = new Registry(configuration);
registry.start(function (err, app) {
  if (err) {
    console.log('Registry not started: ', err);
    process.exit(1);
  }
});
