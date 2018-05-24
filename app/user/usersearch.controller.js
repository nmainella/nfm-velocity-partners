(function () {
    "use strict";

    UserSearchController.$inject = ['userservice'];

    function UserSearchController(userservice) {
        var vm = this;
        vm.queryReset = false;
        vm.$onInit = onInit;
        vm.onQuery = onQuery;
        vm.onQueryResetToggle = onQueryResetToggle;
        vm.onSuggestion = onSuggestion;

        function onInit() {
            userservice.getUsers().then(function (data) {
                vm.originalData = data;
                vm.users = data;
            });
        }

        function onSuggestion(suggestion) {
            vm.suggestion = suggestion;
        }

        function onQueryResetToggle() {
            vm.queryReset = true;
        }

        function onQuery(query) {
            vm.query = query;
        }
    }

    UserSearchController.$inject = ["userservice"];

    angular
        .module("vp.user")
        .controller("UserSearchController", UserSearchController);
})();
