(function() {
  'use strict';

  angular
    .module('dieclient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
