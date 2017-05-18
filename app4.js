
var promise = require('promise');

first = function(i){
	return new promise(function(resolve,reject){
		console.log("first function");
		console.log(i);
		
		var a = 10;
		if(a==10)
	return 	resolve(a);
	else 
		return reject(0);
	});
	
}

disp = function(i1){
	console.log("second function ");
	var a=3;
	var b=5;
	c=a+b;
	return new promise(function(resolve,reject){
		console.log(i1);
		var name ="naveen" ;
		if(name== "naveen" )
			return resolve(c) ;
		else
			return reject(" In disp function error");
	});
	
}

readc = function(){
	return new promise(function(resolve,reject){
	console.log('Display C');
	return resolve ("hello");
	});
}


readc().then(function(input){
	return disp(input);
}).then(function(inputone){
	return first(inputone);
}).catch(function(error2){
	console.log(error2);
});
