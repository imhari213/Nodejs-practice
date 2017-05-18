// Passport Needs this configuration
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '195589520897090', // your App ID - Need to change
		'clientSecret' 	: '01b466a7c482955e6bcde53bd5c4e2de', // your App Secret - Need to change
		'callbackURL' 	: 'http://localhost:3000/api/facebook/callback' //Need to change
	},
	'googleAuth' : {
		'clientID' 		: '419227143205-ehtii2n8bigbudo08loeo6bca2eem624.apps.googleusercontent.com', //Need to change
		'clientSecret' 	: 'e2kD715OYpbxQ50MCqtDZUFI', //Need to change
		'callbackURL' 	: 'http://localhost:3000/api/google/callback' //Need to change
	}

};