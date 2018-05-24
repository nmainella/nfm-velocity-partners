(function() {
    'use strict';

    angular
        .module('vp.shared')
        .factory('sharedservice', sharedservice);

    /* @ngInject */
    function sharedservice() {

        var service = {
            getElementXPosition: getElementXPosition
        };

        function getElementXPosition(element, offset) {
            var bodyRect = document.body.getBoundingClientRect(),
                elemRect = element.getBoundingClientRect(),
                diff = elemRect.top - bodyRect.top;

            var height = window.innerHeight;
            var retval = height - diff - offset + 'px';
            return retval;

        }

        return service;



    }
})();
