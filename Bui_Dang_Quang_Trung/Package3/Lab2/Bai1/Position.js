"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPosition = exports.Position = void 0;
var Position = /** @class */ (function () {
    //Ham khoi tao
    function Position(__id, __name) {
        this.__id = __id;
        this.__name = __name;
    }
    /**
     * Getter _id
     */
    Position.prototype.get_id = function () {
        return this.__id;
    };
    /**
     * Getter _name
     */
    Position.prototype.get_name = function () {
        return this.__name;
    };
    /**
     * Setter _id
     */
    Position.prototype.set_id = function (value) {
        this.__id = value;
    };
    /**
     * Setter _name
     */
    Position.prototype.set_name = function (value) {
        this.__name = value;
    };
    return Position;
}());
exports.Position = Position;
//Ham in thong tin position
function printPosition(position) {
    console.log("Id:" + position.get_id() + "Name:" + position.get_name());
}
exports.printPosition = printPosition;
