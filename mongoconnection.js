var promise=require('promise');
first=function(it){
	console.log(it);
var MongoClient = require('mongodb').MongoClient,assert = require('assert');
var url = 'mongodb://localhost:27017/test';
 MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
 findcol(db,function() {
 	db.close();
 });
});
 var findcol = function(db,callback) {
 	var cursor = db.collection('mycollection').find();
 	cursor.each(function(err,doc) {
 		assert.equal(err,null);
 		if(doc !=null) {
 			return resolve(doc);
 		}else {
 			return reject("error");
 		}
 	});
 };
}
 second=function(ii){
 	console.log(ii);
console.log("haii");
 }


demo = function(){
	return new promise(function(resolve,reject){
	console.log('Display result');
	return resolve ("pass");
	});
}

demo().then(function(i){
	return first(i);
}).then(function(ii){
	return second(ii);
}).catch(function(error){
	console.log(error);
});