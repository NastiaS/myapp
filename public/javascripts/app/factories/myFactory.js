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
					console.log("states", states)
					return states.data;				})
		}
	}
		// var states = ['AL - Alabama',
  //       'AK - Alaska',
  //       'AZ - Arizona',
  //       'AR - Arkansas',
  //       'CA - California',
  //       'CO - Colorado',
  //       'CT - Connecticut',
  //       'DE - Delaware',
  //       'FL - Florida',
  //       'GA - Georgia',
  //       'HI - Hawaii',
  //       'ID - Idaho',
  //       'IL - Illinois',
  //       'IN - Indiana',
  //       'IA - Iowa',
  //       'KS - Kansas',
  //       'KY - Kentucky',
  //       'LA - Louisiana',
  //       'ME - Maine',
  //       'MD - Maryland',
  //       'MA - Massachusetts',
  //       'MI - Michigan',
  //       'MS - Mississippi',
  //       'MO - Missouri',
  //       'MT - Montana',
  //       'NE - Nebraska',
  //       'NV - Nevada',
  //       'NH - New Hampshire',
  //       'NJ - New Jersey',
  //       'NM - New Mexico',
  //       'NY',
  //       'NC - North Carolina',
  //       'ND - North Dakota',
  //       'OH - Ohio',
  //       'OK - Oklahoma',
  //       'PA - Pennsylvania',
  //       'RI - Rhode Island',
  //       'SC - South Carolina',
  //       'SD - South Dakota',
  //       'TN - Tennessee',
  //       'TX - Texas',
  //       'UT - Utah',
  //       'VT - Vermont',
  //       'VA - Virginia',
  //       'WA - Washington',
  //       'WV - West Virginia',
  //       'WI - Wisconsin',
  //       'WY - Wyoming'];
	 // return states;
}]);

app.factory('Cities', ['$http', function ($http) {

	return {
		getCities: function (state) {
			console.log("STATE", state)
			return $http.get('/cities/' + state)
				.then(function (cities) {
					return cities.data;				})
		}
	}
}]);
