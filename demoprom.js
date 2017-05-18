var promise=require('promise');
hari=function(h){
	return new promise(function(resolve,reject){
	console.log(h);
	var name="hari";
	if(name=="hari")
		return resolve("hari.....cool kid");
	else
		return reject("not so cool...");
});
}
prasad=function(p){
	return new promise(function(resolve,reject){
		console.log(p);
		return resolve("Life it goes on..,")
});
}	

c=function(){
	return new promise(function(resolve,reject){
		console.log(c);
		return resolve("Greetings");
	});
}

c().then(function(inp){
	return hari(inp)
}).then(function(pin){
    return prasad(pin)
}).then(function(pin){
    return prasad(pin)
}).catch(function(error){
	console.log(error)
});