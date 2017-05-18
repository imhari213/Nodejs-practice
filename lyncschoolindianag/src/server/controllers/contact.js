"use strict";

//let ContactUs = require('../models/contact-us');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

let userName = 'supersample04@gmail.com';
let password = 'sundaytomonday';

let transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: userName,
        pass: password
    }
}));

class ContactMe {

    save(req, res, next) {
        let name  = req.body.name;
        console.log(name);
        let email = req.body.email;
        console.log(email);
        let message = req.body.message;
        let phone = req.body.PhoneNumber;
        let emailone ="lyncschoolindia@gmail.com";
        
        
        
       // let email = req.body.email;
        let html = `<div>
                Name : ${name} <br>
                Email : ${email} <br>
                Message : ${message} <br>
                Phone : ${phone}<br>
                </div>`;

        transport.sendMail({
            from: email,
            to: emailone,
            subject: 'New contactus request',
            html: html
        }, (error, info) => {

            if (error) {
                return next(error);
            }

       else  {
            res.redirect('/thankyou');
           
       }
            
            
        });
    };
}

module.exports = new ContactMe();
