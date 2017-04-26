angular.module('pollApp',['appRoutes'])

.controller('regCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.submit = function(regData) {
  
        console.log(this.regData);
        $http.post('/api/polls', this.regData);
      };
}]);

