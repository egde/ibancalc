angular.module('ibanCalc').controller('ibanCalcController', ['$scope', '$http', 
	function($scope, $http){

		$scope.convert = function() {
			$http( {
				method: 'GET',
				url: '/ibanCalc',
				params : {
					'BLZ': $scope.BLZ,
					'AcctNo': $scope.AcctNo
				}
			}).then(function(res) {
				$scope.IBAN = res.data.IBAN;
			});
		};

		$scope.copy = function() {
			var txtIBAN = document.getElementById('txtIBAN');
  			txtIBAN.select();
			document.execCommand('copy');
		}
	}])