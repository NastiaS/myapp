
 /*******************************
  Dependencies
  ********************************/
var fs = require('fs');
var path = __dirname + '/file.jsON'
var path2 = __dirname + '/cities.json';


 /*******************************
  Export function
  ********************************/
module.exports = function(app, passport) {
 
  /*******************************
  Rendering pages
  ********************************/

 
  app.get('/page/signup/:id', function (req, res) {
    console.log("IN SIGNUP")
    res.render(req.params.id)
  })

	app.get('/page/:id', function (req, res) {
		  if (req.user) {
        	res.render(req.params.id);
      }
      else if(req.params.id == 'signup'){
        res.render('signup')
      }
		  else {
        	res.render('login');
      }

        // res.render(req.params.id);
  });

 


	 /*******************************
  Get user to the client side
  ********************************/
 	app.get('/getUser', function (req,res) {
 	    res.json(req.user)
 	});

  app.get('/cities/:st', function (req, res){
    console.log("REQPARAMS", req.params.st)
    fs.readFile(path2, function(err, data){
      if(err) throw err;
      var cities = JSON.parse(data);
      console.log("CITIES", cities)
      res.send(cities[req.params.st].cities)
    })
  });

  app.get('/states/', function(req, res){
    console.log("IN STATES")
    fs.readFile(path2, function(err, data){
      if(err) throw err;
      var states = JSON.parse(data);
      console.log("CITIES", states)
      res.send(states)
    })
  })

   /*******************************
  Validation and user creation
  ********************************/
  app.post('/verify', function (req, res) {

    if (req.body.age && req.body.age < 5) {
        res.send("Error")
      }

    else if (req.body.age) {
      fs.writeFile(path, req.body.firstName, function (err) {
        if (err) throw err;
        res.send(req.body)
      }); 
    }
      
    else res.send(req.body)

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
