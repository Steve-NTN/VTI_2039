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
exports.Worker = void 0;
var officer_1 = require("./officer");
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(fullname, age, gender, address, level) {
        var _this = _super.call(this, fullname, age, gender, address) || this;
        _this.level = level;
        return _this;
    }
    Worker.prototype.printWorker = function () {
        console.log("Thông tin công nhân");
        _super.prototype.printOficcer.call(this);
        console.log("Level: " + this.level);
    };
    return Worker;
}(officer_1.Officer));
exports.Worker = Worker;
