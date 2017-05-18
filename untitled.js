var ejs=require('ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var express = require('express');
var app = express();
var session = require('express-session');
var validator = require('express-Validator');
var db = mongoose.connection;
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
app.use(session({secret: 'ssshhhhh'}));
var sess;
 
 app.get('/',function(req,res){
 	sess = req.session;
 	if(sess.email){
 		res.write('you are already logged in..!');
 	}
 	else
 	{
 		res.redirect('login.ejs')
 	}
 });

 app.post('/login',function(req,res){
  sess = req.session;
   sess.email=req.body.Email;
   var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log("connected.")
          });
           db.collection('mycollections').findOne({"Name": req.body.Name , "Email" :sess.email },function (error,object)  {
            if(!object){
                res.render('login.ejs',{"mess": "Invalid email ID or username"});
            }
            else {
                   req.session.authenticated = true;
                    console.log(object._id);
                    console.log(object.Name);  
                    console.log(object.Email);
                    console.log(object.Num);
                    /*var e=object.Email;
                   
                    var id=object._id;
                    var na=object.Name;*/
                    res.render('show.ejs' , {"Name":object.Name ,"Email":object.Email,"Num":object.Num,"Obj":object._id}); 
                
            }
           });
           
       
});

app.post('/logout', function (req, res, next) {
		req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
	});

		app.listen(8005, function() {
  console.log("Server is running on 8005!");
});  