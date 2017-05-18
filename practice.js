fs=require('fs');

function a(hari)
{
	var call =fs.readFile('hari.txt',function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    hari();
});
}
function b(){
	console.log("Post Execution");
}

	a(b);

    
