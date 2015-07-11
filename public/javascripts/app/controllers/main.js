var app = angular.module('ngMyApp', []);

	app.controller('mainController', ['$scope', 'PostsFactory', function($scope, PostsFactory){
		$scope.title = "This is my home page!"

		$scope.loadPosts = function(){

			PostsFactory.bringPosts()
			.then(function (allPosts) {	 	
				$scope.posts = allPosts;
			})			
		}

	}])

	app.factory('PostsFactory', ['$http', function($http){
	return {
		bringPosts: function() {
		    return $http.get('http://jsonplaceholder.typicode.com/posts')
		    	.then(function(posts){
		    		return posts.data
		    	})
    	}
	}

}])