var auth = require('./auth'),
    db = require('./mongoose');

module.exports = function (app) {
    // Partial rendering

    app.get('/', function (req, res) {
        db.eventsAll(req, res, function(data){
            res.render(app.path + '/index', {
                layout: false,
                events: JSON.stringify(data)
            });
        });

    });

    app.get('/event/:id', function (req, res) {
        db.eventsAll(req, res, function(data){
            res.render(app.path + '/index', {
                layout: false,
                events: JSON.stringify(data)
            });
        });
    });

    app.get('/events/all', db.eventsAll);

 //   app.post('/admin/saveArticle', db.newAr//t//icle);

  //  app.post('/login', auth.authenticate);

//    app.post('/logout',  function(req, res) {
//        req.logout();
//        res.end();
//    });

//    // Every http request that's made is handled by this route. Deliver index page for requests I don't have an existing route for.
//    app.get('*', function (req, res) {
//        res.render('index', {
//            bootstrappedUser: req.user  // Dump the currently logged in user into the html page
//        });
//    });

};