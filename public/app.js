var gmkShowMetricsApp = angular.module('gmkShowMetricsApp', ['ngRoute']);
gmkShowMetricsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'static/pages/home.html',
            controller: 'mainController'
        })
        .when('/display/:id', {
            templateUrl: 'static/pages/display.html',
            controller: 'displayController'
        })
        .when('/update/:id', {
            templateUrl: 'static/pages/update.html',
            controller: 'updateController'
        })
         .when('/create',{
           templateUrl: 'static/pages/create.html',
           controller: 'createController'
         })
});
