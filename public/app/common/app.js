var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: '/main/main.html', controller: 'mainCtrl', controllerAs: 'main'})
        .when('/event', {templateUrl: '/event/main.html', controller: 'eventCtrl', controllerAs: 'event'})
        .when('/events', {templateUrl: '/events/main.html', controller: 'eventsCtrl', controllerAs: 'events'});
});
