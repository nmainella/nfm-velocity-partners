(function() {
    'use strict';

    angular
        .module('vp.user')
        .factory('userservice', userservice);

    /* @ngInject */
    function userservice($http) {

        var service = {
            getUsers: getUsers
        };

        return service;

        function getUsers() {
            return $http.get('/user/users.json')
                .then(getUsersComplete);

            function getUsersComplete(data, status, headers, config) {
                return data.data;
            }
        }

    }
})();
