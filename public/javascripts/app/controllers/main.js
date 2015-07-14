var app = angular.module('ngMyApp', []);

	app.controller('MainController', ['$scope', 'PostsFactory', 'CommentsFactory', function($scope, PostsFactory, CommentsFactory){
		$scope.title = "This is my home page!"

		$scope.showPosts = false;
		$scope.showComments = false;

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
		$scope.commentForPost = function(postId, commentId){
			if(postId == commentId){
				return true;
			}
			else return false;
		}

		$scope.loadComments = function(postId){
			$scope.showComments = true;
			CommentsFactory.bringComments(postId)
				.then(function(comments){
					$scope.comments = comments;
				})
		}
		$scope.hideComments = function(postid){
			$scope.comments = null;
			$scope.showComments = false;
		}


}]);

