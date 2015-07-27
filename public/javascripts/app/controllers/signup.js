angular.module('ngMyApp')
	.controller('SignupController', ['$scope','$rootScope', 'Users', function ($scope, $rootScope, Users) {
		$rootScope.bodylayout = 'opinion-layout';

		$rootScope.objectToSend = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			address: null
		}

		$scope.verify = function(){
			console.log("Heoy", $rootScope.objectToSend)

			Users.createUser($rootScope.objectToSend)
				.then(function(data){
					console.log("DATDAADAD", data)
					$rootScope.objectToSend = data;
					
					window.location = "/step2"
				})
		}
	
}]);