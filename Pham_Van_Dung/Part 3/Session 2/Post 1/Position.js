"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this.name = name;
    }
    // id 
    Position.prototype.getId = function () {
        return this.id;
    };
    Position.prototype.setId = function (value) {
        this.id = value;
    };
    // name 
    Position.prototype.getName = function () {
        return this.name;
    };
    Position.prototype.setName = function (value) {
        this.name = value;
    };
    return Position;
}());
exports.Position = Position;
function printForPosition(Position) {
    console.log("Id: " + Position.getId() + " | " + " Position: " + Position.getName());
}
var pos1 = new Position(1, 'Kỹ Sư');
var pos2 = new Position(2, 'Teacher');
console.log();
console.log('------------- THÔNG TIN CHỨC VỤ TRÊN HỆ THỐNG  ---------');
printForPosition(pos1);
printForPosition(pos2);
