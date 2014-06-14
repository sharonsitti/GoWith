var express = require('express'),
    path = require('path'),
    app = express(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    rootPath = path.normalize(__dirname + '/public');

    app.use(express.static(rootPath +"/app"));

    // Every http request that's made is handled by this route. Deliver index page for requests I don't have an existing route for.

    app.get('/', function(req, res) {
        res.sendfile(__dirname + '/index.html');
    });

    app.get('/events', function(req, res) {
        res.sendfile(__dirname + '/index.html');
    });

app.listen(3000);
console.log('Listening on port', 3000);