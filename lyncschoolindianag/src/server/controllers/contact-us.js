"use strict";

let ContactUs = require('../models/contact-us');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

let userName = 'schoollync@gmail.com';
let password = 'schoollync123';

let transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: userName,
        pass: password
    }
}));

class Contact {

    save(req, res, next) {

        let email = req.body.email;
        let html = `<div>
                Name : ${req.body.name} <br>
                Email : ${email} <br>
                Message : ${req.body.message} <br>
                </div>`;

        transport.sendMail({
            from: email,
            to: userName,
            subject: 'New contactus request',
            html: html
        }, (error, info) => {

            if (error) {
                return next(error);
            }

            let contactUs = new ContactUs(req.body);

            contactUs.save().then((post) => {

               /* res.render('home', {
                    success: true
                });   */
                
                res.redirect('/thankyou');
                
            }, (err) => {

                return next(err);
            });
        });
    };
}

module.exports = new Contact();
