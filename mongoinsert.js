
var promise=require('promise');
var MongoClient = require('mongodb').MongoClient,assert = require('assert');
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
 insertcol(db,function() {
 	db.close();
 });
});
var insertcol = function(db,callb) {
	console.log("processing");
  return new promise(function(resolve,reject){
 	var cursor = db.collection('mycollection').insert({
 		"details" : {
 			"name" : "hari",
 			"Age"  : "20", 
 			"Place" : "Hyderabad",
 			"occupation" : "employ"},
 		"Eductaion" : [
          {"School":"Ushodaya (9 to 10","6 to 8":"Drssvb"},
          {"College":"Sir C R Polytechnic","Engineering":"Sri vasavi Engineering"}],
      } ,function(err,res){
      	if(res) {return resolve("inserted Succesfully");
      	call();
      }
      	else {return reject("err");
      	}
     /* assert.equal(err,null);
      console.log("Data inserted Succesfully");   */
 	});
 });

}
 






