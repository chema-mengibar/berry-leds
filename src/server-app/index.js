
const express = require('express')()
const path = require('path')
var cors = require('cors');

const PORT = process.env.PORT || 5000

const Mongo = require( "./modules/mongo.js");

express.use(cors())

express.get("/registry", function(req, res){
    var  path = './data/reports_registry.json';
    res.sendfile(path, {root: './'});
});



express.get("/report", function(req, res){

  if( req.query.doc ){

    let pDocId =  req.query.doc;
    let pCollectionName =  req.query.collection;

    let docContent = Mongo.getDoc( pDocId, pCollectionName );

    docContent.then(

      function( respDocData ){
        res.setHeader('Content-Type', 'application/json');
        res.send( respDocData );
        console.log( respDocData)
      }
    )
  }
  else{
    res.status(500).send({ error : "no doc id in request" });
  }
  //var  path = req.params[0] ? req.params[0] : 'index.html';
});



// express.get("/report", function(req, res){
//   if( req.query.doc ){
//     var  path = './data/reports/' + req.query.doc + '.json';
//     if (fs.existsSync(path)) {
//       res.sendfile(path, {root: './'});
//     }
//     else{
//       res.status(404).send({ error : "doc id not found " + req.query.doc  });
//     }
//   }
//   else{
//     res.status(500).send({ error : "no doc id in request" });
//   }
//   //var  path = req.params[0] ? req.params[0] : 'index.html';
// });


express.listen(PORT, () => console.log(`Listening on ${ PORT }`));