var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
    title : String,
    showNumber : Number,
    season: String,
    series : String,
    wraps : Date,
    doner : Date,
    spots : String,
    credits : Boolean,
    aired : String,
    tease : [{
        label : String,
        position : Number,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    open : [{
        label : String,
        position : Number,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    intro : [{
        label : String,
        position : Number,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    message : [{
        label : String,
        position : Number,
        part : String,
        date : Date,
        service : String,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    product : [{
        label : String,
        spot : String,
        position : Number,
        details : String
    }],
    middle : [{
        label : String,
        position : Number,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    interview : [{
        label : String,
        position : Number,
        part : String,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }],
    close : [{
        label : String,
        position : Number,
        start : Number,
        end : Number,
        filename : String,
        details : String
    }]
});

var Shows = mongoose.model('Shows', showSchema);

module.exports = Shows;
