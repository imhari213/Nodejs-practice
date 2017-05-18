var h=require('fs');
function a(){
	var c=h.readFile("hari.txt",function(err,data){
		if(err)
		{
			console.log("error");
		}
		else{
			console.log(c);
		}
	});
}
function b(){
	console.log("it is the second function");
}

a();
b();