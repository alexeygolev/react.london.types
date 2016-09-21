var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(id, name, surname) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
var Admin = (function () {
    function Admin(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    return Admin;
}());
var SuperAdmin = (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin() {
        _super.apply(this, arguments);
    }
    return SuperAdmin;
}(Admin));
function showDashboard(user) {
    return new SuperAdmin('1', 'Jina', 'JustJina');
}
function showSuperDashboard(user) {
    return new SuperAdmin('1', 'Jina', 'JustJina');
}
var currentUser = new User(1, 'John', 'Garry');
var currentAdmin = new Admin(1, 'Bambi', 'Pinkman');
var currentSuperAdmin = new SuperAdmin(1, 'Bambi', 'Pinkman');
showDashboard(currentUser);
showDashboard(currentAdmin);
var h = showDashboard(currentSuperAdmin);
var v = showSuperDashboard(currentAdmin);
var p = Promise.resolve(currentAdmin);
var p2 = Promise.resolve(currentSuperAdmin);
function getAdmin() {
    return Promise.resolve(new Admin(1, "", ""));
}
function rankUp(user) {
    return Promise.resolve(new SuperAdmin(1, "", ""));
}
function rankDown(user) {
    return Promise.resolve(new SuperAdmin(1, "", ""));
}
rankUp(getAdmin());
rankDown(getAdmin());
var promisedSuperAdmin = p2;
p2 = p;
p = promisedSuperAdmin;
