var prom = require('promise');
k=function(g){
	return new prom(function(resolve,reject){
		console.log(g);
		var a=10;
		if(a==10)
		return resolve("first second call back");
		else
		return reject("if condition fails");
		
	});
}

l=function(m){
	return new prom(function(resolve,reject){
		console.log(m);
		return resolve("working in 2nd function tooo....")
	});
}
  
 n=function(j){
 	return new prom(function(resolve,reject){
 		console.log(j);
 		return resolve("hello every one.!!!!!");

 	});
 }


n().then(function(hu){
   return l(hu)
}).then(function(ki){
	return k(ki)
}).then(function(ki){
	return k(ki)
}).catch(function(err){
	console.log(error)
});