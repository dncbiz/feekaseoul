var app = angular.module('quasidance', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'quasidance';
});

app.directive('browseContent', function($window) {
    return {
        restrict: 'E',
        template: '<div ng-include="templateUrl"></div>',
        link: function(scope) {
            
            $window.onresize = function() {
                changeTemplate();
                scope.$apply();
            };
            changeTemplate();
            
            function changeTemplate() {
                var screenWidth = $window.innerWidth;
                if (screenWidth < 1290) {
                    scope.templateUrl = 'mo.html';
                } else if (screenWidth >= 1290) {
                    scope.templateUrl = 'dt.html';
                }
            }
        }
    }
});