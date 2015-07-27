angular.module('ngMyApp')
	.controller('Step2Controller', ['$scope','$rootScope', function ($scope, $rootScope) {
		$rootScope.bodylayout = 'opinion-layout';
		console.log("ROOOTTTTTTT", $rootScope.objectToSend);
	
}]);