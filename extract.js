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
    res.render('show.ejs');
});

app.post('/show', function(req,res){
   
    var MongoClient = require('mongodb').MongoClient,assert = require('assert');
	var url = 'mongodb://localhost:27017/test';
	var str= [];
	MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
    findcol(db,function() {
 	db.close();
 });
});
	var findcol = function(db,callback) {
 	var cursor = db.collection('mycollections').find();
 	cursor.each(function(err,item){
 			str.push(item);
 			res.write(JSON.stringify(str));
 	});
 	
}
});
app.listen(8002, function() {
  console.log("Server is running!");
});
