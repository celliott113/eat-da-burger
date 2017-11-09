var express = require("express");
var bodyParser = require("body-parser");

// Import routes and give the server access to them.
var burgersController = require("./controllers/burgerController.js");
// Import the model (burger.js) to use its database functions.
var burger = require("./models/burgers.js");


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the appliburgerion directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

app.use("/api/burgers", burgersController);

app.listen(port);