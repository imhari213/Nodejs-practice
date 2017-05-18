var ejs=require('ejs');
var express = require('express');
var app=express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('demo.ejs');
});


app.get('/register' , function(req,res){
res.send("Hello digital");
});
app.get('/login' , function(req,res){
res.send("Login into it...,");
});
  app.listen(1919);
 console.log("server is running on port no 1919");