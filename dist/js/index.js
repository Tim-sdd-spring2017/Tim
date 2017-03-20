angular.module("timApp", []).controller("timController", function($scope) {
  $scope.foobar = function() {
    console.log( "foobar" );
  };
  var t = new Task();
});
