var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/gowith',
        port: process.env.PORT || 5000
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:aruixhyh@dbh62.mongolab.com:27627/heroku_app25075315',
        port: process.env.PORT || 80
    }
};