var  express = require('express');
var User = require('../models/users');
var fs= require('fs');
var promise = require('promise');
//var mail = require('./mail.js');
var multer	=	require('multer');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
let userName = 'supersample04@gmail.com';
let password = 'sundaytomonday';

var xoauth2 = require('xoauth2');

var generator = xoauth2.createXOAuth2Generator({
  user: 'node',
  clientId: '418060269523-7b0c6thpbdiaeiikmep5or5hamnh5upn.apps.googleusercontent.com',
  clientSecret: 'ADsvdkuEEUVsScT9Rr22XONc',
});

generator.on('token', function(token){
  console.info('new token', token.accessToken);
  // maybe you want to store this token
});

let transport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        host: 'smtp.gmail.com',
        port: 587,
        user: userName,
        pass: password
    }
}));



exports.register =  function (req,res){
    var firstname = req.body.fname;
    console.log("ssanj" + req.files);
    var lastname = req.body.lname;
        var  email= req.body.email;
        var mobilenumber= req.body.mobile;
        var phonenumber= req.body.phone;
        var address= req.body.add;
        var city= req.body.city;
        var  state= req.body.state;
        var  course= req.body.course;
        var program= req.body.program;
        var resumename= req.files.filen.name;
        var createdat= new Date();
        var hostname = req.get('host');
        var resumemail = "";
    
      var new_user = new User({
        firstname:firstname,
        lastname: lastname,
        email:email,
        mobilenumber: mobilenumber,
        phonenumber:phonenumber,
        address:address,
        city:city,
          state:state,
         course:course,
          program:program,
          resumename:resumename,
          createdat: createdat

    });
    
   
  // var    sampleFile = req.files.filen;
    fs.readFile(req.files.filen.path, function (err, data) {
        // ...
    //    console.log()
		
		
        var fileName=req.body.email+Date.now()+req.files.filen.name;
  var newPath = __dirname + "/uploads/"+fileName;
		
		 var mailOptions = {
			 from: userName,
            to: "lyncschoolindia@gmail.com",
            subject: "User Registration" + " " + email + " ",
            html: "<b>Firstname : </b>" + firstname +   "<br/><b>lastname:</b>" +lastname + "<br/><b>email:</b>" + email +  "<br/><b>mobilenumber:</b>" + mobilenumber + "<br/><b>phonenumber:</b> " + phonenumber+ "<br/><b>address:</b>" + address + "<br/><b>city:</b>" + city + "<br/><b>state:</b>" +state + "<br/><b>course: </b>" + course + "<br/><b>program: </b>" + program + "<br/><b>resumename:</b>"+resumename + "<br/><b>createdat:</b>" + createdat + "", 
			  attachments: [
				  {   // utf-8 string as an attachment 
            filename: fileName,
            content: 'hello world!',
					  path: newPath
        },
				  
				  ]
        }

		
		
		
		
		
  fs.writeFile(newPath, data, function (err) {
   console.log("done boy");
      // res.redirect("back");  
      res.redirect('/thankyou');
      
  });
        new_user.resumename=fileName;
        new_user.save(function(err){
       if(err) console.log(err);
       else{
           console.log(new_user.firstname+"    USer first name");
           console.log("successfully entered");
		  
		   transport.sendMail(mailOptions, function (error, response) {
			   
			   if(error){
				   console.log(error);
			
			   }else{
				   console.log(response);
			   }
			   
		   });
		   
		   
		   
		  
	   } // end of else
            
});
        
})
    
}

                 


