"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var url = 'https://authenticationapp-api.herokuapp.com/api/v1/auth/register';
        return this.http.post(url, user);
    };
    AuthService.prototype.login = function (user) {
        var url = 'https://authenticationapp-api.herokuapp.com/api/v1/auth/login';
        return this.http.post(url, user);
    };
    AuthService.prototype.getUser = function () {
        var userStr = localStorage.getItem("LOGGED_IN_USER");
        var user = userStr ? JSON.parse(userStr) : null;
        return user;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
