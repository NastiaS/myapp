angular.module('ngMyApp')

	.controller('Step2Controller', ['$scope','$rootScope', 'Users', '$location', function ($scope, $rootScope, Users, $location) {

		$rootScope.bodylayout = 'signup-layout';

		$scope.verify = function () {
			// console.log("Heoy", $rootScope.objectToSend)

			Users.createUser($rootScope.objectToSend)

				.then(function(data){
			
					$location.url("/step3");
				})
		}
}]);