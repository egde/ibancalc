var mainApplicationModuleName = 'main';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','index','ibanCalc']);

//Added Hashbangs for increased SEO improvement
mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});