function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratethisapp-ratethisapp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ratethisapp/ratethisapp.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ratethisapp/ratethisapp.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRatethisappRatethisappPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Rate this App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n  <ion-card>\n    <a href=\"https://play.google.com/store/apps/details?id=at.thburger.blackjack.winhelper\">\n      <img src=\"assets/img/card-google-play.jpg\"/>\n    </a>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ratethisapp/ratethisapp-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ratethisapp/ratethisapp-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RatethisappPageRoutingModule */

  /***/
  function srcAppRatethisappRatethisappRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatethisappPageRoutingModule", function () {
      return RatethisappPageRoutingModule;
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


    var _ratethisapp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ratethisapp.page */
    "./src/app/ratethisapp/ratethisapp.page.ts");

    var routes = [{
      path: '',
      component: _ratethisapp_page__WEBPACK_IMPORTED_MODULE_3__["RatethisappPage"]
    }];

    var RatethisappPageRoutingModule = function RatethisappPageRoutingModule() {
      _classCallCheck(this, RatethisappPageRoutingModule);
    };

    RatethisappPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RatethisappPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ratethisapp/ratethisapp.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ratethisapp/ratethisapp.module.ts ***!
    \***************************************************/

  /*! exports provided: RatethisappPageModule */

  /***/
  function srcAppRatethisappRatethisappModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatethisappPageModule", function () {
      return RatethisappPageModule;
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


    var _ratethisapp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ratethisapp-routing.module */
    "./src/app/ratethisapp/ratethisapp-routing.module.ts");
    /* harmony import */


    var _ratethisapp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ratethisapp.page */
    "./src/app/ratethisapp/ratethisapp.page.ts");

    var RatethisappPageModule = function RatethisappPageModule() {
      _classCallCheck(this, RatethisappPageModule);
    };

    RatethisappPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ratethisapp_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatethisappPageRoutingModule"]],
      declarations: [_ratethisapp_page__WEBPACK_IMPORTED_MODULE_6__["RatethisappPage"]]
    })], RatethisappPageModule);
    /***/
  },

  /***/
  "./src/app/ratethisapp/ratethisapp.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/ratethisapp/ratethisapp.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRatethisappRatethisappPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0ZXRoaXNhcHAvQzpcXFVzZXJzXFxUYnVyZ2VyXFxWaXN1YWxTdHVkaW9Qcm9qZWN0c1xcQmxhY2tKYWNrV2lubmluZ0hlbHBlci9zcmNcXGFwcFxccmF0ZXRoaXNhcHBcXHJhdGV0aGlzYXBwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmF0ZXRoaXNhcHAvcmF0ZXRoaXNhcHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7QUNDSjs7QURJSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNETjs7QURJSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRk47O0FES0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3JhdGV0aGlzYXBwL3JhdGV0aGlzYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzNiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICBcclxuICB9IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ratethisapp/ratethisapp.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/ratethisapp/ratethisapp.page.ts ***!
    \*************************************************/

  /*! exports provided: RatethisappPage */

  /***/
  function srcAppRatethisappRatethisappPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatethisappPage", function () {
      return RatethisappPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RatethisappPage = /*#__PURE__*/function () {
      function RatethisappPage() {
        _classCallCheck(this, RatethisappPage);
      }

      _createClass(RatethisappPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RatethisappPage;
    }();

    RatethisappPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ratethisapp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ratethisapp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ratethisapp/ratethisapp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ratethisapp.page.scss */
      "./src/app/ratethisapp/ratethisapp.page.scss"))["default"]]
    })], RatethisappPage);
    /***/
  }
}]);
//# sourceMappingURL=ratethisapp-ratethisapp-module-es5.js.map