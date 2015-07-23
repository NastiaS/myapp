
 /*******************************
  Export function
  ********************************/
module.exports = function(app, passport) {
 
  /*******************************
  Rendering pages
  ********************************/
	app.get('/page/:id', function (req, res) {
		  if (req.user) {
        	res.render(req.params.id);
      }
		  else {
        	res.render('login');
      }
  });


	 /*******************************
  Get user to the client side
  ********************************/
 	app.get('/getUser', function (req,res) {
 	    res.json(req.user)
 	});


 	/*******************************
  Local Auth
  ********************************/
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/', 
      failureRedirect : '/login', 
      failureFlash : true 
  }));

  /*******************************
  Google Auth
  ********************************/
    app.get('/auth/google', passport.authenticate('google', { 
    	 scope: ['https://www.googleapis.com/auth/userinfo.profile', 
    	   'https://www.googleapis.com/auth/userinfo.profile']
    }));

	app.get('/auth/google/callback', passport.authenticate('google', {
		  failureRedirect: '/login' 
		}),
  		function (req, res) {
    // Successful authentication, redirect home.
    	   res.redirect('/');
  	});

   /*******************************
  Facebook Auth
  ********************************/
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { 
      failureRedirect: '/login' }),
      function (req, res) {
    // Successful authentication, redirect home.
          res.redirect('/');
  });

   /*******************************
  Log Out User
  ********************************/
  	 app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
