var  express = require('express');
var MongoClient = require('mongodb').MongoClient;
var configuration = require('../config/db.config');
var promise = require('promise');


exports.getCoursesList =  function(qid){
    return new promise(function(resolve,reject){
    console.log(" In get subCourses function ");
    var data ={}; var elements=[];
    MongoClient.connect(configuration.url,function (err,db) {
        if(db) {
            console.log("in db");
         //   var did = new require('mongodb').ObjectID(qid);
          //  console.log("hi" + did);
  var cursor =db.collection('subcourse').find({"url_name": qid});
      cursor.each(function(error,object) {
          if(object){
          pagetitle = object.page_title;
          data.pagetitle = pagetitle;
       //   console.log("in subcourse" +  data.pagetitle);
          subcourseid = object._id;
          data.subcourseid = subcourseid;
         // console.log("in subcourse" +  data.subcourseid);
          subcoursename = object.sub_course_name;
          data.subcoursename = subcoursename;
        //  console.log("in subcourse" +  data.subcoursename);
          subcoursedescription = object.sub_course_description;
          data.subcoursedescription = subcoursedescription;
        //  console.log("in subcourse" +  data.subcoursedescription);
          subcourseimage= object.sub_course_image;
          data.subcourseimage = subcourseimage;
        //  console.log("in subcourse" +  data.subcourseimage);
           viewmoreurl = object.view_more_url;
              data.viewmoreurl = viewmoreurl;
             console.log("in subcourseurl " +  data.viewmoreurl);

             metatitle = object.Meta_Title;
             data.metatitle = metatitle;

             metadescription = object.Meta_Description;
             data.metadescription = metadescription;

             metakeywords = object.Meta_keywords;
             data.metakeywords = metakeywords;

             alttext = object.alt;
             data.alttext = alttext;

             appendtext = object.append_string;
             data.appendtext = appendtext;
console.log("Appendtext" + data.appendtext);

title1 = object.title1;

data.title1 = title1;
console.log("hey"+ data.title1);
          elements.push({pagetitle:data.pagetitle,subcourseid: data.subcourseid,subcoursename:data.subcoursename, subcoursedescription:data.subcoursedescription,subcourseimage:data.subcourseimage,viewmoreurl:data.viewmoreurl,metatitle: data.metatitle,metadescription: data.metadescription, metakeywords : data.metakeywords,alttext : data.alttext, appendtext: data.appendtext,title1:data.title1});
          return resolve(elements);
          }
      else{
          console.log(error);
          return reject(error);
      }
    });

        } else {
            console.log(err);
        }


   });


        }); // end of promise

}
