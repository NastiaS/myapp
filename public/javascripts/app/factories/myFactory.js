app.factory("APIConfig", [function (){
	return {
		devRoot : "http://jsonplaceholder.typicode.com/",
		prodRoot: "",
		env : "dev",
		setEnv : function (){
			
		},
		getRoot : function () {
			//if env is dev, return devRoot, else return prodRoot
			if (this.env === "dev"){
				return this.devRoot;
			}
			else if (this.env ==="prod"){
				return this.prodRoot;
			}

			return null;
		}
	};
}]);



app.factory('PostsFactory', ['$http', 'APIConfig', function($http, APIConfig){
	return {
		bringPosts: function() {
		    return $http.get(APIConfig.getRoot() + "posts/")
		    	.then(function(posts){
		    		return posts.data
		    	})
    		}
		}
}])

app.factory('CommentsFactory', ['$http', 'APIConfig', function($http, APIConfig){
	return {
		bringComments: function(postId){
			return $http.get(APIConfig.getRoot() + "posts/" + postId + "/comments")
				.then(function(comments){
					return comments.data;
				})
		}
	}
}])
