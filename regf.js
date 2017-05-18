var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var ejs=require('ejs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

    

app.get('/' , function(req,res){
    res.render('registrtion.ejs');
});

app.post('/regst', function(req,res){
   
    var MongoClient = require('mongodb').MongoClient,assert = require('assert');
	var url = 'mongodb://localhost:27017/test';
	MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
    insertcol(db,function() {
 	db.close();
 });
});


    var insertcol = function(db, callback) {
    	console.log("processing"); 
   var cursor=db.collection('mycollections').insertOne({
   	    "Name": req.body.name,
        "Email": req.body.email,
        "Pass": req.body.pass,
        "Num": req.body.num,
    },function(err,res){
      	if(res) { console.log("inserted Succesfully");
      }
      	else { console.log("err");
      	}
});
}
res.end("Registration Succesfully Completed!");
});
app.listen(8001, function() {
  console.log("Server is running!");
});
