angular.module('mwFormBuilder', ['ngSanitize', 'ng-sortable', 'pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider){
  $translateProvider.useStaticFilesLoader({
      prefix: 'bower_components/insight-surveys/dist/i18n/',
      suffix: '/angular-surveys.json'
  });
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.preferredLanguage('en');
}])
.filter('ngtranslate', function ($parse, $translate) {
  'use strict';

  var translateFilter = function (translationId, interpolateParams, interpolation, forceLanguage) {
    if (!angular.isObject(interpolateParams)) {
      var ctx = this || {
        '__SCOPE_IS_NOT_AVAILABLE': 'More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f'
        };
      interpolateParams = $parse(interpolateParams)(ctx);
    }

    return $translate.instant(translationId, interpolateParams, interpolation, forceLanguage);
  };

  if ($translate.statefulFilter()) {
    translateFilter.$stateful = true;
  }

  return translateFilter;
});
