angular.module('ngMyApp')

	.controller('UsersController', ['$scope', '$rootScope', 'Users', 'Albums', function ($scope, $rootScope,Users, Albums) {
		
		//change the glodab variable that changes the class of the body for the bk_image
		$rootScope.bodylayout = 'users-layout';
		$scope.show_users = false;

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