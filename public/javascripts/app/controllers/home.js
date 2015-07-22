angular.module('ngMyApp')
	.controller('HomeController', ['$scope','$rootScope','Users', function ($scope, $rootScope, Users) {
		$rootScope.bodylayout = 'home-layout';
			Users.bringAuthUser()
				.then(function(user){
					$scope.user = user;
				})
	}]);



