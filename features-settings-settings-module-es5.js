function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesSettingsSettingsSettingsContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\"><h1>{{ 'anms.settings.title' | translate }}</h1></div>\r\n  </div>\r\n  <br>\r\n  <ng-container *ngIf=\"settings$ | async as settings\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\r\n        <h2>{{ 'anms.settings.general.title' | translate }}</h2>\r\n        <div class=\"icon-form-field\">\r\n          <mat-icon color=\"accent\"><fa-icon icon=\"language\" color=\"accent\"></fa-icon></mat-icon>\r\n          <mat-form-field>\r\n            <mat-select [placeholder]=\"'anms.settings.general.placeholder' | translate\"\r\n                        [ngModel]=\"settings.language\"\r\n                        (selectionChange)=\"onLanguageSelect($event)\"\r\n                        name=\"language\">\r\n              <mat-option *ngFor=\"let l of languages\" [value]=\"l.value\">\r\n                {{ 'anms.settings.general.language.' + l.label | translate }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"icon-form-field\">\r\n           <mat-icon color=\"accent\"><fa-icon icon=\"bars\" color=\"accent\"></fa-icon></mat-icon>\r\n           <mat-placeholder>{{ 'anms.settings.themes.sticky-header' | translate }}\r\n           </mat-placeholder>\r\n           <mat-slide-toggle\r\n             [checked]=\"settings.stickyHeader\"\r\n             (change)=\"onStickyHeaderToggle($event)\">\r\n           </mat-slide-toggle>\r\n         </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\r\n        <h2>{{ 'anms.settings.themes.title' | translate }}</h2>\r\n        <div class=\"icon-form-field\">\r\n          <mat-icon color=\"accent\"><fa-icon icon=\"paint-brush\" color=\"accent\"></fa-icon></mat-icon>\r\n          <mat-form-field>\r\n            <mat-select [placeholder]=\"'anms.settings.themes.placeholder' | translate\"\r\n                        [ngModel]=\"settings.theme\"\r\n                        (selectionChange)=\"onThemeSelect($event)\"\r\n                        name=\"themes\">\r\n              <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\r\n                {{ 'anms.settings.themes.' + t.label | translate }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"icon-form-field\">\r\n          <mat-icon color=\"accent\"><fa-icon icon=\"lightbulb\" color=\"accent\"></fa-icon></mat-icon>\r\n          <mat-placeholder>{{ 'anms.settings.themes.night-mode' | translate }}\r\n          </mat-placeholder>\r\n          <mat-slide-toggle\r\n            [checked]=\"settings.autoNightMode\"\r\n            (change)=\"onAutoNightModeToggle($event)\">\r\n          </mat-slide-toggle>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 group\" [ngClass]=\"routeAnimationsElements\">\r\n        <h2>{{ 'anms.settings.animations.title' | translate }}</h2>\r\n        <div class=\"icon-form-field\">\r\n          <mat-icon color=\"accent\"><mat-icon color=\"accent\"><fa-icon icon=\"window-maximize\"></fa-icon></mat-icon></mat-icon>\r\n          <mat-placeholder>{{ 'anms.settings.animations.page' | translate }}\r\n          </mat-placeholder>\r\n          <mat-slide-toggle\r\n            matTooltip=\"Sorry, this feature is disabled in IE, EDGE and Safari\"\r\n            matTooltipPosition=\"before\"\r\n            *ngIf=\"settings.pageAnimationsDisabled\"\r\n            disabled>\r\n          </mat-slide-toggle>\r\n          <mat-slide-toggle\r\n            *ngIf=\"!settings.pageAnimationsDisabled\"\r\n            [checked]=\"settings.pageAnimations\"\r\n            (change)=\"onPageAnimationsToggle($event)\">\r\n          </mat-slide-toggle>\r\n        </div>\r\n        <div class=\"icon-form-field\">\r\n          <mat-icon color=\"accent\"><fa-icon icon=\"stream\" color=\"accent\"></fa-icon></mat-icon>\r\n          <mat-placeholder>{{ 'anms.settings.animations.elements' | translate }}\r\n          </mat-placeholder>\r\n          <mat-slide-toggle\r\n            [checked]=\"settings.elementsAnimations\"\r\n            (change)=\"onElementsAnimationsToggle($event)\">\r\n          </mat-slide-toggle>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/features/settings/settings-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/features/settings/settings-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: SettingsRoutingModule */

  /***/
  function srcAppFeaturesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
      return SettingsRoutingModule;
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


    var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings/settings-container.component */
    "./src/app/features/settings/settings/settings-container.component.ts");

    var routes = [{
      path: '',
      component: _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_3__["SettingsContainerComponent"],
      data: {
        title: 'anms.menu.settings'
      }
    }];

    var SettingsRoutingModule = function SettingsRoutingModule() {
      _classCallCheck(this, SettingsRoutingModule);
    };

    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/settings/settings.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/settings/settings.module.ts ***!
    \******************************************************/

  /*! exports provided: SettingsModule */

  /***/
  function srcAppFeaturesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
      return SettingsModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/features/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings/settings-container.component */
    "./src/app/features/settings/settings/settings-container.component.ts");

    var SettingsModule = function SettingsModule() {
      _classCallCheck(this, SettingsModule);
    };

    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_settings_settings_container_component__WEBPACK_IMPORTED_MODULE_5__["SettingsContainerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]]
    })], SettingsModule);
    /***/
  },

  /***/
  "./src/app/features/settings/settings/settings-container.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/features/settings/settings/settings-container.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesSettingsSettingsSettingsContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin-top: 20px;\n}\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase;\n}\n\nh2 {\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n\n.group {\n  margin: 0 0 40px 0;\n}\n\n.icon-form-field {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  height: 65.5px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.icon-form-field mat-placeholder {\n  -webkit-box-flex: 2;\n          flex: 2 1 auto;\n}\n\nmat-icon {\n  margin: 0 6px 6px 0;\n  font-size: 20px;\n}\n\nmat-form-field {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2V0dGluZ3Mvc2V0dGluZ3MvSjpcXEludGVsbGlqUHJvamVjdHNcXGx5bGktdWkvc3JjXFxhcHBcXGZlYXR1cmVzXFxzZXR0aW5nc1xcc2V0dGluZ3NcXHNldHRpbmdzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9zZXR0aW5ncy9zZXR0aW5ncy9zZXR0aW5ncy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmdyb3VwIHtcclxuICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuXHJcbi5pY29uLWZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjUuNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hdC1wbGFjZWhvbGRlciB7XHJcbiAgICBmbGV4OiAyIDEgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW46IDAgNnB4IDZweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ncm91cCB7XG4gIG1hcmdpbjogMCAwIDQwcHggMDtcbn1cblxuLmljb24tZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NS41cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbi1mb3JtLWZpZWxkIG1hdC1wbGFjZWhvbGRlciB7XG4gIGZsZXg6IDIgMSBhdXRvO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbjogMCA2cHggNnB4IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBmbGV4OiAxIDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/settings/settings/settings-container.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/settings/settings/settings-container.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SettingsContainerComponent */

  /***/
  function srcAppFeaturesSettingsSettingsSettingsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsContainerComponent", function () {
      return SettingsContainerComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/settings/settings.actions */
    "./src/app/core/settings/settings.actions.ts");
    /* harmony import */


    var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/settings/settings.selectors */
    "./src/app/core/settings/settings.selectors.ts");

    var SettingsContainerComponent =
    /*#__PURE__*/
    function () {
      function SettingsContainerComponent(store) {
        _classCallCheck(this, SettingsContainerComponent);

        this.store = store;
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_3__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.themes = [{
          value: 'DEFAULT-THEME',
          label: 'blue'
        }, {
          value: 'LIGHT-THEME',
          label: 'light'
        }, {
          value: 'NATURE-THEME',
          label: 'nature'
        }, {
          value: 'BLACK-THEME',
          label: 'dark'
        }];
        this.languages = [{
          value: 'en',
          label: 'en'
        }, {
          value: 'de',
          label: 'de'
        }, {
          value: 'sk',
          label: 'sk'
        }, {
          value: 'fr',
          label: 'fr'
        }, {
          value: 'es',
          label: 'es'
        }, {
          value: 'pt-br',
          label: 'pt-br'
        }, {
          value: 'zh-cn',
          label: 'zh-cn'
        }, {
          value: 'he',
          label: 'he'
        }];
      }

      _createClass(SettingsContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSettings"]));
        }
      }, {
        key: "onLanguageSelect",
        value: function onLanguageSelect(_ref) {
          var language = _ref.value;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeLanguage"])({
            language: language
          }));
        }
      }, {
        key: "onThemeSelect",
        value: function onThemeSelect(_ref2) {
          var theme = _ref2.value;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeTheme"])({
            theme: theme
          }));
        }
      }, {
        key: "onAutoNightModeToggle",
        value: function onAutoNightModeToggle(_ref3) {
          var autoNightMode = _ref3.checked;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAutoNightMode"])({
            autoNightMode: autoNightMode
          }));
        }
      }, {
        key: "onStickyHeaderToggle",
        value: function onStickyHeaderToggle(_ref4) {
          var stickyHeader = _ref4.checked;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeStickyHeader"])({
            stickyHeader: stickyHeader
          }));
        }
      }, {
        key: "onPageAnimationsToggle",
        value: function onPageAnimationsToggle(_ref5) {
          var pageAnimations = _ref5.checked;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAnimationsPage"])({
            pageAnimations: pageAnimations
          }));
        }
      }, {
        key: "onElementsAnimationsToggle",
        value: function onElementsAnimationsToggle(_ref6) {
          var elementsAnimations = _ref6.checked;
          this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_4__["actionSettingsChangeAnimationsElements"])({
            elementsAnimations: elementsAnimations
          }));
        }
      }]);

      return SettingsContainerComponent;
    }();

    SettingsContainerComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    SettingsContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'anms-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/settings/settings/settings-container.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings-container.component.scss */
      "./src/app/features/settings/settings/settings-container.component.scss")).default]
    })], SettingsContainerComponent);
    /***/
  }
}]);
//# sourceMappingURL=features-settings-settings-module-es5.js.map