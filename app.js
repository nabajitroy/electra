    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');
    const app = express();
    const routes = require('./server/routes/routes');
   // require('./server/routes/routes.js');
   app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname,'dist/electra')));
    app.use('/teams',routes);
    app.use('/admin',routes);
    app.use('/dashboard',routes);

 

 






    app.get('*',(req,res)=>{

         res.sendFile(path.join(__dirname,'dist/electra/index.html'));

    })
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });



 