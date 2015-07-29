
 /*******************************
  Dependencies
  ********************************/
var fs = require('fs');
var path = __dirname + '/../helpFiles/file.json'
var path2 = __dirname + '/../helpFiles/cities.json';


 /*******************************
  Export function
  ********************************/
module.exports = function (app, passport) {
 

   /*******************************
 Retrieve pages ste2,step3 and so on
  ********************************/
  app.get('/page/signup/:id', function (req, res) {
    
    res.render(req.params.id)
  });



   /*******************************
  Rendering pages
  ********************************/

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
  });

 

	 /*******************************
  Get user to the client side
  ********************************/
 	app.get('/getUser', function (req,res) {
 	    res.json(req.user)
 	});

   /**************************************************
  Retrieve all cities that belong to the selected state
  ***************************************************/
  app.get('/cities/:st', function (req, res) {
   
    fs.readFile(path2, function (err, data) {
      if(err) throw err;
      var cities = JSON.parse(data);
      res.send(cities[req.params.st].cities)
    })
  });


   /*******************************
  Retrieve all states
  ********************************/
  app.get('/states/', function (req, res) {
 
    fs.readFile(path2, function (err, data) {
      if (err) throw err;
      var states = JSON.parse(data);
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
