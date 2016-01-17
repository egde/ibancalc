angular.module('ibanCalc').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when(
		'/ibanCalc', {
			templateUrl: 'ibanCalc/views/ibanCalc.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);