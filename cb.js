var data="Hari";
var myCallback = function(err, data) {
  if (err) console.error(err; // Check for the error and throw if it exists.
  console.log('got data: '+data); // Otherwise proceed as usual.
};

var usingItNow = function(callback) {
  callback(null, 'get it?'); // I dont want to throw an error, so I pass null for the error argument
};
var usingItNow = function(callback) {
  var myError = new Error('My custom error!');
  callback(myError, 'get it?'); // I send my error as the first argument.
};
usingItNow(myCallback);