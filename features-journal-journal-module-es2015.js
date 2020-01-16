(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-journal-journal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/journal/write-post/write-post.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/journal/write-post/write-post.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" rtl>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"main-heading\">Start writing!</h1>\n    </div>\n  </div>\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <mat-card>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <input matInput placeholder=\"Enter Title\"\n                     formControlName=\"title\" type=\"text\">\n              <mat-error *ngIf=\"form.get('title').hasError('required')\">\n                {{ 'anms.examples.form.placeholder6' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row\">\n            <mat-form-field class=\"col\" [ngClass]=\"routeAnimationsElements\">\n              <textarea matInput placeholder=\"Enter content\"\n                        formControlName=\"content\" minlength=\"10\" maxlength=\"1000\" cdkTextareaAutosize\n                        #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"7\" cdkAutosizeMaxRows=\"10\"></textarea>\n              <mat-hint align=\"end\">{{form.get('content').value?.length}} /\n                1000</mat-hint>\n              <mat-error *ngIf=\"form.get('content').hasError('required')\">\n                {{ 'anms.examples.form.placeholder4' | translate }}\n                {{ 'anms.examples.form.error1' | translate }}\n              </mat-error>\n              <mat-error *ngIf=\"form.get('content').hasError('minlength')\">\n                {{ 'anms.examples.form.placeholder4' | translate }}\n                {{ 'anms.examples.form.error3' | translate }} 10\n              </mat-error>\n              <mat-error *ngIf=\"form.get('content').hasError('maxlength')\">\n                {{ 'anms.examples.form.placeholder4' | translate }}\n                {{ 'anms.examples.form.error4' | translate }} 1000\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"row buttons d-flex justify-content-center pad\">\n            <button type=\"button\" mat-raised-button color=\"accent\"\n                    [ngClass]=\"routeAnimationsElements\" (click)=\"submit()\">\n              Submit\n            </button>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/app/features/journal/journal-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/journal/journal-routing.module.ts ***!
  \************************************************************/
/*! exports provided: JournalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalRoutingModule", function() { return JournalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _write_post_write_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./write-post/write-post.component */ "./src/app/features/journal/write-post/write-post.component.ts");




const routes = [
    {
        path: ':postId',
        component: _write_post_write_post_component__WEBPACK_IMPORTED_MODULE_3__["WritePostComponent"],
        data: { title: 'Start writing' }
    },
    {
        path: '',
        component: _write_post_write_post_component__WEBPACK_IMPORTED_MODULE_3__["WritePostComponent"],
        data: { title: 'Start writing' }
    }
];
let JournalRoutingModule = class JournalRoutingModule {
};
JournalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JournalRoutingModule);



/***/ }),

/***/ "./src/app/features/journal/journal.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/journal/journal.module.ts ***!
  \****************************************************/
/*! exports provided: JournalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalModule", function() { return JournalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _write_post_write_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./write-post/write-post.component */ "./src/app/features/journal/write-post/write-post.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _journal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journal-routing.module */ "./src/app/features/journal/journal-routing.module.ts");






let JournalModule = class JournalModule {
};
JournalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_3__["WritePostComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _journal_routing_module__WEBPACK_IMPORTED_MODULE_5__["JournalRoutingModule"]
        ]
    })
], JournalModule);



/***/ }),

/***/ "./src/app/features/journal/write-post/write-post.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/features/journal/write-post/write-post.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2pvdXJuYWwvd3JpdGUtcG9zdC93cml0ZS1wb3N0LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/features/journal/write-post/write-post.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/journal/write-post/write-post.component.ts ***!
  \*********************************************************************/
/*! exports provided: WritePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritePostComponent", function() { return WritePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../rest-api.service */ "./src/app/rest-api.service.ts");









let WritePostComponent = class WritePostComponent {
    constructor(fb, notificationService, router, store, translate, activatedRoute, apiService) {
        this.fb = fb;
        this.notificationService = notificationService;
        this.router = router;
        this.store = store;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.routeAnimationsElements = _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.mode = 'new';
        this.postId = null;
        this.form = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]]
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const postId = params.postId;
            if (postId) {
                this.mode = 'edit';
                this.postId = postId;
                this.getPost();
            }
        });
    }
    getPost() {
        this.apiService.getPost(this.postId).subscribe(result => {
            this.form.setValue({
                title: result.post.title,
                content: result.post.content
            });
        });
    }
    submit() {
        if (this.mode === 'new') {
            this.apiService.postJPost(this.form.get('title').value, this.form.get('content').value).subscribe(res => {
                this.notificationService.success('Saved Post');
                this.router.navigateByUrl('/wall');
            });
        }
        else {
            this.apiService.putPost(this.form.get('title').value, this.form.get('content').value, this.postId).subscribe(res => {
                this.notificationService.success('Updated Post');
                this.router.navigateByUrl('/wall');
            });
        }
    }
};
WritePostComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_8__["RestApiService"] }
];
WritePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./write-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/journal/write-post/write-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./write-post.component.less */ "./src/app/features/journal/write-post/write-post.component.less")).default]
    })
], WritePostComponent);



/***/ })

}]);
//# sourceMappingURL=features-journal-journal-module-es2015.js.map