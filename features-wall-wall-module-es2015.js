(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-wall-wall-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 rtl class=\"main-heading\">All posts</h1>\n    </div>\n  </div>\n  <div class=\"row align-items-end\">\n    <div *ngFor=\"let post of posts\" class=\"col-md-12 col-lg-6\" [ngClass]=\"routeAnimationsElements\">\n      <mat-card style=\"margin: 5px\">\n        <mat-card-title>\n          {{post.title | translate}}\n        </mat-card-title>\n        <mat-card-subtitle [innerHTML]=\"post.content\">\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button (click)=\"edit(post)\" target=\"_blank\">\n            <fa-icon icon=\"edit\"></fa-icon> Edit\n          </a>\n          <a mat-button (click)=\"delete(post)\" target=\"_blank\">\n            <fa-icon icon=\"trash\"></fa-icon> Delete\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/features/wall/all-posts/all-posts.component.less":
/*!******************************************************************!*\
  !*** ./src/app/features/wall/all-posts/all-posts.component.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dhbGwvYWxsLXBvc3RzL2FsbC1wb3N0cy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/features/wall/all-posts/all-posts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/wall/all-posts/all-posts.component.ts ***!
  \****************************************************************/
/*! exports provided: AllPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostsComponent", function() { return AllPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony import */ var _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AllPostsComponent = class AllPostsComponent {
    constructor(apiService, http, router, localStorageService, notificationService) {
        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.localStorageService = localStorageService;
        this.notificationService = notificationService;
        this.routeAnimationsElements = _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_5__["ROUTE_ANIMATIONS_ELEMENTS"];
    }
    ngOnInit() {
        this.getAllPosts();
    }
    getAllPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.apiService.getAllPosts().subscribe(result => {
                this.posts = result.posts;
            });
        });
    }
    delete(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.apiService.deletePost(post._id).subscribe(result => {
                this.notificationService.success('Post deleted successfully!');
                this.getAllPosts();
            });
        });
    }
    edit(post) {
        this.router.navigateByUrl('/journal/' + post._id);
    }
};
AllPostsComponent.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
AllPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-posts.component.less */ "./src/app/features/wall/all-posts/all-posts.component.less")).default]
    })
], AllPostsComponent);



/***/ }),

/***/ "./src/app/features/wall/wall-routing.modules.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/wall/wall-routing.modules.ts ***!
  \*******************************************************/
/*! exports provided: WallRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallRoutingModules", function() { return WallRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-posts/all-posts.component */ "./src/app/features/wall/all-posts/all-posts.component.ts");




const routes = [
    {
        path: '',
        component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__["AllPostsComponent"],
        data: { title: '' }
    }
];
let WallRoutingModules = class WallRoutingModules {
};
WallRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WallRoutingModules);



/***/ }),

/***/ "./src/app/features/wall/wall.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/wall/wall.module.ts ***!
  \**********************************************/
/*! exports provided: WallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallModule", function() { return WallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-posts/all-posts.component */ "./src/app/features/wall/all-posts/all-posts.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wall_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wall-routing.modules */ "./src/app/features/wall/wall-routing.modules.ts");






let WallModule = class WallModule {
};
WallModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__["AllPostsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _wall_routing_modules__WEBPACK_IMPORTED_MODULE_5__["WallRoutingModules"]
        ]
    })
], WallModule);



/***/ })

}]);
//# sourceMappingURL=features-wall-wall-module-es2015.js.map