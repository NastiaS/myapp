angular.module('ngMyApp')
	.controller('AboutController', ['$scope','$rootScope', function ($scope, $rootScope) {
		$rootScope.bodylayout = 'about-layout';
}]);