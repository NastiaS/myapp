angular.module('ngMyApp')
	.controller('HomeController', ['$scope','$rootScope','Users', function ($scope, $rootScope, Users) {
		$rootScope.bodylayout = 'home-layout';
			Users.bringAuthUser()
				.then( function (user) {
					$scope.user = user;
					$rootScope.currentUser = user;
				})


//users page is available only through the home page. Attach all users to the rootscope so 
//it is available to the table directive
			Users.bringUsers()
				.then(function (allUsers) {	 	
					$rootScope.users = allUsers;
			});	
	}]);



