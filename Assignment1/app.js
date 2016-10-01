(function () {
'use strict';

angular.module('LunchChecker', [])

  .controller('LunchCheckerController', function ($scope) {

    $scope.getLunchMenuCount = function() {
      if (typeof $scope.lunchmenu != 'undefined') {
        var strLength = $scope.lunchmenu.split(',').length;
        $scope.count = strLength;
      } else {
        $scope.count = 0;
      }
    }
  });

})();
