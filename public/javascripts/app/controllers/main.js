var app = angular.module('ngMyApp', []);


	app.controller('MainController', ['$rootScope', '$scope', 'Posts', 'Comments', 'Users', 'Albums', function ($rootScope, $scope, Posts, Comments, Users, Albums) {

		//using rootScope makes it available everywhere in the app regardless on the controller
		$rootScope.switch_key = 'home';

		//variables responsible for toggling posts and comments
		$scope.show_posts = false;
		$scope.show_comments = false;
		$scope.show_users = false;

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


/////Users 

		//display all users
		$scope.loadUsers = function () {

			$scope.show_users = true;

			Users.bringUsers()
				.then(function (allUsers) {	 	
					$scope.users = allUsers;
			});			
		};

		//hide all users 
		$scope.hideUsers = function () {

			$scope.users = null;
			$scope.show_users = false;
		};


		//load all albums that belong to a specific user
		$scope.loadAlbums = function (userId) {

			Albums.bringAlbums(userId)
				.then(function (albums) {
					$scope.albums = albums;
				});
		};

		//display albums that belong to a specific user
		$scope.albumsForUser = function (userId, albumId) {

			if (userId == albumId) {
				return true;
			}
			else return false;
		};

		$scope.postsForUser = function (postId, userId) {
			if (postId == userId) {
				return true;
			}
			else return false;
		}

		
		$scope.hideAlbums = function () {
			$scope.albums = null;
		};


}]);



