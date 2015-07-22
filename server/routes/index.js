module.exports = function(app, passport) {
 
	app.get('/page/:id', function(req, res){
		if(req.user){
        	res.render(req.params.id);
      	}
		else{
        	res.render('login');
      	}
    });

	//this route brings back user so it can be used on the client side
 	app.get('/getUser', function(req,res){
 		res.json(req.user)
 	});

 	//route that takes care of the local-login
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));

    //route that takes care of google auth
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

	//route responsible for loggin out the user
  	 app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
