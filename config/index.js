var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        console.log('mongodb://' + configValues.username + ':' +
            configValues.password + 
            '@ds161497.mlab.com:61497/' + configValues.database);
        return 'mongodb://' + configValues.username + ':' +
            configValues.password + 
            '@ds161497.mlab.com:61497/' + configValues.database;
            //mongodb://<dbuser>:<dbpassword>@ds161497.mlab.com:61497/show-metrics
    }
    
}