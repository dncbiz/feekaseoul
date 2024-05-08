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
                    scope.templateUrl = 'https://sales.auth.ap-northeast-2.amazoncognito.com/login?client_id=4tvfm1bp4hj9gruqsitfpccloq&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fsales.dc9pv90iwqmvk.amplifyapp.com%2F1%2Fmain.html';
                } else if (screenWidth >= 1290) {
                    scope.templateUrl = 'browse-content.html';
                }
            }
        }
    }
});