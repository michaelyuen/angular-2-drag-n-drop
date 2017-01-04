"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_dragula_1 = require("ng2-dragula");
var ContainerComponent = (function () {
    function ContainerComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    ContainerComponent.prototype.onDrop = function (args) {
        var e = args[0], eModel = args[1], target = args[2], source = args[3];
        var found = false;
        for (var i in this.list) {
            if (this.list[i].id == eModel.id) {
                found = true;
                break;
            }
        }
        this.message = "Item '" + eModel.name + "' was ";
        if (found) {
            this.message += 'added.';
        }
        else {
            this.message += 'removed.';
        }
    };
    return ContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "list", void 0);
ContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'container',
        templateUrl: 'container.component.html',
        styleUrls: ['container.component.css']
    }),
    __metadata("design:paramtypes", [ng2_dragula_1.DragulaService])
], ContainerComponent);
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map