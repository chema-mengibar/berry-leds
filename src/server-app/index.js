
const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');

// Raspberry IO
// var rpio = require('rpio'); 
var onoff = require('onoff'); 

// Init
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//POST -> req.body.variable
//GET -> req.query.variable   ,  req.param.variable   

app.post("/color", function(req, res){

  console.log( req.body )

  if( req.body.red && req.body.green && req.body.blue ){
    res.setHeader('Content-Type', 'application/json');
    res.send( {} );
  }
  else{
    res.status(500).send({ error : "failed" });
  }
});

app.use( express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));