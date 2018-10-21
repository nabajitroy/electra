const connection = require('../../config/db.config.js');

  const mysql=require('mysql');
  const express = require('express');
  exports.getVotingResult = (request, response) => {
 
    let sql="SELECT v.voting_id,tm.member_firstname,tm.member_lastname, v.vote_count FROM voting v JOIN team_members tm ON v.member_id = tm.member_id JOIN voting_session vs on v.session_id = vs.session_id AND vs.session_status = 0 WHERE v.team_id = 1 AND v.session_id = 66" ;


    connection.query(sql, function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results }) ;
    });
  };

 
 
  

    