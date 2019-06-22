// express.
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//const express = require('express')
const app = express()

// Express App 
// var app = express();
var PORT = process.env.PORT || 3000;

// Body Parser app to data

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static("app/public"));

// app.use(bodyParser.text());
// app.use(bodyParser.json({
//     type: "application/vnd.api+json"
// }));


//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listening port 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// app.listen(PORT,() => console.log(`listening on PORT ${PORT}`))