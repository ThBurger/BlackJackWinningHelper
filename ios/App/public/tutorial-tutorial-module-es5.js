function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTutorialTutorialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-1.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Welcome to\n        <b>Blackjack Win Helper</b>\n      </h2>\n      <p>\n        With this app you will get the most out of your Blackjack games!\n      </p>\n      <ion-button fill=\"clear\" (click)=\"nextSlide()\">\n        Next\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-2.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is it?</h2>\n      <p>\n        <b>Blackjack Win Helper</b> is an app which helps you to decide your next step on mathematical studies from experts</p>\n        <ion-button fill=\"clear\" (click)=\"prevSlide()\">\n          Previous\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" (click)=\"nextSlide()\">\n          Next\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-3.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">How does it work?</h2>\n      <p>\n        Select your cards and the dealers card from the card section an press calculate, the app recommend your next action</p>\n        <ion-button fill=\"clear\" (click)=\"prevSlide()\">\n          Previous\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" (click)=\"nextSlide()\">\n          Next\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-4.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" (click)=\"prevSlide()\">\n        Previous\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TutorialPageRoutingModule */

  /***/
  function srcAppTutorialTutorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function () {
      return TutorialPageRoutingModule;
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


    var _tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tutorial.page */
    "./src/app/tutorial/tutorial.page.ts");

    var routes = [{
      path: '',
      component: _tutorial_page__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }];

    var TutorialPageRoutingModule = function TutorialPageRoutingModule() {
      _classCallCheck(this, TutorialPageRoutingModule);
    };

    TutorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TutorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tutorial/tutorial.module.ts ***!
    \*********************************************/

  /*! exports provided: TutorialPageModule */

  /***/
  function srcAppTutorialTutorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function () {
      return TutorialPageModule;
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


    var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tutorial-routing.module */
    "./src/app/tutorial/tutorial-routing.module.ts");
    /* harmony import */


    var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tutorial.page */
    "./src/app/tutorial/tutorial.page.ts");

    var TutorialPageModule = function TutorialPageModule() {
      _classCallCheck(this, TutorialPageModule);
    };

    TutorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]],
      declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
    })], TutorialPageModule);
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/tutorial/tutorial.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTutorialTutorialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nswiper-pagination {\n  bottom: 20px !important;\n  bottom: calc(env(safe-area-inset-bottom) + 20px) !important;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvQzpcXFVzZXJzXFxUYnVyZ2VyXFxWaXN1YWxTdHVkaW9Qcm9qZWN0c1xcQmxhY2tKYWNrV2lubmluZ0hlbHBlci9zcmNcXGFwcFxcdHV0b3JpYWxcXHR1dG9yaWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLDJEQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FEQ0k7RUFDRSxxQ0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWltYWdlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAzNnB4IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIHN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIGJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDIwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICBcclxuICAgIGIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW46IDM2cHggMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAyMHB4KSAhaW1wb3J0YW50O1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tutorial/tutorial.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/tutorial/tutorial.page.ts ***!
    \*******************************************/

  /*! exports provided: TutorialPage */

  /***/
  function srcAppTutorialTutorialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPage", function () {
      return TutorialPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var TutorialPage = /*#__PURE__*/function () {
      function TutorialPage(menu, router, storage) {
        _classCallCheck(this, TutorialPage);

        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
      }

      _createClass(TutorialPage, [{
        key: "startApp",
        value: function startApp() {
          var _this = this;

          this.router.navigateByUrl('/blackjack', {
            replaceUrl: true
          }).then(function () {
            return _this.storage.set('ion_did_tutorial', true);
          });
        }
      }, {
        key: "nextSlide",
        value: function nextSlide() {
          this.slides.slideNext();
        }
      }, {
        key: "prevSlide",
        value: function prevSlide() {
          this.slides.slidePrev();
        }
      }, {
        key: "onSlideChangeStart",
        value: function onSlideChangeStart(event) {
          var _this2 = this;

          event.target.isEnd().then(function (isEnd) {
            _this2.showSkip = !isEnd;
          });
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // enable the root left menu when leaving the tutorial page
          this.menu.enable(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
              _this3.router.navigateByUrl('/blackjack', {
                replaceUrl: true
              });
            }
          });
          this.menu.enable(false);
        }
      }]);

      return TutorialPage;
    }();

    TutorialPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      "static": true
    })], TutorialPage.prototype, "slides", void 0);
    TutorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tutorial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tutorial.page.scss */
      "./src/app/tutorial/tutorial.page.scss"))["default"]]
    })], TutorialPage);
    /***/
  }
}]);
//# sourceMappingURL=tutorial-tutorial-module-es5.js.map