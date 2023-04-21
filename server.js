// import express package
const express = require('express');

// initialise express framework
const app = express();

// serve static files from public folder
// app.use(express.static('public'));
app.use(express.static(__dirname + '/dist'));

//serve index file for the root path
app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/public/index.html')
    res.sendFile(__dirname + '/dist/index.html')
   })

// start server
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
   });