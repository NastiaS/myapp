//factory to configure which env is being used
app.factory("APIConfig", [function () {

	return {
		devRoot : "http://jsonplaceholder.typicode.com/",
		prodRoot: "",
		env : "dev",
		setEnv : function () {
			
		},
		getRoot : function () {
			//if env is dev, return devRoot, else return prodRoot
			if (this.env === "dev") {
				return this.devRoot;
			}
			else if (this.env ==="prod") {
				return this.prodRoot;
			}
			return null;
		}
	};
}]);


//makes ajax call to the api and brings back posts 
app.factory('Posts', ['$http', 'APIConfig', function ($http, APIConfig) {

	return {
		bringPosts: function () {
		    return $http.get(APIConfig.getRoot() + "posts/")
		    	.then(function (posts) {
		    		return posts.data
		    	})
    		}
		}
}]);

//makes ajax call to the api and brings back comments related to the specific post
app.factory('Comments', ['$http', 'APIConfig', function ($http, APIConfig) {

	return {
		bringComments: function (postId) {
			return $http.get(APIConfig.getRoot() + "posts/" + postId + "/comments")
				.then(function (comments) {
					return comments.data;
				})
		}
	}
}]);


app.factory('Users', ['$http', 'APIConfig', function ($http, APIConfig) {

	return {
		bringUsers: function () {
		    return $http.get(APIConfig.getRoot() + "users/")
		    	.then(function (users) {
		    		return users.data
		    	})
    		},
    	bringAuthUser: function(){
    		return $http.get('/getUser')
    			.then(function(user){
    				console.log("USER", user)
    				return user.data
    			})
    		}
		}
}]);

app.factory('Albums', ['$http', 'APIConfig', function ($http, APIConfig) {

	return {
		bringAlbums: function (userId) {
			return $http.get(APIConfig.getRoot() + "users/" + userId + "/albums")
				.then(function (albums) {
					return albums.data;
				})
		}
	}
}]);

app.factory('AuthService', ['$http', 'APIConfig', function ($http, APIConfig) {

	return {
		loginUser: function (user) {
			console.log("USER", user)
			return $http.post('/login', user)	
		}
	}
}]);
