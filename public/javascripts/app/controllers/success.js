angular.module('ngMyApp')

	.controller('SuccessController', ['$scope','$rootScope', '$location', function ($scope, $rootScope, $location) {

		$rootScope.bodylayout = 'success-layout';

		$scope.successRedirect = function () {
			$location.url("/login");
		}
	
}]);