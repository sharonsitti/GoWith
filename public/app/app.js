var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: '/app/main/main.html', controller: 'mainCtrl'})
        .when('/event', {templateUrl: '/app/event/main.html', controller: 'eventCtrl'});
});
