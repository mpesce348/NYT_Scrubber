// Dependencies

var express = require('express');
var mongoose = require('mongoose');
var react = require('react');
var bodyParser = require('body-parser');


// Set Up Express instance
var app = express();

// Set up port to run our express app
var PORT = process.env.PORT||8080;
//Set up a router to run express
var router = express.Router();

// Require routes file to pass our router object
// require('./config/routes')(router);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Files in Our Public Director
app.use(express.static('public'));

// Have requests go through Router middleware
app.use(router);



var db = 'mongodb://localhost/NYT_Scrubber';

// Connect Mongoose to Database

mongoose.connect(db, (error)=>{
  if (error){
    console.log(error);
  } else{
    console.log('connected to Mongoose');
  }

});

// Listen to the port
app.listen(PORT, ()=>{
  console.log('Listening on Port '+ PORT);
});
