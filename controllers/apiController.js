var Shows = require('../models/showModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/shows', function (req, res) {
        Shows.find({}, function (err, shows) {
            if (err) throw err;
            res.send(shows);
        });
    });

    app.get('/api/show/:id', function (req, res) {
        Shows.findById({ _id: req.params.id }, function (err, show) {
            if (err) throw err;
            res.send(show);
        });
    });

    app.post('/api/show', function (req, res) {
        if (req.body._id) {
            //update existing show
            Shows.findByIdAndUpdate(req.body._id, {
                title: req.body.title,
                showNumber: req.body.showNumber,
                season: req.body.season,
                series: req.body.series,
                wraps: req.body.wraps,
                doner: req.body.doner,
                spots: req.body.spots,
                credits: req.body.credits,
                aired: req.body.aired,
                tease: req.body.tease,
                open: req.body.open,
                intro: req.body.intro,
                message: req.body.message,
                product: req.body.product,
                middle: req.body.middle,
                interview: req.body.interview,
                close: req.body.close
            }, function (err, show) {
                if (err) throw err;
                res.send('Successfully Updated!');
            });
        } else {
            //create new showModel
            var newShow = Shows({
                title: req.body.title,
                showNumber: req.body.showNumber,
                season: req.body.season,
                series: req.body.series,
                wraps: req.body.wraps,
                doner: req.body.doner,
                spots: req.body.spots,
                credits: req.body.credits,
                aired: req.body.aired,
                tease: req.body.tease,
                open: req.body.open,
                intro: req.body.intro,
                message: req.body.message,
                product: req.body.product,
                middle: req.body.middle,
                interview: req.body.interview,
                close: req.body.close
            });
            newShow.save(function(err){
                if(err) throw err;
                res.send('Successfully Created!');
            });
        }
    });

    app.delete('/api/show', function(req, res){
        Shows.findByIdAndRemove(req.body._id,
        function(err){
            if(err) throw err;
            res.send('Successfully Removed!');
        });
    });
}