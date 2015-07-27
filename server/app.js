 /*******************************
  Dependencies
  ********************************/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy
var _ = require('lodash');
var session = require('express-session');
var flash = require('connect-flash');


var app = express();


 /*******************************
  View Engine Set Up
  ********************************/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../bower_components')));
app.use(express.static(path.join(__dirname, '../semantic')));


 /*******************************
  Middleware for Passport
  ********************************/

require('./config/passport')(passport)
app.use(session({secret: 'isAsecret', 
                 saveUninitialized: true,
                 resave: true})); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


require('./routes/index.js')(app, passport);


 /*******************************
  Middleware for Error Handling
  ********************************/

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
