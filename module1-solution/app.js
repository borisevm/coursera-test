(function () {
'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

      $scope.list = "";
      $scope.message = "";
      $scope.checkIfTooMuch = function () {
        if ($scope.list == "") {
          $scope.message = "Please enter data first";
          $scope.messageColor = "red";
          $scope.borderStyle = "2px solid red";
        } else {
          if (splitList($scope.list).length <= 3) {
            $scope.message = "Enjoy!";
            $scope.messageColor = "green";
            $scope.borderStyle = "2px solid green";
          } else {
            $scope.message = "Too much!";
            $scope.messageColor = "green";
            $scope.borderStyle = "2px solid green";
          }
        }
      };
      function splitList(string) {
        var array = string.split(',');
        var cleanArray = deleteEmptyItem(array);
        return cleanArray;
      }
      function deleteEmptyItem(string) {
        var newArray = new Array();
        for (var i = 0; i < string.length; i++) {
          if (string[i].trim()) {
            newArray.push(string[i]);
          }
        }
        return newArray;
      }
  };
})();
