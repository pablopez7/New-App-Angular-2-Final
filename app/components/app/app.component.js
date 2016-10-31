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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <nav>\n            <div class=\"nav-wrapper light-blue darken-3\">\n                <a [routerLink]=\"['/']\" class=\"brand-logo right\">Angular 2</a>\n                <ul id=\"nav-mobile\" class=\"left\">\n                    <li><a [routerLink]=\"['/']\">Home</a></li>\n                    <li><a [routerLink]=\"['/contact']\">Contacto</a></li>\n                    <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n                    <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\n                    <li [ngSwitch]=\"authService.isLoggedIn\">\n                        <a *ngSwitchCase=\"false\" [routerLink]=\"['/login']\">Login</a>\n                        <a *ngSwitchCase=\"true\" (click)=\"logout()\">Logout</a>\n                    </li>\n                </ul>\n             </div>\n        </nav>\n        <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map