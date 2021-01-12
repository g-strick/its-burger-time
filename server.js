const express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var app = express();

var PORT = process.env.PORT || 3006;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
