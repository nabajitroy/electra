const connection = require('../../config/db.config.js');

/*exports.create = (request, response) => {
    let sql="insert into todos set ?";
    let query = connection.query(sql,request.body,(err,result)=>{
        if(err)
        throw err;
        response.json(request.body);
    });
  };*/

  exports.fetchAll = (request, response) => {
    let sql="SELECT * FROM  team_members WHERE member_teamid = '1' ";
    connection.query(sql, function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;
    });
  };

  exports.fetchCurrentSession = (request, response) => {
    let sql="SELECT * from voting_session where session_status =0 ";
    connection.query(sql, function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;
    }); 
   };
/*
   exports.updateSingle = (request, response) => {
    let sql="UPDATE  todos set ? where id = ?";
    let condition="{'id':"+ request.params.Id+"}";
    connection.query(sql,[request.body,condition], function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;
    }); 
   };

   exports.deleteSingle = (request, response) => {
    let sql="UPDATE  todos set deleted='1' where id = ?";
    connection.query(sql,request.params.Id, function (error, results, fields) {
        if (error) {
            response.json( {"status": 500, "error": error, "response": null} );
            throw error;
        }
        response.json( {"status": 200, "error": null, "response": results}) ;
    }); 
   };*/