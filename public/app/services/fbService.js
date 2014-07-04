app.factory('fbService', ['$http', function ($http) {
    var APP_ID = '1442632026003282',
        loginStatus = {
            connected: 'connected',
            notAuth: 'not_authorized',
            disconnected: 'disconnected'
        },
        currentUser = null,
        methods = {};

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
        FB.init({
            appId: APP_ID,
            cookie: true,  // enable cookies to allow the server to access the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.0' // use version 2.0
        });

        methods.getLoginStatus(methods.setCurrentUser);
    };

    methods.getCurrentUser = function () {
        return currentUser;
    };

    methods.setCurrentUser = function (callback, userData) {
        var setUser = function (userData) {
            currentUser = {
                fbId: userData.id,
                firstName: userData.first_name,
                lastName: userData.last_name,
                fullName: userData.name,
                image: 'http://graph.facebook.com/' + userData.id + '/picture'
            };

            if (typeof callback === 'function') {
                callback();
            }
        };

        if (userData) {
            setUser(userData);

        } else {
            FB.api('/me', function (userData) {
                if (!userData.id) {
                    return;
                }
                setUser(userData);
            });
        }

    };

    methods.getStatusList = function () {
        return loginStatus;
    };

    methods.login = function (callback, onError) {
        FB.login(function (response) {
            switch (response.status) {
                case loginStatus.connected:
                    methods.setCurrentUser(function () {
                        if (typeof callback === 'function') {
                            callback(currentUser);
                        }
                    });
                    break;
                default:
                    console.error(response);
                    if (typeof onError === 'function') {
                        onError(response.status);
                    }
                    break;
            }
        }, {scope: 'public_profile,email,user_events'});
    };

    methods.getLoginStatus = function (callback) {
        FB.api('/me', function (userData) {
            if (userData.id) {
                methods.setCurrentUser(function () {
                    callback(loginStatus.connected);
                }, userData);
            } else {
                callback(loginStatus.disconnected);
            }

        });
    };

    return methods;
}]);