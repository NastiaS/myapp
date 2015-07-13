var app = angular.module('ngMyApp', []);

	app.controller('MainController', ['$scope', 'PostsFactory', function($scope, PostsFactory){
		$scope.title = "This is my home page!"

		$scope.showPosts = false;

		$scope.loadPosts = function(){
			$scope.showPosts = true;
			PostsFactory.bringPosts()
			.then(function (allPosts) {	 	
				$scope.posts = allPosts;
			})			
		}

		$scope.hidePosts = function(){
			$scope.posts = null;
			$scope.showPosts = false;
		}


		$scope.toggle = function () {  
        	$scope.showPosts = !$scope.showPosts;
    };

}]);

