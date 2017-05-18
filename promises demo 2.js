var Pro = require('promise');
k=function(g){
	return new promise(function(resolve,reject){
		var a=10;
		if(a==10)
		{
			return resolve("first second call back");
		}
		else{
			return reject("if condition fails");
		}
	});
}

l=function(m){
	return new promise(function(resolve,reject){
		return resolve("working in 2nd function tooo....")
	});
}
  
 n=function(j){
 	return new promise(function(resove,reject){
 		return resolve("hello every one.!!!!!");
 	});
 }


 n().then(function(hu){
   return l(hu);
}).then(function(ki){
	return k(ki)
}).then(function(ki){
	return k(ki)
}).catch(function(err){
	console.log(error)
});