(function () {
'use strict';

angular.module('LunchChecker', [])

  .controller('LunchCheckerController', function ($scope) {

    $scope.lunchmenu = "";

    $scope.getLunchMenuCount = function() {
      $scope.count = calculateLunchMenuCount($scope.lunchmenu);
    };

    function calculateLunchMenuCount(lunchmenu) {
      return $scope.lunchmenu.split(',').filter(function(elem) {
        return elem.length>0;
      }).length;
    }

  });

})();
