var f=require('fs');
function first(){
	var con=f.readFile("prasad.txt",function(err,data){
     if(err) console.error("error") 
	console.log(con)
});
}
function second(){
	console.log("2nd function")
};

first();
second();
