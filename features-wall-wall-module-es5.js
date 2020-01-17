function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-wall-wall-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesWallAllPostsAllPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 rtl class=\"main-heading\">All posts</h1>\n    </div>\n  </div>\n  <div class=\"row align-items-end\">\n    <div *ngFor=\"let post of posts\" class=\"col-md-12 col-lg-6\" [ngClass]=\"routeAnimationsElements\">\n      <mat-card style=\"margin: 5px\">\n        <mat-card-title>\n          {{post.title | translate}}\n        </mat-card-title>\n        <mat-card-subtitle [innerHTML]=\"post.content\">\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button (click)=\"edit(post)\" target=\"_blank\">\n            <fa-icon icon=\"edit\"></fa-icon> Edit\n          </a>\n          <a mat-button (click)=\"delete(post)\" target=\"_blank\">\n            <fa-icon icon=\"trash\"></fa-icon> Delete\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/features/wall/all-posts/all-posts.component.less":
  /*!******************************************************************!*\
    !*** ./src/app/features/wall/all-posts/all-posts.component.less ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesWallAllPostsAllPostsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dhbGwvYWxsLXBvc3RzL2FsbC1wb3N0cy5jb21wb25lbnQubGVzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/wall/all-posts/all-posts.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/wall/all-posts/all-posts.component.ts ***!
    \****************************************************************/

  /*! exports provided: AllPostsComponent */

  /***/
  function srcAppFeaturesWallAllPostsAllPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPostsComponent", function () {
      return AllPostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../rest-api.service */
    "./src/app/rest-api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/local-storage/local-storage.service */
    "./src/app/core/local-storage/local-storage.service.ts");
    /* harmony import */


    var _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/animations/route.animations */
    "./src/app/core/animations/route.animations.ts");
    /* harmony import */


    var _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../core/notifications/notification.service */
    "./src/app/core/notifications/notification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AllPostsComponent =
    /*#__PURE__*/
    function () {
      function AllPostsComponent(apiService, http, router, localStorageService, notificationService) {
        _classCallCheck(this, AllPostsComponent);

        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.localStorageService = localStorageService;
        this.notificationService = notificationService;
        this.routeAnimationsElements = _core_animations_route_animations__WEBPACK_IMPORTED_MODULE_5__["ROUTE_ANIMATIONS_ELEMENTS"];
      }

      _createClass(AllPostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllPosts();
        }
      }, {
        key: "getAllPosts",
        value: function getAllPosts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.apiService.getAllPosts().subscribe(function (result) {
                      _this.posts = result.posts;
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(post) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.apiService.deletePost(post._id).subscribe(function (result) {
                      _this2.notificationService.success('Post deleted successfully!');

                      _this2.getAllPosts();
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit(post) {
          this.router.navigateByUrl('/journal/' + post._id);
        }
      }]);

      return AllPostsComponent;
    }();

    AllPostsComponent.ctorParameters = function () {
      return [{
        type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _core_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
      }];
    };

    AllPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wall/all-posts/all-posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-posts.component.less */
      "./src/app/features/wall/all-posts/all-posts.component.less")).default]
    })], AllPostsComponent);
    /***/
  },

  /***/
  "./src/app/features/wall/wall-routing.modules.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/wall/wall-routing.modules.ts ***!
    \*******************************************************/

  /*! exports provided: WallRoutingModules */

  /***/
  function srcAppFeaturesWallWallRoutingModulesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WallRoutingModules", function () {
      return WallRoutingModules;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-posts/all-posts.component */
    "./src/app/features/wall/all-posts/all-posts.component.ts");

    var routes = [{
      path: '',
      component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__["AllPostsComponent"],
      data: {
        title: ''
      }
    }];

    var WallRoutingModules = function WallRoutingModules() {
      _classCallCheck(this, WallRoutingModules);
    };

    WallRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WallRoutingModules);
    /***/
  },

  /***/
  "./src/app/features/wall/wall.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/features/wall/wall.module.ts ***!
    \**********************************************/

  /*! exports provided: WallModule */

  /***/
  function srcAppFeaturesWallWallModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WallModule", function () {
      return WallModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-posts/all-posts.component */
    "./src/app/features/wall/all-posts/all-posts.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _wall_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wall-routing.modules */
    "./src/app/features/wall/wall-routing.modules.ts");

    var WallModule = function WallModule() {
      _classCallCheck(this, WallModule);
    };

    WallModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__["AllPostsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _wall_routing_modules__WEBPACK_IMPORTED_MODULE_5__["WallRoutingModules"]]
    })], WallModule);
    /***/
  }
}]);
//# sourceMappingURL=features-wall-wall-module-es5.js.map