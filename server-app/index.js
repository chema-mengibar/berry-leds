
const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');

var rpio = require('rpio'); // https://github.com/jperkin/node-rpio

var pin_red = 12;	
var pin_green = 32;	
var pin_blue = 33;	

//rpio.open( pin_red, rpio.PWM);
rpio.open( pin_green, rpio.PWM);
rpio.open( pin_blue, rpio.PWM);

rpio.pwmSetClockDivider(8);

//rpio.pwmSetRange(pin_red, 100);
rpio.pwmSetRange(pin_green, 100);
rpio.pwmSetRange(pin_blue, 100);

//const Gpio = require('onoff').Gpio;
// const led = new Gpio(17, 'out');


// Init

const PORT = process.env.PORT || 5000

app.use(cors())
app.use( express.json() )
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//POST -> req.body.variable
//GET -> req.query.variable   ,  req.param.variable   

app.post("/color", function(req, res){

  console.log( req.body )

  if( req.body.red !== null
        && req.body.green !== null 
        && req.body.blue !== null ){
    
    //rpio.pwmSetData(pin_red, parseInt(req.body.red));
    rpio.pwmSetData(pin_green, parseInt(req.body.green));
    rpio.pwmSetData(pin_blue, parseInt(req.body.blue));
       
    res.status(200).send({ msg : "ok" });
  }
  else{
    res.status(404).send({ msg : "failed" });
  }
});

app.use( express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

/**
 * 
 *     res.setHeader('Content-Type', 'application/json');
    res.send( {} );
*/
