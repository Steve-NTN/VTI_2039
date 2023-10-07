"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.engineer = void 0;
var Officers_1 = require("./Officers");
var engineer = /** @class */ (function (_super) {
    __extends(engineer, _super);
    function engineer(name, age, gender, address, training) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.training = training;
        return _this;
    }
    engineer.prototype.printForEngineer = function () {
        console.log();
        console.log("-----------  THONG TIN CUA ENGINEER TREN HE THONG  ----------");
        _super.prototype.printForOficers;
        console.log(" Trainning : " + this.training);
    };
    return engineer;
}(Officers_1.officers));
exports.engineer = engineer;
