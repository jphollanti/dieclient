(function() {
  'use strict';

  angular
    .module('dieclient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, dieRollService) {
    $scope.rollDie = function() {
      dieRollService.rest.get().$promise.then(function(result) {
        $scope.dieRollResult = result.result;
      });
    }

  }
})();
