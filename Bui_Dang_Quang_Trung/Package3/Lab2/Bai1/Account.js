"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAccount = exports.Account = void 0;
var Account = /** @class */ (function () {
    //Ham khoi tao
    function Account(id, email, username, fullname, department, position, createDate) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.fullname = fullname;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }
    /**
     * Getter id
     */
    Account.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter email
     */
    Account.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Getter username
     */
    Account.prototype.getUsername = function () {
        return this.username;
    };
    /**
     * Getter fullname
     */
    Account.prototype.getFullname = function () {
        return this.fullname;
    };
    /**
     * Getter department
     */
    Account.prototype.getDepartment = function () {
        return this.department;
    };
    /**
     * Getter position
     */
    Account.prototype.getPosition = function () {
        return this.position;
    };
    /**
     * Getter createDate
     */
    Account.prototype.getCreateDate = function () {
        return this.createDate;
    };
    /**
     * Setter id
     */
    Account.prototype.setId = function (value) {
        this.id = value;
    };
    /**
     * Setter email
     */
    Account.prototype.setEmail = function (value) {
        this.email = value;
    };
    /**
     * Setter username
     */
    Account.prototype.setUsername = function (value) {
        this.username = value;
    };
    /**
     * Setter fullname
     */
    Account.prototype.setFullname = function (value) {
        this.fullname = value;
    };
    /**
     * Setter department
     */
    Account.prototype.setDepartment = function (value) {
        this.department = value;
    };
    /**
     * Setter position
     */
    Account.prototype.setPosition = function (value) {
        this.position = value;
    };
    /**
     * Setter createDate
     */
    Account.prototype.setCreateDate = function (value) {
        this.createDate = value;
    };
    return Account;
}());
exports.Account = Account;
//Ham in thong tin
function printAccount(account) {
    console.log("id:" + account.getId() + "email:" + account.getEmail() + "username:" + account.getUsername() + "fullname:" + account.getFullname() + "department:" + account.getDepartment().getname() + "position:" + account.getPosition().get_name());
}
exports.printAccount = printAccount;
