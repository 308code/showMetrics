gmkShowMetricsApp.controller('updateController', function ($scope, $routeParams, showService) {
    $scope.show = showService.getShow($routeParams.id);
});
