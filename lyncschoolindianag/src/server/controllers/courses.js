var  express = require('express');
var MongoClient = require('mongodb').MongoClient;
var configuration = require('../config/db.config');
var promise = require('promise');


exports.getCoursesList =  function(){
    return new promise(function(resolve,reject){
    console.log(" In get Courses function ");
    var data ={}; var elements=[];
    MongoClient.connect(configuration.url,function (err,db) {
        console.log("inside mongo connect");
        if(db){

            console.log("inside lync school");
  var cursor = db.collection('courses').find();
       cursor.each(function(err,item){
           if(item) {

                   id =  item._id;
                   data.id= id;
                 //  console.log("hello " +data.id);
                   coursename = item.course_name;
                   data.coursename = coursename;
                  // console.log("hello " +data.coursename);
                   courseimage = item.course_image;
                   data.courseimage = courseimage;
                 //  console.log("hello" +  data.courseimage);
                   urlname = item.url_name;
               data.urlname = urlname;
               alttext = item.alt;
               data.alttext = alttext;
             //  console.log("hello" + data.urlname);
elements.push({courseid:data.id,coursename: data.coursename,courseimage : data.courseimage,urlname: data.urlname, alttext: data.alttext});   
               console.log(elements.courseid);
                   resolve(elements);

           }
           else
               {
                 console.log(err);
               return reject(err);

               }
       });   // end of for


    }
       else {
           console.log("In courses route db err"+err);
       }
   });


        }); // end of promise

}
