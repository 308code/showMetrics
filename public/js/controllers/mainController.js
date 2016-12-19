gmkShowMetricsApp.controller('mainController', function ($scope, $log, $http, $location,showService) {
    $scope.shows = showService.getShows();
    var self = this;

    $scope.collectAllShows = function(){
      self.shows = showService.getShows();
    };

    $scope.copyShow = function (id) {
        showService.copyShow(id);
        self.shows = showService.getShows();
    };

    $scope.deleteShow = function (id) {
        showService.deleteShow(id);
    };
    $scope.updateShow = function(){
      showService.updateShow();
    }
    $scope.createShow = function(){
      showService.createShow();
      $location.path('/create');
    };
});
