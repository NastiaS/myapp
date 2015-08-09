angular.module('ngMyApp')
	.controller('UsersController', ['$scope', '$rootScope', 'Users', 'Albums', function ($scope, $rootScope,Users, Albums) {
		
		//change the glodab variable that changes the class of the body for the bk_image
		$rootScope.bodylayout = 'users-layout';
		$scope.show_users = false;

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
// angular.module('ngMyApp')

// .directive('nastia', function ()  {

//     return {
    	
//     	//okay html for the headers but not for the body
//         template: '<tr><td ng-bind="$index + 1"></td><td><strong ng-bind="user.name"></strong></td><td ng-bind="user.email"></td>td ng-bind="user.website"></td></tr>'
//     };
// });

