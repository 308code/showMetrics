gmkShowMetricsApp.controller('displayController', function ($scope, $routeParams, showService) {
    $scope.show = showService.getShow($routeParams.id);
    
});
