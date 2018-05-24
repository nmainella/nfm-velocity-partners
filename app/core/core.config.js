(function () {
    'use strict';

    var core = angular.module('vp.core');
    core.config(configure);

    /* @ngInject */
    function configure($locationProvider, $routeProvider, routehelperConfigProvider) {

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'Ejemplo velocity partners | Nicolás Franco Mainella -';

        $locationProvider.hashPrefix('!');


        // Configure the common exception handler
        // exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();