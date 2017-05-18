'use strict';

let mongoose = require('mongoose');

let userSchema  = mongoose.Schema({
    firstname : {
        type:String,
        unique:false
       // required: true
    },
    
    lastname : {
        type:String,
        unique:false
       // required: true
    },
    
    email : {
        type:String,
       // required: true,
        unique:true
    },
    
    mobilenumber : {
        type:String,
       // required: true,
        unique:true
    },
    
    
    phonenumber : {
        type:String,
        unique:false
       // required: false
    },
    
    address : {
        type:String,
       // required: true,
        unique:false
    },
    
    city : {
        type:String,
        unique:false
       // required: true
    },
    
    state : {
        type:String,
        unique:false
       // required: true
    },
    
    course : {
        type: String,
        unique:false
      //  required: true
        
    },
    
    program : {
        type:String,
        unique:false
      //  required: true
    },
    
    resumename: {
        type: String,
        unique:false
    //required : true
     },
    
    
    createdat :{
        type: String,
        unique:false
       // required: true
    }
    
});

module.exports  =  mongoose.model('users', userSchema);