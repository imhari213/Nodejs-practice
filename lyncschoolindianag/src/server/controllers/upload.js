 let express = require('express');
let multer = require('multer');

User.save(function(err) {
            if (err) {console.log(err);}
            else {res.redirect('/thankyou');  
                 let storage = multer.diskStorage({
 destination: function (request, file, callback) {
   callback(null, './upload');
 },
 filename: function (request, file, callback) {
       callback(null, (Math.random().toString(36)+'00000000000000000').slice(2, 10) + Date.now() + file.originalname);
     
   //console.log(file);
 }
});

var limits = { fileSize: 1024 * 1024* 2 };
                  
                  
        let upload = multer({ limits: limits, storage: storage, fileFilter: function (req, file, cb) {
   if (!file.originalname.match(/\.(docx|doc|pdf|txt)$/)) {
       return cb(new Error('Only Word or Pdf format files are allowed!'));
        response.render('/',{Error:"Invaild Doc Type"});
   }
   cb(null, true);
 } }).single('filen');