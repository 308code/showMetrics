
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

//var bodyParser = require('body-parser');



// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var jsonParser = bodyParser.json();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://308code:1_awsomegun_308@ds161497.mlab.com:61497/show-metrics');
// var Schema = mongoose.Schema;

// var Show = mongoose.model('Show',showSchema);


// show1.save(function(err){
//     if(err) throw err;
//     console.log('show saved!');
// });



// app.use('/', function (request, response, next) {
//     console.log('Request Url: ' + request.url);
//     Show.find({},function(err,users){
//         if(err) throw err;
//         console.log(users);
//     })
//     next();
// });



// app.get('/', function (request, response) {
//     response.render('index');
// });

// app.get('/show/:showId', function (request, response) {
//     response.render('show', {
//         showId: request.params.showId,
//         Qstr: request.query.qstr
//     });
// });

// app.post('/show', urlencodedParser, function (request, response) {
//     response.send('Thank You!');
//     console.log(request.body.firstname);
//     console.log(request.body.lastname);
// });

// app.post('/showjson', jsonParser, function (request, response) {
//     response.send('Thank You for the JSON data!');
//     console.log(request.body.firstname);
//     console.log(request.body.lastname);
// });
// app.get('/api', function (request, response) {
//     response.json({ firstname: 'Bill', lastname: 'camphire' });
// });



