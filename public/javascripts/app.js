var app = angular.module('ngMyApp', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: '/page/home'
			}).
			when('/page/about', {
				templateUrl: '/page/about'
			}).
			when('/page/post', {
				templateUrl: '/page/post'
			}).
			when('/page/users', {
				templateUrl: '/page/users'
			}).
			otherwise({
				redirectTo: '/'
			}),
		$locationProvider.html5Mode(true)
	}]);