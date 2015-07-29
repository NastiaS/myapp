angular.module('ngMyApp')

	.controller('Step4Controller', ['$scope','$rootScope', 'Users', '$location', function ($scope, $rootScope, Users, $location) {

		$rootScope.bodylayout = 'signup-layout';
	
		
	$scope.submit = function (newUser) { 

		Users.createUser($rootScope.objectToSend)
				.then(function (data) {

					console.log("DATA", data)
					if (data == "Error") {

						$location.url('/notAllowed');
					}
					else {
						$location.url("/success");
					}
				})
	}
	
}]);