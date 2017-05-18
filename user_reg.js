/**
 * Created by digitallync on 21-10-2016.
 */

//var mail = require('C:/Users/Sanjeevini/markmyevent/javascript/mail.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var User = require('D:/Sanjeevini/models/userd.js');
var date  =  new Date();
var sms = require('D:/Sanjeevini/javascript/sms.js')
//var dialog = require('dialog');
//var promise = require('Promise');
exports.registeruser= function(request,response){


    this.ip = request.connection.remoteAddress.toString();
    this.hostname = request.get('host');
    this.uname = request.body.uname;
    this.email =  request.body.email;
    this.phone =  request.body.phone;
    this.pass  =  request.body.pass;
    mongoose.connect('mongodb://Localhost/digitallync');
    var new_user = new User({
        name:this.uname
        , email: this.email
        , password: this.pass,
        created_at:date,
        ip_address : this.ip,
        user_verified: false
        ,phone:this.phone


    });


    new_user.save(function(err){
        if(err) console.log(err);
        else

        /*   new mail.sendmail(hostname,new_user.email,new_user.name).then(function(i){
         if(i==1) {response.redirect('/');
         dialog.info("A verification link has been sent to your mail ");
         }
         else {response.render("error.ejs");}
         }).catch(function(error) {
         console.log('oh no', error);
         });

         */
        //console.log("values have been entered");
            console.log(new_user);
        mongoose.connection.close();


        new sms.smservice(request.body.phone);
        //     console.log(jacob);

        response.render("index.ejs");
    });

}
