'use strict';
let express = require('express');

let bodyParser = require('body-parser');
let ejs = require('ejs');

let mongoose = require('mongoose');

let flash = require('connect-flash');
let multer = require('multer');
let join = require('path').join;
let router = require('./router');
let config = require('./config/index');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

//let passportAuthentication = require('./controllers/authentication/index');
let Api = require('./api');


class App {
   constructor() {
       this.app = express();
       this.root = '/../../';
       this.config();
       this.templates();
       this.router();
   }

   config() {

       let env = process.env.NODE_ENV || 'developement';
       let root = this.root;

       if (env === 'developement') {
           this.app.use(express.static(join(__dirname, root, 'assests')));
           this.app.use(express.static(join(__dirname, root, 'dist')));
       } else {
           this.app.use(express.static(join(__dirname, root, 'dist')));
       }
       
       //this.app.use(express.logger('dev')); // log every request to the console
       //this.app.use(cookieParser()); // read cookies (needed for auth)
       this.app.use(bodyParser.json());
       this.app.use(bodyParser.urlencoded({
           extended: true
       }));
       this.app.use(multipartMiddleware);
      // this.app.use(session({
        //   secret: 'MY SCRET KEY',
          // store: new RedisStore({ client: client }),
           ///resave: true,
        //   saveUninitialized: true
    //   })); // session secret
     //  this.app.use(passport.initialize());
    //   this.app.use(passport.session()); // persistent login sessions
       this.app.use(flash()); // use connect-flash for flash messages stored in session

       // Delete cahe
       this.app.use(function(req, res, next) {

           res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
           next();
       });
   }

   templates() {

       this.app.set('views', join(__dirname, this.root, 'views'));
       this.app.engine('html', ejs.renderFile);
       this.app.set('view engine', 'html');
   }

   router() {

       this.app.use(router);
       let api = new Api();
       this.app.use('/api', api.router);
   }



}

module.exports = new App().app;