gmkShowMetricsApp.controller('updateController', function($scope, $routeParams, showService) {
    $scope.parts = ["One", "Two", "Three", "Four", "Five"];
    $scope.services = ["9:00 AM", "10:30 AM", "12:00 PM", "5:00 PM", "6:30 PM"];
    $scope.labels = ["Keep Segment", "Remove Segment"];
    $scope.show = showService.getShow($routeParams.id);

    // action is Add or Remove and segment is the segment that was selected and
    // type is tease, open, close, etc...
    $scope.modifySegment = function(action, segment, type) {
        if ('Remove' === action) {
            // first remove the selected segment from the ordered view
            showService.orderedSegments.splice(segment.position - 1, 1);
            // next renumber all the remaining displayed segments positions.
            for (seg in showService.orderedSegments) {
                if (seg.position > segment.position) {
                    seg.position = seg.position - 1;
                }
            }

            // next remove the selected segment from the stored data.
            // for (var i = 0; i < $scope.show.data[type].length; i++) {
            //     if ($scope.show.data[type][i].position === segment.position) {
            //         $scope.show.data[type].splice(i, 1);
            //     }
            // }

        } else if ('InsertBefore' === action) {
            showService.orderedSegments.splice(segment.position - 1, 0, segment);
            for (seg in showService.orderedSegments) {
                if (seg.position > segment.position) {
                    seg.position = seg.position - 1;
                }
            }
        }
        // if(segment.label === 'Tease'){
        //   console.log('yea haa!!!!!');
        // }
    };
});
