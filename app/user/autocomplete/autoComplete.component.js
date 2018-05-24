(function () {
    "use strict";
    var autoCompleteComponent = {
        templateUrl: '/user/autocomplete/autocomplete.html',
        controller: AutoCompleteController,
        controllerAs: 'vm',
        bindings: {
            query: '<',
            onSuggestion: '&',
            avoidAutoComplete: '<'
        }
    };

    angular
        .module("vp.user")
        .component("autoCompleteComponent", autoCompleteComponent);


    AutoCompleteController.$inject = ["userservice", 'sharedservice'];

    function AutoCompleteController(userservice, sharedservice) {
        var vm = this;

        vm.avoidAutoComplete = false;
        vm.$onChanges = onChanges;
        vm.$onInit = onInit;
        vm.onItemClick = onItemClick;
        vm.filterArray = filterArray;
        vm.showAutoSuggest = showAutoSuggest;
        vm.getDynamicWidth = getDynamicWidth;

        function getDynamicWidth () {
            return document.getElementById('search-user-query').clientWidth+'px';
        }
        function showAutoSuggest() {
            return !vm.avoidAutoComplete && vm.users.length;
        }


        function onItemClick(item) {
            vm.suggestion = item;
            vm.onSuggestion()(item);
            vm.avoidAutoComplete = true;
        }


        function onChanges(changes) {
            if (angular.isDefined(changes.avoidAutoComplete) && angular.isDefined(changes.avoidAutoComplete.currentValue)) {
                vm.avoidAutoComplete = changes.avoidAutoComplete.currentValue;
            }
            if (angular.isDefined(changes.query) && angular.isDefined(changes.query.currentValue)) {
                if (changes.query.currentValue !== "") {
                    var differentThanCurrentSuggestion = changes.query.currentValue !== (vm.suggestion && vm.suggestion.username);
                    vm.avoidAutoComplete = !differentThanCurrentSuggestion;
                    vm.users = filterArray(changes.query.currentValue);
                } else {
                    vm.users = vm.originalQuery;
                }
            } else {
                vm.users = [];
            }

            //Event outside
        }


        function filterArray(filter) {
            return vm.originalQuery.filter(function (user) {
                return user.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            });
        }

        function onInit() {
            userservice.getUsers().then(function (data) {
                vm.originalQuery = data;
                vm.users = [];
            });
        }

    }
})();
