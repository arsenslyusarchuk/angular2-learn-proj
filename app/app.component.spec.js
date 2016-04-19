System.register(['./app.component', 'angular2/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, testing_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            ////////  SPECS  /////////////
            /// Delete this: verify can use Angular testing's DOM abstraction to access DOM
            testing_1.describe('Smoke test', function () {
                testing_1.it('should run a passing test', function () {
                    testing_1.expect(true).toEqual(true, 'should pass');
                });
            });
            testing_1.describe('AppComponent', function () {
                testing_1.it('should instantiate component', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
                        testing_1.expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
                    });
                }));
                testing_1.it('should have expected <h1> text', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
                        // fixture.detectChanges();  // need for a binding; we don't have one
                        var h1 = fixture.debugElement.query(function (el) { return el.name === 'h1'; }).nativeElement;
                        testing_1.expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map