(function () {
'use strict';

angular.module('LunchChecker', [])

  .controller('LunchCheckerController', function ($scope) {

    $scope.getLunchMenuCount = function() {
      $scope.count = 0;
      if (typeof $scope.lunchmenu != 'undefined' || $scope.count != 0) {
        var strLength = $scope.lunchmenu.split(',').length;
        $scope.count = strLength;
      } else {
        $scope.count = 0;
      }
    }
  });

})();
