var app = angular.module('ngMyApp', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: '/page/home',
				controller: 'HomeController'
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
			when('/signup', {
				templateUrl: '/page/signup',
				controller: 'SignupController'
			}).
			when('/step2', {
				templateUrl: '/page/signup/step2',
				controller: 'Step2Controller'
			}).
			when('/step3', {
				templateUrl: '/page/signup/step3',
				controller: 'Step3Controller'
			}).
			otherwise({
				redirectTo: '/'
			}),
		$locationProvider.html5Mode(true)
}]);