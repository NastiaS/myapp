angular.module('ngMyApp')

	.controller('PostsController', ['$scope', '$rootScope', 'Posts', 'Comments', function ($scope, $rootScope, Posts, Comments) {

		$rootScope.bodylayout = 'posts-layout';
		$scope.show_posts = false;
		$scope.show_comments = false;

		//load all posts on the page on click
		$scope.loadPosts = function () {

			$scope.show_posts = true;

			Posts.bringPosts()
				.then(function (allPosts) {	 	
					$scope.posts = allPosts;
			});			
		};

		//hide all posts from the page on click
		$scope.hidePosts = function () {

			$scope.posts = null;
			$scope.show_posts = false;
		};


		//load all comments related to a post on click
		$scope.loadComments = function (postId) {

			Comments.bringComments(postId)
				.then(function (comments) {
					$scope.comments = comments;
				});
		};

		//display comments only related to a specific post
		$scope.commentForPost = function (postId, commentId) {

			if (postId == commentId) {
				return true;
			}
			else return false;
		};

		//hide all comments on click
		$scope.hideComments = function () {
			$scope.comments = null;
		};

}]);