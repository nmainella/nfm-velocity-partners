(function () {
    "use strict";

    var autoCompleteItemComponent = {
        templateUrl: '/user/autocomplete/autocomplete-item/autocomplete-item.html',
        controller: AutoCompleteItemController,
        controllerAs: 'vm',
        bindings: {
            item: '=?'
        }
    };

    angular
        .module("vp.user")
        .component("autoCompleteItemComponent", autoCompleteItemComponent);


    function AutoCompleteItemController() {
        var vm = this;

        vm.getFullName = getFullName;

        function getFullName( ) {
            return vm.item.first_name+' '+vm.item.last_name;
        }

        return vm;

    }
})();
