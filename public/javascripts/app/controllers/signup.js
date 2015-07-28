angular.module('ngMyApp')

	.controller('SignupController', ['$scope','$rootScope', 'Users','$location', function ($scope, $rootScope, Users, $location) {

		$rootScope.bodylayout = 'signup-layout';

		$rootScope.objectToSend = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			address: null,
			age: null
		}

		$scope.verify = function () {
			
			Users.createUser($rootScope.objectToSend)

				.then(function(data){
					// $rootScope.$apply();

					// window.location('/step2')
					$location.url("/step2");
				})
		}
	
}]);