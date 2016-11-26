var gmkShowMetricsApp = angular.module('gmkShowMetricsApp', []);

gmkShowMetricsApp.controller('homePageController', function ($scope, $log, $http) {

    //var getAllShows = function () {
        $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
            .then(function (response) {
                $log.info(response.data);
                $scope.shows = response.data;
            }, function (response) {
                $log.error(response);
            }
            );
   //};

    //$scope.shows = getAllShows();
});