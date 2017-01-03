(function () {
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Miroslav";
    $scope.sayHello = function() {
      return "Hello Coursera!";
    }
  });

})();
