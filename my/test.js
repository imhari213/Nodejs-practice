
var fs = require('fs');
function one(){

/*var contents = fs.readFileSync('hari.txt').toString();
console.log(contents);   */

fs.readFile('hari.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

}
function two(){ 
console.log("Hello!"); 
}
one();
two();