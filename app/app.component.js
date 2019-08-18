"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular 2 Drag n Drop';
        this.businessCapabilities = [
            { id: 1, name: 'apples' },
            { id: 2, name: 'oranges' },
            { id: 3, name: 'bananas' },
            { id: 4, name: 'watermelon' },
            { id: 5, name: 'pineapple' },
            { id: 6, name: 'peaches' },
            { id: 7, name: 'pears' },
            { id: 8, name: 'kiwis' }
        ];
        this.release1 = [];
        this.release2 = [];
        this.release3 = [];
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map