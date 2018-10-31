 'use strict';
const connection = require('../../config/db.config.js'); 
const mysql=require('mysql');
const express = require('express');
const fs   = require('fs');
var jwt = require('jsonwebtoken');
//console.log('Path of file in parent dir:', require('path').resolve(__dirname, '../app.js'));

 var privateKEY  = fs.readFileSync( require('path').resolve(__dirname, '../../config/private.key'), 'utf8');
 var publicKEY  = fs.readFileSync( require('path').resolve(__dirname, '../../config/public.key'), 'utf8');

exports.getToken = (request, response) => {
 
    let sql="SELECT   * FROM team_members where member_email= ?  AND member_password = ?  " ;


    connection.query(sql,[request.body.username,request.body.password], function (error, results, fields)    {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }else if(results.length>0){
        

			var payload = {
				userName: results[0].member_email,
				teamId: results[0].member_teamid,
				fullName: results[0].member_firstname + ' ' + results[0].member_firstname ,
				 
			};
           //console.log(JSON.stringify(results[0].member_id ))
			var i  = 'Mysoft corp';          // Issuer 
			var s  = 'some@user.com';        // Subject 
			var a  = 'http://mysoftcorp.in'; // Audience
			// SIGNING OPTIONS
			var signOptions = {
				issuer:  i,
				subject:  s,
				audience:  a,
				expiresIn:  "2",
				algorithm:  "RS256"
			};


          var token = jwt.sign(payload, privateKEY, signOptions);

           response.json( {"status": 200, "error": null, "response": token }) ;
        } else{
        	 response.json( {"status": 401, "error": null, "response": "No user found" }) ;
        }
        





       
    });
  };
/* 


// PAYLOAD
var payload = {
 data1: "Data 1",
 data2: "Data 2",
 data3: "Data 3",
 data4: "Data 4",
};
 
var i  = 'Mysoft corp';          // Issuer 
var s  = 'some@user.com';        // Subject 
var a  = 'http://mysoftcorp.in'; // Audience
// SIGNING OPTIONS
var signOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "2",
 algorithm:  "RS256"
};


 var token = jwt.sign(payload, privateKEY, signOptions);
console.log("Token - " + token);


var verifyOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "12h",
 algorithm:  ["RS256"]
};
var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));

*/
