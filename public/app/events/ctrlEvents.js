app.controller('eventsCtrl', function($scope, $http){

    $http.get('/events/all').then(function (response) {
        debugger;
    });

});