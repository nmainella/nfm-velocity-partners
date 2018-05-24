(function () {
    "use strict";

    var userInputComponent = {
        templateUrl: '/user/user-input/user-input.html',
        controller: UserInputController,
        controllerAs: 'vm',
        bindings: {
            user: '=?',
            query: '=?',
            onQuery: '&',
            queryReset: '<',
            onSuggestionOut: '&'
        }
    };

    angular
        .module("vp.user")
        .component("userInputComponent", userInputComponent);

    function UserInputController() {
        var vm = this;
        vm.$onChanges = onChanges;
        vm.onSearchButtonClick = onSearchButtonClick;
        vm.onSuggestion = onSuggestion;

        function onChanges(changes) {
            if (angular.isDefined(changes.queryReset) && changes.queryReset.currentValue){
                vm.query = undefined;
            }
        }

        function onSearchButtonClick() {
            vm.onQuery()(vm.query);
            vm.avoidAutoComplete = true;
        }



        function onSuggestion(suggestion) {
            vm.avoidAutoComplete = true;
            if (angular.isObject(suggestion)) {
                vm.suggestion = suggestion;
                vm.query = suggestion.username;
                vm.onSuggestionOut()(suggestion.username);

            }
        }


    }
})();
