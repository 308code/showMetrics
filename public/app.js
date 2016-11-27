var gmkShowMetricsApp = angular.module('gmkShowMetricsApp', ['ngRoute']);
gmkShowMetricsApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'static/pages/home.html',
            controller: 'mainController'
        })
        .when('/display/:id', {
            templateUrl: 'static/pages/display.html',
            controller: 'displayController'
        })
});

gmkShowMetricsApp.service('showService', function($http) {
    var self = this;

    this.getShow = function(id) {
        $http({ method: 'GET', url: '/api/show/' + id, type: 'application/json' })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.error('Error in the getShow(id) service.\n\n' + response);
            });
        return self;
    };

    this.getShows = function() {
        $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.error('Error in the getShows() service.\n\n' + response);
            }
            );
        return self;
    };

    this.copyShow = function(id) {
        $http({ method: 'POST', url: '/api/show/copy/' + id, type: 'application/json' })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.info(response);
            }
            );
        return self;
    };

    this.deleteShow = function(id) {
        $http({ method: 'DELETE', url: '/api/show/delete/' + id, type: 'application/json' })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.info(response);
            }
            );
    }
    return self;
});

gmkShowMetricsApp.controller('displayController', function($scope, $routeParams, showService) {
    $scope.show = showService.getShow($routeParams.id);
});

gmkShowMetricsApp.controller('mainController', function($scope, $log, $http, showService) {
    $scope.shows = showService.getShows();

    $scope.copyShow = function(id) {
        showService.copyShow(id);
        $scope.shows = showService.getShows();
    };

    $scope.deleteShow = function(id) {
        showService.deleteShow(id);
    };
});