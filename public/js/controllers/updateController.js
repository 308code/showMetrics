gmkShowMetricsApp.controller('updateController', function($scope, $routeParams, showService) {
    $scope.parts = ["One", "Two", "Three", "Four", "Five"];
    $scope.services = ["9:00 AM","10:30 AM","12:00 PM","5:00 PM","6:30 PM"];
    $scope.show = showService.getShow($routeParams.id);
});
