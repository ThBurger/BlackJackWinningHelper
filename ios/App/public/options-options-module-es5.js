function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOptionsOptionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item-divider>\n      <ion-label>\n        General\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"analytics-outline\"></ion-icon>\n      <ion-label>Strategy</ion-label>\n      <ion-select [(ngModel)]=\"strategy\" (ionChange)=\"onChangeStrategy($event)\">\n        <ion-select-option value=\"1\">Johnslots.com</ion-select-option>\n        <ion-select-option value=\"2\">black-jackstrategy.net</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n      Link to &nbsp;\n      <a *ngIf=\"strategy == 1\" target=\"_blank\" href=\"https://www.johnslots.com/en/blackjack/how-to-win-at-blackjack/\"> Johnslots.com</a>\n      <a *ngIf=\"strategy == 2\" target=\"_blank\" href=\"http://blackjack-strategy.net/?p=16\"> Black-Jack Strategy.net</a>\n    </ion-item>\n\n    <ion-item-divider>\n      <ion-label>\n        Theme\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"shapes-outline\"></ion-icon>\n      <ion-label>Suits</ion-label>\n      <ion-select  [(ngModel)]=\"suits\" (ionChange)=\"onChangeSuits($event)\">\n        <ion-select-option value=\"hearts\">Hearts</ion-select-option>\n        <ion-select-option value=\"diamonds\">Diamonds</ion-select-option>\n        <ion-select-option value=\"clubs\">Clubs</ion-select-option>\n        <ion-select-option value=\"spades\">Spades</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"tablet-portrait-outline\"></ion-icon>\n      <ion-label>Backside of Cards</ion-label>\n      <ion-select  [(ngModel)]=\"backside\" (ionChange)=\"onChangeBackside($event)\">\n        <ion-select-option value=\"red\">Red</ion-select-option>\n        <ion-select-option value=\"blue\">Blue</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n      <ion-label>\n        Dark Mode\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"darkmode\" (ionChange)=\"onChangeDarkMode($event)\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"reload-outline\"></ion-icon>\n      <ion-label>\n        Auto Calculation\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"autocalc\" (ionChange)=\"onChangeAutoCalc($event)\"></ion-toggle>\n    </ion-item>\n\n    <ion-item-divider>\n      <ion-label>\n        Legal\n      </ion-label>\n    </ion-item-divider>\n    \n    <ion-item>\n      <a target=\"_blank\" href=\"https://sites.google.com/view/blackjackwinhelperprivacy/home\"> Privacy Policy</a>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/options/options-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/options/options-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: OptionsPageRoutingModule */

  /***/
  function srcAppOptionsOptionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsPageRoutingModule", function () {
      return OptionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./options.page */
    "./src/app/options/options.page.ts");

    var routes = [{
      path: '',
      component: _options_page__WEBPACK_IMPORTED_MODULE_3__["OptionsPage"]
    }];

    var OptionsPageRoutingModule = function OptionsPageRoutingModule() {
      _classCallCheck(this, OptionsPageRoutingModule);
    };

    OptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OptionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/options/options.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/options/options.module.ts ***!
    \*******************************************/

  /*! exports provided: OptionsPageModule */

  /***/
  function srcAppOptionsOptionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function () {
      return OptionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./options-routing.module */
    "./src/app/options/options-routing.module.ts");
    /* harmony import */


    var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./options.page */
    "./src/app/options/options.page.ts");

    var OptionsPageModule = function OptionsPageModule() {
      _classCallCheck(this, OptionsPageModule);
    };

    OptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _options_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionsPageRoutingModule"]],
      declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
    })], OptionsPageModule);
    /***/
  },

  /***/
  "./src/app/options/options.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/options/options.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppOptionsOptionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-select {\n  max-width: 70% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9DOlxcVXNlcnNcXFRidXJnZXJcXFZpc3VhbFN0dWRpb1Byb2plY3RzXFxCbGFja0phY2tXaW5uaW5nSGVscGVyL3NyY1xcYXBwXFxvcHRpb25zXFxvcHRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0e1xyXG4gICAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/options/options.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/options/options.page.ts ***!
    \*****************************************/

  /*! exports provided: OptionsPage */

  /***/
  function srcAppOptionsOptionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsPage", function () {
      return OptionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var OptionsPage = /*#__PURE__*/function () {
      function OptionsPage(storage, toastController) {
        _classCallCheck(this, OptionsPage);

        this.storage = storage;
        this.toastController = toastController;
        this.suits = '';
        this.strategy = '';
        this.backside = '';
        this.darkmode = false;
        this.darkmodeInit = false;
        this.autocalc = false;
      }

      _createClass(OptionsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.get('suits').then(function (res) {
            _this.suits = res;
          });
          this.storage.get('strategy').then(function (res) {
            _this.strategy = res;
          });
          this.storage.get('backside').then(function (res) {
            _this.backside = res;
          });
          this.storage.get('autocalc').then(function (res) {
            _this.autocalc = res;
          });
          this.storage.get('darkmode').then(function (res) {
            _this.darkmode = res;
            _this.darkmodeInit = res;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChangeSuits",
        value: function onChangeSuits($event) {
          this.storage.set('suits', $event.target.value);
        }
      }, {
        key: "onChangeStrategy",
        value: function onChangeStrategy($event) {
          this.storage.set('strategy', $event.target.value);
        }
      }, {
        key: "onChangeBackside",
        value: function onChangeBackside($event) {
          this.storage.set('backside', $event.target.value);
        }
      }, {
        key: "onChangeDarkMode",
        value: function onChangeDarkMode($event) {
          this.storage.set('darkmode', this.darkmode);
          this.presentToast();
        }
      }, {
        key: "onChangeAutoCalc",
        value: function onChangeAutoCalc($event) {
          this.storage.set('autocalc', this.autocalc);
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.darkmodeInit == this.darkmode)) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 8;
                    break;

                  case 3:
                    message = this.darkmode ? 'DarkMode will be activated after relaunch of this app.' : 'DarkMode will be deactivated after relaunch of this app.';
                    _context.next = 6;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 6:
                    toast = _context.sent;
                    toast.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return OptionsPage;
    }();

    OptionsPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    OptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-options',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./options.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./options.page.scss */
      "./src/app/options/options.page.scss"))["default"]]
    })], OptionsPage);
    /***/
  }
}]);
//# sourceMappingURL=options-options-module-es5.js.map