angular.module('ngMyApp')

	.controller('Step3Controller', ['$scope','$rootScope', 'Users', '$location', function ($scope, $rootScope, Users, $location) {

		$rootScope.bodylayout = 'signup-layout';
	
		
	$scope.submit = function (newUser) { 

			// console.log('NEWWWWWWWWWWWWW', newUser)
			Users.createUser($rootScope.objectToSend)

				.then(function (data) {

					if(data == "Error"){
						$location.url("/signup");
					}
					else {
						$location.url("/login");
					}
				})
	}
	
}]);