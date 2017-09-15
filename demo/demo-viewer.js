angular.module('app', ['ui.bootstrap', 'mwFormViewer', 'pascalprecht.translate', 'monospaced.elastic'])
.config(function($translateProvider){
    $translateProvider.useStaticFilesLoader({
        prefix: '../dist/i18n/',
        suffix: '/angular-surveys.json'
    });
    $translateProvider.preferredLanguage('en');
})
.controller('DemoController', function($q, $http, $translate, $rootScope) {

    var ctrl = this;
    ctrl.viewerReadOnly = false;
    ctrl.formData = null;
    $http.get('form-data3.json')
        .then(function(res){
            ctrl.formData = res.data;
        });
    ctrl.formBuilder={};
    ctrl.formViewer = {};
    ctrl.formOptions = {
        autoStart: true,
        disableSubmit: false
    };
    ctrl.formStatus= {};
    ctrl.responseData={};

    $http.get('template-data.json')
        .then(function(res){
            ctrl.templateData = res.data;
        });

    ctrl.showResponseRata=false;
    ctrl.saveResponse = function(){
        var d = $q.defer();
        var res = confirm("Response save success?");
        if(res){
            d.resolve(true);
        }else{
            d.reject();
        }
        return d.promise;
    };

});