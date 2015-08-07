//declare our app module and define inject the dependencies the app will need - routes and resource
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

//==================================Routes ==================================

//set up our routes for the app
myApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })

    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'weatherController'
    })

    .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'weatherController'
    })

    .otherwise({
        templateUrl: '/',
        controller: 'mainController'
    });
});

















