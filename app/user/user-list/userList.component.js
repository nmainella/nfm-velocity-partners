(function () {
    "use strict";

    var userListComponent = {
        templateUrl: '/user/user-list/user-list.html',
        controller: UserListController,
        controllerAs: 'vm',
        bindings: {
            suggestion: '<',
            query: '<',
            onQueryReset: '&'
        }
    };

    angular
        .module("vp.user")
        .component("userListComponent", userListComponent);


    UserListController.$inject =['userservice', 'sharedservice']
    function UserListController(userservice, sharedservice) {
        var vm = this;

        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
        vm.userListTableDynamicHeight = userListTableDynamicHeight;
        vm.tryAgain = tryAgain;

        function tryAgain () {
            vm.users = vm.originalQuery;
            vm.onQueryReset();
        }


        function filterArray(filter) {
            if (filter.currentValue) {
                console.log(filter);
                vm.users = vm.originalQuery.filter(function (user) {
                    return user.username.toLowerCase().indexOf(filter.currentValue.toLowerCase()) !== -1;
                });
            }

        }
        function handleQueryChanges(query) {
            if (angular.isDefined(query) && query.currentValue !== '') {
                filterArray(query);
            }

        }

        function handleSuggestionChanges(suggestion) {
            if (angular.isDefined(suggestion) && angular.isDefined(suggestion.currentValue)) {
                vm.users = vm.originalQuery.filter(function (user) {
                    return user.username === suggestion.currentValue;
                });
            }

        }

        function onChanges(changes) {
            console.log('calls on changes');
            handleQueryChanges(changes.query && changes.query);
            handleSuggestionChanges(changes.suggestion && changes.suggestion);
        }


        function userListTableDynamicHeight() {
            return sharedservice.getElementXPosition(document.getElementById("user-list-body"), 30);

        }

        function onInit() {
            userservice.getUsers().then(function (data) {
                vm.users = data;
                vm.originalQuery = data;
            });
        }


    }

})();
