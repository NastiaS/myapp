angular.module('ngMyApp')

	.controller('Step3Controller', ['$scope','$rootScope', 'Users', '$location', 'Cities', 'States', function ($scope, $rootScope, Users, $location, Cities, States) {

		$rootScope.bodylayout = 'signup-layout';
	
		$scope.showForm = false;

		States.getStates()
			.then(function(states){
				$scope.states = states;
			})

		$scope.showNextPage = function () {

			Users.createUser($rootScope.objectToSend)
				.then(function(data){
					Cities.getCities(data.state)
					.then(function(result){
						$scope.cities = result;
					})
				})
			$scope.showForm = true;
		}


		
		$scope.verify = function () {

			Users.createUser($rootScope.objectToSend)
				.then(function(data){
					$location.url("/step4");
				})
		}
	
}]);

