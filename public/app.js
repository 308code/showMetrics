var gmkShowMetricsApp = angular.module('gmkShowMetricsApp', ['ngRoute']);
gmkShowMetricsApp.config(function ($routeProvider) {
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



gmkShowMetricsApp.service('showService', function ($http) {
    var self = this;
    this.orderedSegments = [];

    this.calculateLength = function (segment) {
        if(! segment){
            return '';
        }
        var diff = segment.end - segment.start;
        
        var temp = '' + diff;
        var result = "";
        switch (temp.length) {
            case 0:
                result = '00000000';
                break;
            case 1:
                result = '0000000' + diff;
                break;
            case 2:
                result = '000000' + diff;
                break;
            case 3:
                result = '00000' + diff;
                break;
            case 4:
                result = '0000' + diff;
                break;
            case 5:
                result = '000' + diff;
                break;
            case 6:
                result = '00' + diff;
                break;
            case 7:
                result = '0' + diff;
                break;
            case 8:
                result = diff;
                break;
            default:
                result = '00000000';
        }
        var ms = parseInt(result.charAt(6) + result.charAt(7));
        var sec = parseInt(result.charAt(4) + result.charAt(5));
        var min = parseInt(result.charAt(2) + result.charAt(3));
        var hour = parseInt(result.charAt(0) + result.charAt(1));
        
        if (ms >= 40) {
            sec += 1;
        }
        if (sec >= 60) {
            min += 1;
            sec = sec - 60;
        }
        if (min >= 60) {
            hour += 1;
            min = min - 60;
        }
        var secString = "";
        var minString = "";
        var hourString = "";

        if (sec === 0) {
            secString = '00';
        } else if (sec < 10) {
            secString = '0' + sec;
        } else {
            secString = '' + sec;
        }

        if (min === 0) {
            minString = "";
        } else if (min < 10) {
            minString = '0' + min;
        } else {
            minString = '' + min;
        }

        if (hour === 0) {
            hourString = "";
        } else if (hour < 10) {
            hourString = '0' + hour;
        } else {
            hourString = '' + hour;
        }
        
        if (hourString.length > 0) {
            result = hourString + ':' + minString + ':' + secString;
        } else if (minString.length > 0) {
            result = minString + ':' + secString;
        } else if (secString.length > 0) {
            result = ':' + secString;
        } else {
            result = ':00';
        }
        return result;
    };

    this.orderSegments = function (show) {
        self.orderedSegments.length = 0;
        for (segment in show.tease) {
            self.orderedSegments.splice(show.tease[segment].position-1, 0, show.tease[segment]);
        }
        for (segment in show.open) {
            self.orderedSegments.splice(show.open[segment].position-1, 0, show.open[segment]);
        }
        for (segment in show.intro) {
            self.orderedSegments.splice(show.intro[segment].position-1, 0, show.intro[segment]);
        }
        for (segment in show.message) {
            self.orderedSegments.splice(show.message[segment].position-1, 0, show.message[segment]);
        }
        for (segment in show.product) {
            self.orderedSegments.splice(show.product[segment].position-1, 0, show.product[segment]);
        }
        for (segment in show.middle) {
            self.orderedSegments.splice(show.middle[segment].position-1, 0, show.middle[segment]);
        }
        for (segment in show.interview) {
            self.orderedSegments.splice(show.interview[segment].position-1, 0, show.interview[segment]);
        }
        for (segment in show.close) {
            self.orderedSegments.splice(show.close[segment].position-1, 0, show.close[segment]);
        }
    };

    this.getShow = function (id) {
        $http({ method: 'GET', url: '/api/show/' + id, type: 'application/json' })
            .then(function (response) {
                self.data = response.data;
                self.orderSegments(response.data);
            }, function (response) {
                $log.error('Error in the getShow(id) service.\n\n' + response);
            });
        return self;
    };

    this.getShows = function () {
        $http({ method: 'GET', url: '/api/shows', type: 'application/json' })
            .then(function (response) {
                self.data = response.data;
            }, function (response) {
                $log.error('Error in the getShows() service.\n\n' + response);
            }
            );
        return self;
    };

    this.copyShow = function (id) {
        $http({ method: 'POST', url: '/api/show/copy/' + id, type: 'application/json' })
            .then(function (response) {
                self.data = response.data;
            }, function (response) {
                $log.info(response);
            }
            );
        return self;
    };

    this.deleteShow = function (id) {
        $http({ method: 'DELETE', url: '/api/show/delete/' + id, type: 'application/json' })
            .then(function (response) {
                self.data = response.data;
            }, function (response) {
                $log.info(response);
            }
            );
    }

    return self;
});

gmkShowMetricsApp.controller('displayController', function ($scope, $routeParams, showService) {
    $scope.show = showService.getShow($routeParams.id);




});

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

gmkShowMetricsApp.directive('tease', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/tease.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('open', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/open.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('intro', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/intro.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('message', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/message.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('product', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/product.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('middle', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/middle.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('interview', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/interview.html',
        replace: true
    };
});

gmkShowMetricsApp.directive('close', function () {
    return {
        restrict: 'AE',
        templateUrl: 'static/directives/display/close.html',
        replace: true
    };
});