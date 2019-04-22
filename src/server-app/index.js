
const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');

// https://github.com/jperkin/node-rpio
var rpio = require('rpio');

var pin_red = 33;	
var pin_blue = 12;	
//var pin_blue = 33;	

rpio.open( pin_red, rpio.PWM);
rpio.open( pin_blue, rpio.PWM);
//rpio.open( pin_blue, rpio.PWM);

rpio.pwmSetClockDivider(8);

rpio.pwmSetRange(pin_red, 100);
rpio.pwmSetRange(pin_blue, 100);
//rpio.pwmSetRange(pin_blue, 100);


//const Gpio = require('onoff').Gpio;
// const led = new Gpio(17, 'out');


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
    
    rpio.pwmSetData(pin_red, parseInt(req.body.red));
    rpio.pwmSetData(pin_blue, parseInt(req.body.blue));
    //rpio.pwmSetData(pin_blue, parseInt(req.body.blue));
       
    res.status(200).send({ msg : "ok" });
    //var inversedValue =  ( req.body.red == 0) ? 1 : 0;
    //led.writeSync( inversedValue );
  }
  else{
    res.status(500).send({ msg : "failed" });
  }
});

app.use( express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

/**
 * 
 *     res.setHeader('Content-Type', 'application/json');
    res.send( {} );
*/
