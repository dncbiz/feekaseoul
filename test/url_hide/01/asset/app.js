var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
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
                    scope.templateUrl = 'https://indd.adobe.com/view/056d5f22-4cdf-42c5-9397-b228bed4a6a9';
                } else if (screenWidth >= 1290) {
                    scope.templateUrl = 'https://indd.adobe.com/view/f8d90249-8f19-4f21-bb5e-d157ba2c48d7';
                }
            }
        }
    }
});