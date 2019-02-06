var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rateChange = new EventEmitter();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this.propagateChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "small", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], RatingComponent.prototype, "rateChange", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        Component({
            selector: "rating",
            template: "\n    <ion-buttons>\n      <ion-button type=\"button\" [disabled]=\"readonly\" fill=\"clear\" [small]=\"small\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
            styles: [
                "\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
            ],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return RatingComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RatingComponent);
    return RatingComponent;
}());
export { RatingComponent };
//# sourceMappingURL=rating.js.map