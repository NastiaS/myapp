// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });
// module.exports = router;


module.exports = function(app, passport) {
  
	app.get('/page/:id', function(req, res, next) {
   		res.render(req.params.id);
	});

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));
};
