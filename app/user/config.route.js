(function () {
    'use strict';

    angular
        .module('vp.user')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'user/user-search.html',
                    component: 'userSearchComponent',
                    controller: 'UserSearchController',
                    controllerAs: 'vm',
                    title: 'Listado de usuarios',
                    settings: {
                    }
                }
            }
        ];
    }
})();
