var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function (config) {

    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback () {
       // console.log('gowith db opened', db.collections);

    });


    var userSchema = mongoose.Schema({
        username: String,
        salt: String,  // Security word
        hashed_pwd: String
    });

    var eventSchema = mongoose.Schema({
        id: String,
        title: String,
        location: String,
        date: Date,
        tags: Array,
        attendees: Array,
        cover: String
    });


    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return (hashPwd(this.salt, passwordToMatch) === this.hashed_pwd);
        }
    }

    var User = mongoose.model('User', userSchema);
    var Event = mongoose.model('Event', eventSchema);

    var salt, hash;
    salt = createSalt();
    hash = hashPwd(salt,'e34567');

  //  User.create({username:'admin', salt: salt, hashed_pwd: hash});
   // Event.create({id: "123", title: "Block Party", location: "Tel Aviv", date: Date.now(), tags: ["Club", "Night"], attendees: []})

};

module.exports.eventsAll = function(req, res, callback) {
    var Event = mongoose.model('Event');
    Event.find().exec(function(err, eventDoc) {
        if (typeof callback === "function") {
            console.log(eventDoc);
            callback(eventDoc);
        } else {
            res.json(eventDoc);
        }
    });
};

exports.newArticle = function(title, content) {
    var db = mongoose.connection;

    var articleSchema = mongoose.Schema({
        title: String,
        content: String,
        creationDate: Date
    })

    articleSchema.methods = {
        save: function(title, content) {

        }
    }

    db.articles.insert({title: title, content:content});
}

function createSalt() {
    // Have Crypto generate 128 random bytes as the Security word.
    // The more bytes the higher the security.
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
    // Hash message authentication code
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}