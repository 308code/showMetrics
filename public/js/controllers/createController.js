gmkShowMetricsApp.controller('createController', function($scope, $routeParams,$location, showService) {
    $scope.parts = ["One", "Two", "Three", "Four", "Five"];
    $scope.services = ["9:00 AM", "10:30 AM", "12:00 PM", "6:00 PM"];
    $scope.labels = ["Keep Segment", "Remove Segment"];
    $scope.show = showService.getNewShow();

    // action is Add or Remove and segment is the segment that was selected and
    // type is tease, open, close, etc...
    $scope.modifySegment = function(action, segment, type) {
        if ('Remove' === action) {
            showService.recalculatePositions(segment.position,action,type);
            showService.orderSegments(showService.data);
        } else if ('InsertBefore' === action) {
          showService.recalculatePositions(segment.position,action,type);
          showService.orderSegments(showService.data);
        }else if ('InsertAfter' === action) {
          showService.recalculatePositions(segment.position,action,type);
          showService.orderSegments(showService.data);
        }
    };

    $scope.updateShow = function(){
      showService.updateShow();
      $location.path("/");
    };

    $scope.returnHome = function(id){
      if(id){
        showService.deleteShow(id);
      }
      $location.path("/");
    };

});
