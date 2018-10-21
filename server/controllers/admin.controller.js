const connection = require('../../config/db.config.js');

 const mysql=require('mysql');
  const express = require('express');
  exports.fetchAll = (request, response) => {
     /*let sql="SELECT 
     session_name,
     session_startdate,
     session_enddate,
     session_status,
     date_created,
     last_modified   
     FROM voting_session WHERE deleted = 0 ORDER BY last_modified DESC" ;*/
    let sql="SELECT * FROM voting_session WHERE deleted = 0 ORDER BY last_modified DESC" ;



    connection.query(sql, function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;
    });
  };

   exports.createOne = (request, response) => {

     let sql="INSERT INTO voting_session set ? ";
     let query = connection.query(sql,request.body,(err,result)=>{
        if(err){
        throw err;
         }
         response.json( {"status": 200, "error": null, "response": response.body}) ;      
    });
   };

    exports.openCloseSession = (request, response) => {
console.log("Hello I am here");
     /*let sql="INSERT INTO voting_session set ? ";
     let query = connection.query(sql,request.body,(err,result)=>{
        if(err){
        throw err;
         }
         response.json( {"status": 200, "error": null, "response": response.body}) ;      
    });*/
   };

   
   exports.updateSession = (request, response) => {
    delete request.body.isEditable;
    delete request.body.session_id;
    delete request.body.date_created;
    

    let sql="UPDATE  voting_session set ? where session_id = ?";
   // let condition="{'session_id':"+ request.params.session_id+"}";
    connection.query(sql,[request.body,request.params.session_id], function (error, results, fields)    {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;

    }); 

   };

   exports.deleteSession = (request, response) => {
  console.log("From server")
    console.log(request.params.session_id)

     let sql="UPDATE  voting_session set deleted= 1 where session_id = ?" ;
   // let condition="{'session_id':"+ request.params.session_id+"}";
    connection.query(sql,[request.params.session_id], function (error, results, fields)    {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;

    });  
   };