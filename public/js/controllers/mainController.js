gmkShowMetricsApp.controller('mainController', function ($scope, $log, $http, showService) {
    $scope.shows = showService.getShows();

    $scope.copyShow = function (id) {
        showService.copyShow(id);
        $scope.shows = showService.getShows();
    };

    $scope.deleteShow = function (id) {
        showService.deleteShow(id);
    };
});
