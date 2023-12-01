var app = angular.module('allcare', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'allcare';
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
                    scope.templateUrl = '1_mo.html';
                } else if (screenWidth >= 1290) {
                    scope.templateUrl = '2_pc.html';
                }
            }
        }
    }
});