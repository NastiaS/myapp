var app = angular.module('ngMyApp', []);

	app.controller('MainController', ['$scope', 'PostsFactory', 'CommentsFactory', function($scope, PostsFactory, CommentsFactory){
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


		$scope.loadComments = function(postId){
			console.log("postId", postId)
			CommentsFactory.bringComments(postId)
				.then(function(comments){
					$scope.comments = comments;
				})
		}

}]);

