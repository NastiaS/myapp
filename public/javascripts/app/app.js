var app = angular.module('ngMyApp', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: '/page/home',
				controller: 'HomeController',
				// resolve: {
				// 	user: ['Users', function(Users){
				// 		return Users.bringAuthUser()
				// 			.then(function(user){
				// 				console.log("RESOLVE", user)
				// 				return user
				// 			})
				// 	}]
				// }

			}).
			when('/about', {
				templateUrl: '/page/about',
				controller: 'AboutController'
			}).
			when('/posts', {
				templateUrl: '/page/posts',
				controller: 'PostsController'
			}).
			when('/users', {
				templateUrl: '/page/users',
				controller: 'UsersController'
			}).
			when('/login', {
				templateUrl: '/page/login',
				controller: 'LoginController'
			}).
			otherwise({
				redirectTo: '/'
			}),
		$locationProvider.html5Mode(true)
}]);