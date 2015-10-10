(function() {
  'use strict';

  angular
    .module('dieclient')
    .service('dieRollService', dieRollService);

  /** @ngInject */
  function dieRollService($resource) {
      return {rest: $resource('http://dieapp-1091.appspot.com/', null, {
        get: {}
      })};
  }
})();
