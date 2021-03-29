module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    plugins: ["karma-phantomjs-launcher", "karma-jasmine"],
    files: [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/jquery-ui/jquery-ui.min.js",
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "node_modules/angular-bootstrap/ui-bootstrap.min.js",
      "node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js",
      "node_modules/angular-sanitize/angular-sanitize.min.js",
      "node_modules/angular-translate/dist/angular-translate.min.js",
      "node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
      "node_modules/Sortable/Sortable.min.js",
      "vendor/angular-legacy-sortable.js",
      "node_modules/angular-elastic/elastic.js",
      "dist/form-utils.js",
      "dist/form-builder.min.js",
      "dist/form-builder-bootstrap-tpls.min.js",
      "dist/form-viewer.min.js",
      "dist/form-viewer-bootstrap-tpls.min.js",
      "test/*.js",
    ],
    // start these browsers
    browsers: ["PhantomJS"],
    reporters: ["progress"],
    logLevel: config.LOG_INFO,
    singleRun: false,
  });
};
