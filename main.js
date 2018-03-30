/*var http = require("https");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
*/

var express = require('express'),
    app = express(),
    config;
//Include configuration variables
    if(!process.env.ENVIRONMENT){
        config = require('./config');
    }

//Add route for root directory
app.get('/', function (req, res) {
    res.send('Hello world');
    //Add api logic here
});

//Start Application
app.listen(process.env.PORT || config.port, function () {
    console.log('App listening on port '+(process.env.PORT || config.port)+'!');
});