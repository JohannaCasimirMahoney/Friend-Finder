// express.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App 
var app = express();
var PORT = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static files allows the call to be made before the routes in order for it to work.
app.use(express.static('app'));

//Routers
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listening port 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});