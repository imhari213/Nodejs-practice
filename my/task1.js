var h=require("fs");
var con=h.readFile("hari.txt",function(err,data){
   if(err) return console.error(err);
   	console.log(con.toString());
});
   console.log("hello world");
