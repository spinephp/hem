// Generated by CoffeeScript 1.6.2
(function() {
  var createKarmaFileList, fs, run, runKarma, runPhantomjs, utils;

  fs = require('fs');

  utils = require('./utils');

  run = function(apps, options) {
    if (options == null) {
      options = {};
    }
    return runKarma(apps, options);
  };

  runPhantomjs = function(apps, options) {
    if (options == null) {
      options = {};
    }
  };

  runKarma = function(apps, options) {
    var testConfig;

    if (options == null) {
      options = {};
    }
    testConfig = fs.existsSync(options.config) && fs.realpathSync(options.config);
    testConfig || (testConfig = {
      singleRun: options.singleRun || true,
      basePath: options.basePath,
      reporters: ['progress'],
      logLevel: 'info',
      frameworks: ['jasmine'],
      browsers: options.browser && options.browser.split(/[ ,]+/) || ['PhantomJS'],
      files: createKarmaFileList(apps)
    });
    return require('karma').server.start(testConfig);
  };

  createKarmaFileList = function(apps) {
    var app, _i, _len;

    for (_i = 0, _len = apps.length; _i < _len; _i++) {
      app = apps[_i];
      return [app.test.target, app.js.target];
    }
  };

  module.exports.run = run;

}).call(this);