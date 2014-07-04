var express = require('express'),
    path = require('path'),
    app = express(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    rootPath = path.normalize(__dirname + '/public'),
    appPath = rootPath + "/app";
    app.path = appPath;
    app.use(express.static(appPath));

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port', config.port);