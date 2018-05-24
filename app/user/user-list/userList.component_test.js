'use strict';

describe('Component: userSearch', () => {
    let $compile;
    let scope;

    beforeEach(() => {
        angular.mock.module('vp.user');
    });

    beforeEach(inject(($rootScope, _$compile_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it('Should display list of users', () => {

        let element = angular.element(`<user-list-component/>`);
        element = $compile(element)(scope);
        scope.$digest();
        expect(element[0].querySelectorAll('#user').length).toBe(199);
    });
});

