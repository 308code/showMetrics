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

gmkShowMetricsApp.controller('displayController', function($scope,$http,$routeParams) {
    $http({ method: 'GET', url: '/api/show/'+$routeParams.id , type: 'application/json' })
        .then(function(response) {
            $scope.show = response.data;
        }, function(response) {
            $log.info(response);
        });
});

gmkShowMetricsApp.controller('mainController', function($scope, $log, $http) {
    $scope.copyShow = function(id) {
        $http({ method: 'POST', url: '/api/show/copy/' + id, type: 'application/json' })
            .then(function(response) {
                $scope.shows = response.data;
            }, function(response) {
                $log.info(response);
            }
            );
        $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
            .then(function(response) {
                $scope.shows = response.data;
            }, function(response) {
                $log.info(response);
            }
            );
    };

    $scope.deleteShow = function(id) {
        $http({ method: 'DELETE', url: '/api/show/delete/' + id, type: 'application/json' })
            .then(function(response) {
                $scope.shows = response.data;
            }, function(response) {
                $log.info(response);
            }
            );
        // $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
        //     .then(function(response) {
        //         $scope.shows = response.data;
        //     }, function(response) {
        //         $log.error(response);
        //     }
        //     );
    };


    //var getAllShows = function () {
    $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
        .then(function(response) {
            $scope.shows = response.data;
        }, function(response) {
            $log.error(response);
        }
        );
    //};

    //$scope.shows = getAllShows();
});