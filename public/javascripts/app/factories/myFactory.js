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
					var usersObj = [];
		    		users.data.forEach(function (e) {
		    			usersObj.push({
		    				name: e.name, 
		    				username: e.username, 
		    				phone: e.phone, 
		    				email: e.email, 
		    				website: e.website, 
		    				address: e.address.city, 
		    				company: e.company.name
		    			})
		    		})
		    		return usersObj;
		    	})
    		},
    	bringAuthUser: function(){
    		return $http.get('/getUser')
    			.then(function (user) {
    				return user.data
    			})
		},

		createUser: function (user) {
			return $http.post('/verify', user)
				.then(function(newUser){
					return newUser.data
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

app.factory('States', ['$http', function($http){

	return {
		getStates: function (state) {
			return $http.get('/states/')
				.then(function (states) {
					return states.data;				
				})
		}
	}
}]);

app.factory('Cities', ['$http', function ($http) {

	return {
		getCities: function (state) {
			return $http.get('/cities/' + state)
				.then(function (cities) {
					return cities.data;				})
		}
	}
}]);
