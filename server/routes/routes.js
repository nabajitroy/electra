 


const express = require('express');
const router = express.Router();
 
 const team = require('../controllers/team.controller.js');
 const admin = require('../controllers/admin.controller.js');
 const dashboard = require('../controllers/dashboard.controller.js');
 const authentication = require('../controllers/authentication.controller.js');
  
       router.get('/getTeamPlayers', team.fetchAll);
      
       router.get('/getCurrentSession', team.fetchCurrentSession);

       router.get('/getSessions', admin.fetchAll);
       router.post('/createSession', admin.createOne);

       router.put('/openCloseSession', admin.openCloseSession); 
       router.put('/updateSession/:session_id', admin.updateSession);
       router.get('/getResult', dashboard.getVotingResult);
       router.post('/getToken', authentication.getToken);
module.exports=router; 