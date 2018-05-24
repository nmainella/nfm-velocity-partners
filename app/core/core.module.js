(function() {
    'use strict';

    angular.module('vp.core', [
          /*
         * Angular modules
         */

        'ngRoute',
        /*
         * Our reusable cross app code modules
         */
        'blocks.router',
        'vp.shared'

    ]);
})();