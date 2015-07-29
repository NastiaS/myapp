var app = angular.module('ngMyApp', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
				// resolve: {
				// 	ustates: ['States', function(States){
				//  		return States.getStates()
				//  			.then(function(states){
				//  				console.log("RESOLVE", states)
				//  				return states
				//  			})
				//  	}]
				//  },
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
			when('/step4', {
				templateUrl: '/page/signup/step4',
				controller: 'Step4Controller'
			}).
			when('/notAllowed', {
				templateUrl: '/page/signup/notAllowed',
				controller: 'NotAllowedController'
			}).
			when('/success', {
				templateUrl: '/page/signup/success',
				controller: 'SuccessController'
			}).
			otherwise({
				redirectTo: '/'
			}),
		$locationProvider.html5Mode(true)
}]);