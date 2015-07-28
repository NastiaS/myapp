angular.module('ngMyApp')

	// .controller('SignupController', ['$scope','$rootScope', 'Users','$location', 'ustates', function ($scope, $rootScope, Users, $location, ustates) {
	.controller('SignupController', ['$scope','$rootScope', 'Users','$location', function ($scope, $rootScope, Users, $location) {

		$rootScope.bodylayout = 'signup-layout';
		// $rootScope.states = ustates;
		// console.log("STATEEEEEEESS", ustates)

		$rootScope.objectToSend = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			state: null,
			city: null,
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