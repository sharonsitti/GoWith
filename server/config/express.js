var express = require('express'),
    exphbs  = require('express3-handlebars'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');


module.exports = function (app, config) {

    app.engine('handlebars', exphbs({defaultLayout: 'index'}));
    app.set('view engine', 'handlebars');
    app.use(morgan({ format: 'dev', immediate: true }));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({secret: 'gowith'}));
    app.use(passport.initialize());
    app.use(passport.session());


// Static route handling
   // app.use(express.static(config.rootPath + '/public'));
}