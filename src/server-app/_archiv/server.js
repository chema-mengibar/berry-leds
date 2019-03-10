var app = require("express")();
var http = require("http").Server(app);
//var cors = require('cors');
var fs = require('fs');

//var reportsRegistry = require('./data/reports_registry.json');

//app.use(cors())

// function handleFile(err, data) {
//     if (err) throw err
//     console.log( data )
//     obj = JSON.parse(data)
//     return obj
// }

app.get("/", function(req, res){
    res.sendFile('index.html', {root: __dirname })
});



app.get("/registry", function(req, res){

    //res.send( reportsRegistry )
    var  path = './data/reports_registry.json';
    res.sendfile(path, {root: './'});

});


app.get("/report", function(req, res){
    if( req.query.doc ){
        var  path = './data/reports/' + req.query.doc + '.json';
        if (fs.existsSync(path)) {
            res.sendfile(path, {root: './'});
        }
        else{
            res.status(404).send({ error : "doc id not found " + req.query.doc  });
        }
    }
    else{
        res.status(500).send({ error : "no doc id in request" });
    }
    //var  path = req.params[0] ? req.params[0] : 'index.html';
});




http.listen(8080, function(){
    console.log("listening on *:3000");
});


/*
http.listen(8080, function() {
  http.close();
});

*/
