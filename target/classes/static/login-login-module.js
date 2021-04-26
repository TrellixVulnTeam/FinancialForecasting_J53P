(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "PUjd":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.route */ "Rvo6");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "zLjM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([_login_route__WEBPACK_IMPORTED_MODULE_2__["LOGIN_ROUTE"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Rvo6":
/*!**************************************************!*\
  !*** ./src/main/webapp/app/login/login.route.ts ***!
  \**************************************************/
/*! exports provided: LOGIN_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ROUTE", function() { return LOGIN_ROUTE; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "zLjM");

const LOGIN_ROUTE = {
    path: '',
    component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    data: {
        pageTitle: 'login.title',
    },
};


/***/ }),

/***/ "zLjM":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/login/login.service */ "fiib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const _c0 = ["username"];
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Failed to sign in!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Please check your credentials and try again.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(accountService, loginService, router, fb) {
        this.accountService = accountService;
        this.loginService = loginService;
        this.router = router;
        this.fb = fb;
        this.authenticationError = false;
        this.loginForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            rememberMe: [false],
        });
    }
    ngOnInit() {
        // if already authenticated then navigate to home page
        this.accountService.identity().subscribe(() => {
            if (this.accountService.isAuthenticated()) {
                this.router.navigate(['']);
            }
        });
    }
    ngAfterViewInit() {
        if (this.username) {
            this.username.nativeElement.focus();
        }
    }
    login() {
        this.loginService
            .login({
            username: this.loginForm.get('username').value,
            password: this.loginForm.get('password').value,
            rememberMe: this.loginForm.get('rememberMe').value,
        })
            .subscribe(() => {
            this.authenticationError = false;
            if (!this.router.getCurrentNavigation()) {
                // There were no routing during login (eg from navigationToStoredUrl)
                this.router.navigate(['']);
            }
        }, () => (this.authenticationError = true));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["jhi-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
    } }, decls: 50, vars: 8, consts: [[1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-sm-10"], ["jhiTranslate", "login.title", "data-cy", "loginTitle"], ["class", "alert alert-danger", "jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 4, "ngIf"], ["role", "form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username", "jhiTranslate", "global.form.username.label", 1, "username-label"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", "data-cy", "username", 1, "form-control", 3, "placeholder"], ["username", ""], ["for", "password", "jhiTranslate", "login.form.password"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", "data-cy", "password", 1, "form-control", 3, "placeholder"], ["hidden", "", 1, "form-check"], ["for", "rememberMe", 1, "form-check-label"], ["type", "checkbox", "name", "rememberMe", "id", "rememberMe", "formControlName", "rememberMe", 1, "form-check-input"], ["jhiTranslate", "login.form.rememberme"], ["type", "submit", "jhiTranslate", "login.form.button", "data-cy", "submit", 1, "btn", "btn-primary"], ["jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticationError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 4, "global.form.username.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 6, "login.form.password.placeholder"));
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map