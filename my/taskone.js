var h=require("fs");

h.readFile("hari1.txt",function(err1,data1){
   console.log(data1.toString());
   if(err1) return console.error(err);
   	console.log(" 1st hello world");
   	
});
   
console.log("2nd hello world");
