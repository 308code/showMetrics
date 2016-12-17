var Show = require('../models/showModel');

module.exports = function(app) {
    app.get('/api/setupShows', function (req, res) {
        //seed the database
        var starterShows = [{
            title: 'Does God Still Heal',
            showNumber: 1,
            season: 'GK09',
            series: '1 of 1',
            wraps: '2016-01-29',
            doner: '2016-01-29',
            spots: 'unknown',
            credits: true,
            aired: '2016-01-29',
            tease: [{
                label: 'Tease',
                position: 1,
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            open: [{
                label: 'Open',
                position: 2,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            intro: [{
                label: 'Intro',
                position: 3,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            message: [{
                label: 'Message',
                position: 4,
                part: 'One',
                date: "2016-01-29",
                service: "10:30 AM",
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            },
            {
                label: 'Message',
                position: 9,
                part: 'Two',
                date: "2016-01-29",
                service: "10:30 AM",
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            product: [{
                label: "Product",
                spot: 'Does God Still Heal?',
                position: 5,
                details: 'Details about show!'
            }],
            middle: [{
                label: 'Middle',
                position: 6,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            interview: [{
                label: 'Interview',
                position: 7,
                part: 'One',
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            },
            {
                label: 'Interview',
                position: 8,
                part: 'Two',
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            close: [{
                label: 'Close',
                position: 9,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }]
        },
        {
            title: 'Is God Listening',
            showNumber: 1,
            season: 'GK09',
            series: '1 of 1',
            wraps: '2016-01-21',
            doner: '2016-01-21',
            spots: 'unknown',
            credits: true,
            aired: '2016-01-21',
            tease: [{
                label: 'Tease',
                position: 1,
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            open: [{
                label: 'Open',
                position: 2,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            intro: [{
                label: 'Intro',
                position: 3,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            message: [{
                label: 'Message',
                position: 4,
                part: 'One',
                date: "2016-01-21",
                service: "10:30 AM",
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            },
            {
                label: 'Message',
                position: 9,
                part: 'Two',
                date: "2016-01-21",
                service: "10:30 AM",
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            product: [{
                label: 'Product',
                spot: 'Is God Listening',
                position: 5,
                details: 'Details about show!'
            }],
            middle: [{
                label: 'Middle',
                position: 6,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            interview: [{
                label: 'Interview',
                position: 7,
                part: 'One',
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            },
            {
                label: 'Interview',
                position: 8,
                part: 'Two',
                start: 123456,
                end: 123789,
                filename: 'File Name',
                details: 'Details about show!'
            }],
            close: [{
                label: 'Close',
                position: 9,
                start: 123987,
                end: 124987,
                filename: 'File Name',
                details: 'Details about show!'
            }]
        }];

        Show.create(starterShows, function(err, results){
            res.send(results);
        });
    });
};
