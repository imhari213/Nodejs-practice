var  express = require('express');
var MongoClient = require('mongodb').MongoClient;
var configuration = require('../config/db.config');
var promise = require('promise');


exports.getModuleContent =  function(qid){
    return new promise(function(resolve,reject){
        var cursor;
    console.log(" Biscuit function");
    var data ={}; var elements=[]; var module_elements=[];
    MongoClient.connect(configuration.url,function (err,db) {
        if(db) {
            console.log("Biscuit DB Connected");
         //   var did = new require('mongodb').ObjectID(qid);
         //   console.log("Biscuit " + did);
  db.collection('course_modules').findOne({"view_more_url": qid},function(error,object){
      if(object) {
          title = object.title;
          data.title = title;
          console.log("in subcourse" +  data.title);


          description = object.description;
          data.description = description;
          //console.log("in subcourse" +   data.description);

          metatitle = object.Meta_Title;
          data.metatitle = metatitle;

          metakeywords = object.Meta_keywords;
          data.metakeywords = metakeywords;

          metadescription = object.Meta_Description;
          data.metadescription = metadescription;

          image= object.image;
          data.image = image;

          alttext = object.alt;
          data.image = alttext;
          console.log("in subcourse" +  data.image);


           subtitle= object.subtitle;
          data.subtitle = subtitle;
          console.log("in subcourse" +  data.subtitle);

title1 = object.title1;
data.title1 = title1;

          modules= object.modules;
         // data.modules = modules;
          console.log("in subcourse" +  modules.length);

           for(var k=0; k<modules.length;k++){
               console.log("in for " + modules[k].module_number);
                console.log("in for " + modules[k].module_heading);
               console.log("in for " + modules[k].module_description);
               module_elements.push({modulenumber:modules[k].module_number,moduleheading:modules[k].module_heading, moduledescription :modules[k].module_description, alttext: modules[k].alttext });
           }

          elements.push({title: title, description:description,image:image,subtitle:subtitle,modules:module_elements, metatitle:metatitle, metakeywords:metakeywords, metadescription:metadescription, alttext:alttext,title1:title1});
//          elements.push({pagetitle:data.pagetitle,subcourseid: data.subcourseid,subcoursename:data.subcoursename, subcoursedescription:data.subcoursedescription,subcoursesubtitle:data.subcourseimage});
          return resolve(elements);
      } else{
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
