(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["howto-howto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/howto/howto.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/howto/howto.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>How To</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-button expand=\"block\" (click)=\"startTuturial()\">Show tutorial</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>1. Select your two cards from the card section</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>2. Select the dealers card from the card section</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>3. Click Calculate</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>4. The App suggest your Action</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>5. Contemplate and perform your action</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>6. If the round is over click reset and start over ;-)</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/howto/howto-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/howto/howto-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HowtoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoPageRoutingModule", function() { return HowtoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _howto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./howto.page */ "./src/app/howto/howto.page.ts");




const routes = [
    {
        path: '',
        component: _howto_page__WEBPACK_IMPORTED_MODULE_3__["HowtoPage"]
    }
];
let HowtoPageRoutingModule = class HowtoPageRoutingModule {
};
HowtoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HowtoPageRoutingModule);



/***/ }),

/***/ "./src/app/howto/howto.module.ts":
/*!***************************************!*\
  !*** ./src/app/howto/howto.module.ts ***!
  \***************************************/
/*! exports provided: HowtoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoPageModule", function() { return HowtoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _howto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./howto-routing.module */ "./src/app/howto/howto-routing.module.ts");
/* harmony import */ var _howto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./howto.page */ "./src/app/howto/howto.page.ts");







let HowtoPageModule = class HowtoPageModule {
};
HowtoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _howto_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowtoPageRoutingModule"]
        ],
        declarations: [_howto_page__WEBPACK_IMPORTED_MODULE_6__["HowtoPage"]]
    })
], HowtoPageModule);



/***/ }),

/***/ "./src/app/howto/howto.page.scss":
/*!***************************************!*\
  !*** ./src/app/howto/howto.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-row {\n  border: 1px solid #aeb7ca;\n  border-radius: 10px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93dG8vQzpcXFVzZXJzXFxUYnVyZ2VyXFxWaXN1YWxTdHVkaW9Qcm9qZWN0c1xcQmxhY2tKYWNrV2lubmluZ0hlbHBlci9zcmNcXGFwcFxcaG93dG9cXGhvd3RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG93dG8vaG93dG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvd3RvL2hvd3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlvbi1yb3cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWI3Y2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/howto/howto.page.ts":
/*!*************************************!*\
  !*** ./src/app/howto/howto.page.ts ***!
  \*************************************/
/*! exports provided: HowtoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoPage", function() { return HowtoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let HowtoPage = class HowtoPage {
    constructor(storage, menu, router) {
        this.storage = storage;
        this.menu = menu;
        this.router = router;
    }
    ngOnInit() {
    }
    startTuturial() {
        this.menu.enable(false);
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
};
HowtoPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HowtoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-howto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./howto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/howto/howto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./howto.page.scss */ "./src/app/howto/howto.page.scss")).default]
    })
], HowtoPage);



/***/ })

}]);
//# sourceMappingURL=howto-howto-module-es2015.js.map