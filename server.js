// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

// Set up Express App //
var PORT = process.env.PORT || 3000;
var app = express();

// Get content from 'public' folder //
app.use(express.static(process.cwd() + '/public'));

// Body Parser // 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method Override //
app.use(methodOverride("_method"));

// Require models folder for syncing //
var db = require("./models");

// Handlebars //
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes //
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Sync sequelize models and start Express app //
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server listening on: "http://localhost:"' + PORT);
  });
});