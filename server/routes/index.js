// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });
// module.exports = router;


module.exports = function(app, passport) {
 //  app.get('/', function(req, res){
	// 	if(req.user){
	// 		console.log("HERERRER", user)
	// 		res.send(user)
	// 	}
	// });

// 	app.get('/page/:id', function(req, res, next) {
// 		if(req.user){
// 			res.render(req.params.id, {user: req.user})
// }
//    	else{
//    		res.render('login', {message: "Please log in"})
//    	}
//    });

 app.get('/page/:id', function(req, res){
      if(req.user){
        res.render(req.params.id);
      }
      else{
        res.render('login');
      }
    });

 app.get('/getUser', function(req,res){
 	res.json(req.user)
 });


    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));

    app.get('/auth/google', passport.authenticate('google', { 
    	scope: ['https://www.googleapis.com/auth/userinfo.profile', 
    	'https://www.googleapis.com/auth/userinfo.profile']
    }));

	app.get('/auth/google/callback', passport.authenticate('google', {
		 failureRedirect: '/login' 
		}),
  		function(req, res) {
    // Successful authentication, redirect home.
    	res.redirect('/');
  	});
};
