// angular.module('ngMyApp')
// .controller('LoginController', ['$scope', 'AuthService', '$rootScope', function ($scope, AuthService, $rootScope) {


//     $rootScope.bodylayout = 'login-layout';

//     $scope.login = function (user) {

//         AuthService.loginUser(user);
// }

// }]);

angular.module('ngMyApp')
    .controller('LoginController', ['$scope','$rootScope', function ($scope, $rootScope) {
        $rootScope.bodylayout = 'login-layout';
}]);

