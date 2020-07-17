'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

const ContentGenerator = require('./plugins/content-generator');

module.exports = function(defaults) {

  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      generateAssetMap: true,
      fingerprintAssetMap: true
    }
  });

  return new MergeTrees([
    app.toTree(),
    new ContentGenerator([ new Funnel("content") ])
  ]);
};
