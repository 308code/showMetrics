
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var homePageController = require('./controllers/homePageController');

var port = process.env.PORT || 3000;

app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
homePageController(app);

app.listen(port);
