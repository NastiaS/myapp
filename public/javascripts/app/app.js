var app = angular.module('ngMyApp', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: '/page/home',
				controller: 'HomeController'
			}).
			when('/page/about', {
				templateUrl: '/page/about',
				controller: 'AboutController'
			}).
			when('/page/posts', {
				templateUrl: '/page/posts',
				controller: 'PostsController'
			}).
			when('/page/users', {
				templateUrl: '/page/users',
				controller: 'UsersController'
			}).
			otherwise({
				redirectTo: '/'
			}),
		$locationProvider.html5Mode(true)
}]);