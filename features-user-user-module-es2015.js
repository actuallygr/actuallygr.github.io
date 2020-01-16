(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/log-in/log-in.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/log-in/log-in.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" rtl>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"main-heading\">Log in</h1>\n    </div>\n  </div>\n  <form [formGroup]=\"formLogin\" (ngSubmit)=\"login()\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <mat-card>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput placeholder=\"Enter email\"\n                     formControlName=\"email\" type=\"email\">\n              <mat-error *ngIf=\"formLogin.get('email').hasError('required')\">\n                {{ 'anms.examples.form.placeholder3' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"formLogin.get('email').hasError('email')\">\n                {{ 'anms.examples.form.placeholder3' | translate }}\n                {{ 'anms.examples.form.error2' | translate }}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput type=\"password\" placeholder=\"Enter password\"\n                     formControlName=\"password\">\n              <mat-error *ngIf=\"formLogin.get('password').hasError('required')\">\n                {{ 'anms.examples.form.placeholder2' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"formLogin.get('password').invalid\">\n                Password must be at least 6 characters\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row buttons d-flex justify-content-center pad\">\n            <button type=\"button\" mat-raised-button color=\"accent\"\n                    [ngClass]=\"routeAnimationsElements\" (click)=\"login()\">\n              {{ 'anms.menu.login' | translate }}\n            </button>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/signup/signup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/signup/signup.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" rtl>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"main-heading\">Sign up</h1>\n    </div>\n  </div>\n  <form [formGroup]=\"formSignup\" (ngSubmit)=\"signup()\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <mat-card>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput placeholder=\"Enter email\"\n                     formControlName=\"email\" type=\"email\">\n              <mat-error *ngIf=\"formSignup.get('email').hasError('required')\">\n                {{ 'anms.examples.form.placeholder3' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"formSignup.get('email').hasError('email')\">\n                {{ 'anms.examples.form.placeholder3' | translate }}\n                {{ 'anms.examples.form.error2' | translate }}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput type=\"password\" placeholder=\"Enter password\"\n                     formControlName=\"password\">\n              <mat-error *ngIf=\"formSignup.get('password').hasError('required')\">\n                {{ 'anms.examples.form.placeholder2' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"formSignup.get('password').invalid\">\n                Password must be at least 6 characters\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput type=\"password\" placeholder=\"Confirm password\"\n                     formControlName=\"confirmPassword\">\n              <mat-error *ngIf=\"formSignup.get('confirmPassword').hasError('required')\">\n                {{ 'anms.examples.form.placeholder2' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"formSignup.get('confirmPassword').invalid\">\n                Passwords must match\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row buttons d-flex justify-content-center pad\">\n            <button type=\"submit\" mat-raised-button color=\"accent\"\n                    [ngClass]=\"routeAnimationsElements\">\n              {{ 'anms.menu.signup' | translate }}\n            </button>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/app/features/examples/helpers.ts":
/*!**********************************************!*\
  !*** ./src/app/features/examples/helpers.ts ***!
  \**********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/features/user/log-in/log-in.component.less":
/*!************************************************************!*\
  !*** ./src/app/features/user/log-in/log-in.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvbG9nLWluL2xvZy1pbi5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/features/user/log-in/log-in.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/user/log-in/log-in.component.ts ***!
  \**********************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony import */ var _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");










let LogInComponent = class LogInComponent {
    constructor(fb, notificationService, router, store, localStorageService, translate, activatedRoute, apiService) {
        this.fb = fb;
        this.notificationService = notificationService;
        this.router = router;
        this.store = store;
        this.localStorageService = localStorageService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.routeAnimationsElements = _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.formLogin = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const confirmId = params.confirm_id;
            if (confirmId) {
                this.confirmUser(confirmId);
            }
        });
    }
    confirmUser(confirmId) {
        this.apiService.postConfirm(confirmId).subscribe(params => {
            this.router.navigateByUrl('/user/login');
        });
    }
    login() {
        this.apiService.postLogin(this.formLogin.get('email').value, this.formLogin.get('password').value).subscribe(params => {
            this.localStorageService.setItem('token', params.token);
            this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_9__["authLogin"])());
            this.notificationService.success('Login Successful!');
            this.router.navigateByUrl('/');
        });
    }
};
LogInComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _core_core_module__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"] }
];
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/log-in/log-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.component.less */ "./src/app/features/user/log-in/log-in.component.less")).default]
    })
], LogInComponent);



/***/ }),

/***/ "./src/app/features/user/signup/signup.component.less":
/*!************************************************************!*\
  !*** ./src/app/features/user/signup/signup.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/features/user/signup/signup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/user/signup/signup.component.ts ***!
  \**********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _examples_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../examples/helpers */ "./src/app/features/examples/helpers.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let SignupComponent = class SignupComponent {
    constructor(fb, translate, notificationService, apiService, router) {
        this.fb = fb;
        this.translate = translate;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.routeAnimationsElements = _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.formSignup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        }, {
            validator: Object(_examples_helpers__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
    }
    ngOnInit() {
    }
    signup() {
        this.apiService.postSignUp(this.formSignup.get('email').value, this.formSignup.get('password').value).subscribe(res => {
            this.router.navigateByUrl('/user/login');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.less */ "./src/app/features/user/signup/signup.component.less")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/features/user/user-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/user/user-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/features/user/log-in/log-in.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/features/user/signup/signup.component.ts");





const routes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        data: { title: 'Log in' }
    },
    {
        path: 'login',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"],
        data: { title: 'Log in' }
    },
    {
        path: 'login/:confirm_id',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"],
        data: { title: 'Log in' }
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/features/user/user.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/user/user.module.ts ***!
  \**********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/features/user/log-in/log-in.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/features/user/user-routing.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/features/user/signup/signup.component.ts");







let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=features-user-user-module-es2015.js.map