var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: '/main/main.html', controller: 'mainCtrl'})
        .when('/event', {templateUrl: '/event/main.html', controller: 'eventCtrl'})
        .when('/events', {templateUrl: '/events/main.html', controller: 'eventsCtrl'});
});
