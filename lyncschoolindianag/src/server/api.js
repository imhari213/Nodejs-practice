'use strict';

let express = require('express');
let router = express.Router();
let contactUs = require('./controllers/contact-us');
let Register = require('./controllers/users');
let contact = require('./controllers/contact');


class Api {

    constructor() {
        this.express = express;
        this.router = router;
        //   this.passport = passport;
        this.init();

    }

    init() {

       

        this.router.post('/contact-us', contactUs.save.bind(express));
       
        this.router.post('/register', Register.register.bind(express));
        
        this.router.post('/contactus' , contact.save.bind(express));

    }
}

module.exports = Api;
