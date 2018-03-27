var express = require('express');
var session = require('express-session');
var app = express();
var request = require('request');
var _ = require('lodash');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Google Maps API Key AIzaSyAyzcJb41FFwvQeK0z_eLQV1RH5v7Ccpys

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    var options = {
        url: 'https://card4b-masai-masai-coworkingcoffee-stg-v1.p.mashape.com/coworkingspace/api/discovery/getCoWorkingSpaces?City=Los%20Angeles',
        headers: {
          'User-Agent': 'request',
          'Content-Type': 'application/json',
          'X-Mashape-Key': 'ShedIfdxswmsh7n7BWdKbLix2oxep1oKrryjsnl9MPWgR9vWwa'
        }
      };
      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          var info = JSON.parse(body);
          console.log("Got a GET request for the homepage");
          console.log('info: ', info.results);
          var spaces = info.results;
          res.render('index', { reports: spaces });
        } else {
            res.send('err')
        }
      }
       
      request(options, callback);       

})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})