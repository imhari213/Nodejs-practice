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
app.use(session({secret: 'ssshhhhh',
   	                // connect-mongo session store 
   	  proxy: true,
   	  resave: true,
  	  saveUninitialized: true
}));
var sess;
 
 app.get('/',function(req,res){
 	sess = req.session;
 	if(sess.email){
 		console.log("you are logged innbro:)");
 		res.render('in.ejs');
 	}
 	else
 	{
 		res.render('log.ejs')
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
           db.collection('mycollections').findOne({Name: req.body.Name ,Email :sess.email },function (error,object)  {
            console.log(object);
            if(!object){
                res.render('login.ejs',{"mess": "Invalid email ID or username"});
            }
            else {
                   req.session.authenticated = true;
                   
                    console.log(object._id);
                    console.log(object.Name);  
                    console.log(object.Email);
                    console.log(object.Num);
                    

                      var len=object.country.length;
                   for(i=0;i<object.country.length;i++)
                   {
                      console.log(object.country[i]);
                   }
                  
                    console.log(object.Num);
                    
                    /*var e=object.Email;
                   
                    var id=object._id;
                    var na=object.Name;*/
                    Name=object.Name;
                    Email=object.Email;
                    Obj=object._id;
                    /*   db.collection('cars').findOne();{
              country=object.country;
             /* country1=object.country[1];
              country2=object.country[2];
              country3=object.country[3];
               country4=object.country[4]; 
              country5=object.country[5];
             console.log(object.country[6]);*/
                  res.render('show.ejs' , {"Name":object.Name ,"Email":object.Email,"Num":object.Num,"Obj":object._id}); 
 
            }
                
            }
            
         
}
           
         });
});

app.post('/logout', function (req, res, next) {
		req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
     res.render('login.ejs',{"mess": "you are logged out"});
  }
	});
});
app.listen(8005, function() {
  console.log("Server is running on 8005!");
});  