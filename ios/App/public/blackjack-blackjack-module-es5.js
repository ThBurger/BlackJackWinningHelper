function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blackjack-blackjack-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blackjack/blackjack.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blackjack/blackjack.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlackjackBlackjackPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Blackjack Win Helper</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"loader\"></div>\n\n<ion-content *ngIf=\"!loader\" [fullscreen]=\"true\" >\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Your Cards:\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-button color=\"success\" id=\"yc1\" size=\"large\" (click)=\"falseCard()\"><img id=\"yc1img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n        <ion-button color=\"dark\" id=\"yc2\" size=\"large\" (click)=\"falseCard()\"><img id=\"yc2img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Dealer Card:\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button color=\"dark\" id=\"dc1\" size=\"large\" (click)=\"falseCard()\"><img id=\"dc1img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n        Action:\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-label id=\"action\">-</ion-label>\n        <ion-button fill=\"clear\" id=\"ys\" size=\"large\"><img id=\"ysimg\" src=\"assets/img/placeholder.png\"></ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Your next Cards:\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-button color=\"dark\" id=\"yc3\" size=\"large\" (click)=\"falseCard()\"><img id=\"yc3img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n        <ion-button color=\"dark\" id=\"yc4\" size=\"large\" (click)=\"falseCard()\"><img id=\"yc4img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n        <ion-button color=\"dark\" id=\"yc5\" size=\"large\" (click)=\"falseCard()\"><img id=\"yc5img\" src=\"assets/img/cards/backside-{{ backside }}.png\"></ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"separator\">Card Selection</div>\n  <div class=\"borderDiv\">\n    <ion-button fill=\"clear\" (click)=\"clickCard('A', $event)\" size=\"large\" ><img src=\"assets/img/cards/ace_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('K', $event)\" size=\"large\"><img src=\"assets/img/cards/king_of_{{ suits }}2.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('Q', $event)\" size=\"large\"><img src=\"assets/img/cards/queen_of_{{ suits }}2.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('J', $event)\" size=\"large\"><img src=\"assets/img/cards/jack_of_{{ suits }}2.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('10', $event)\" size=\"large\"><img src=\"assets/img/cards/10_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('9', $event)\" size=\"large\"><img src=\"assets/img/cards/9_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('8', $event)\" size=\"large\"><img src=\"assets/img/cards/8_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('7', $event)\" size=\"large\"><img src=\"assets/img/cards/7_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('6', $event)\" size=\"large\"><img src=\"assets/img/cards/6_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('5', $event)\" size=\"large\"><img src=\"assets/img/cards/5_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('4', $event)\" size=\"large\"><img src=\"assets/img/cards/4_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('3', $event)\" size=\"large\"><img src=\"assets/img/cards/3_of_{{ suits }}.png\"></ion-button>\n    <ion-button fill=\"clear\" (click)=\"clickCard('2', $event)\" size=\"large\"><img src=\"assets/img/cards/2_of_{{ suits }}.png\"></ion-button>\n  </div>\n</ion-content>\n\n<div class=\"footer\"> \n  <ion-button *ngIf=\"!autocalc\" expand=\"block\" [disabled]=\"disabled\" (click)=\"calculate()\">Calculate</ion-button>\n  <ion-button *ngIf=\"autocalc\" expand=\"block\" [disabled]=\"disabled\" (click)=\"calculate()\">Auto Calculation is on</ion-button>\n  <ion-button expand=\"block\" (click)=\"reset()\" color=\"danger\">Reset</ion-button>\n</div>";
    /***/
  },

  /***/
  "./src/app/blackjack/Helper.ts":
  /*!*************************************!*\
    !*** ./src/app/blackjack/Helper.ts ***!
    \*************************************/

  /*! exports provided: Helper */

  /***/
  function srcAppBlackjackHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
    });

    var Helper = /*#__PURE__*/function () {
      function Helper() {
        _classCallCheck(this, Helper);
      }

      _createClass(Helper, null, [{
        key: "calculateCard",
        value: function calculateCard(card) {
          var retWert = 0;

          if (card == 'A') {
            retWert = 1;
          } else if (this.cardEquals10(card)) {
            retWert = 10;
          } else if (card.match(/^[0-9]+$/) != null) {
            retWert = Number.parseInt(card);
          }

          return retWert;
        }
      }, {
        key: "cardEquals10",
        value: function cardEquals10(card) {
          if (card == "10" || card == "J" || card == "Q" || card == "K") {
            return true;
          }

          return false;
        }
      }, {
        key: "filterSumArray",
        value: function filterSumArray(array) {
          return array.filter(function (value, index, arr) {
            return value <= 21;
          });
        }
      }, {
        key: "shouldChangeCards",
        value: function shouldChangeCards(card1, card2) {
          if (card2 == "A" && (card1 == "2" || card1 == "3" || card1 == "4" || card1 == "5" || card1 == "6" || card1 == "7" || card1 == "8" || card1 == "9" || card1 == "10")) {
            return true;
          }

          return false;
        }
      }]);

      return Helper;
    }();

    Helper.S = "Stand";
    Helper.H = "Hit";
    Helper.B = "BlackJack!";
    Helper.P = "Split";
    Helper.DD = "Double Down";
    Helper.HP = "Split if allowed to double afterwards, otherwise HIT";
    Helper.HR = "Surrender if allowed, otherwise HIT";
    Helper.SORRY = "Sorry, over 21";
    /***/
  },

  /***/
  "./src/app/blackjack/MoreCardCalculator_Blackjackstrategy.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/blackjack/MoreCardCalculator_Blackjackstrategy.ts ***!
    \*******************************************************************/

  /*! exports provided: MoreCardCalculator_Blackjackstrategy */

  /***/
  function srcAppBlackjackMoreCardCalculator_BlackjackstrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreCardCalculator_Blackjackstrategy", function () {
      return MoreCardCalculator_Blackjackstrategy;
    });
    /* harmony import */


    var _Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Helper */
    "./src/app/blackjack/Helper.ts");

    var MoreCardCalculator_Blackjackstrategy = /*#__PURE__*/function () {
      function MoreCardCalculator_Blackjackstrategy() {
        _classCallCheck(this, MoreCardCalculator_Blackjackstrategy);
      }

      _createClass(MoreCardCalculator_Blackjackstrategy, null, [{
        key: "calculate",
        value: function calculate(dc, yc1, yc2, yc3, yc4, yc5) {
          // start SUM
          var card1,
              card2,
              card3,
              card4,
              card5,
              sum,
              aces = 0;
          card1 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc1);
          card2 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc2);
          card3 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc3);
          card4 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc4);
          card5 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc5);
          sum = card1 + card2 + card3 + card4 + card5;
          aces = yc1 == 'A' ? aces += 1 : aces += 0;
          aces = yc2 == 'A' ? aces += 1 : aces += 0;
          aces = yc3 == 'A' ? aces += 1 : aces += 0;
          aces = yc4 == 'A' ? aces += 1 : aces += 0;
          aces = yc5 == 'A' ? aces += 1 : aces += 0;
          var sumArray = [sum];

          for (var i = 0; i < aces; i++) {
            sumArray.push(sumArray[i] + 10);
          }

          var filteredSumArray = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].filterSumArray(sumArray);

          if (filteredSumArray.length == 0) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].SORRY;
          }

          if (filteredSumArray.includes(21)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].B;
          }

          if (filteredSumArray.includes(20) || filteredSumArray.includes(19) || filteredSumArray.includes(18) || filteredSumArray.includes(17)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (filteredSumArray.includes(16)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(15)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(14)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(13)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(12)) {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(11)) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (filteredSumArray.includes(10)) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (filteredSumArray.includes(9)) {
            if (dc == "7" || dc == "8" || dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (filteredSumArray.includes(8)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
        }
      }]);

      return MoreCardCalculator_Blackjackstrategy;
    }();
    /***/

  },

  /***/
  "./src/app/blackjack/MoreCardCalculator_Johnslots.ts":
  /*!***********************************************************!*\
    !*** ./src/app/blackjack/MoreCardCalculator_Johnslots.ts ***!
    \***********************************************************/

  /*! exports provided: MoreCardCalculator_Johnslots */

  /***/
  function srcAppBlackjackMoreCardCalculator_JohnslotsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreCardCalculator_Johnslots", function () {
      return MoreCardCalculator_Johnslots;
    });
    /* harmony import */


    var _Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Helper */
    "./src/app/blackjack/Helper.ts");

    var MoreCardCalculator_Johnslots = /*#__PURE__*/function () {
      function MoreCardCalculator_Johnslots() {
        _classCallCheck(this, MoreCardCalculator_Johnslots);
      }

      _createClass(MoreCardCalculator_Johnslots, null, [{
        key: "calculate",
        value: function calculate(dc, yc1, yc2, yc3, yc4, yc5) {
          // start SUM
          var card1,
              card2,
              card3,
              card4,
              card5,
              sum,
              aces = 0;
          card1 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc1);
          card2 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc2);
          card3 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc3);
          card4 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc4);
          card5 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc5);
          sum = card1 + card2 + card3 + card4 + card5;
          aces = yc1 == 'A' ? aces += 1 : aces += 0;
          aces = yc2 == 'A' ? aces += 1 : aces += 0;
          aces = yc3 == 'A' ? aces += 1 : aces += 0;
          aces = yc4 == 'A' ? aces += 1 : aces += 0;
          aces = yc5 == 'A' ? aces += 1 : aces += 0;
          var sumArray = [sum];

          for (var i = 0; i < aces; i++) {
            sumArray.push(sumArray[i] + 10);
          }

          var filteredSumArray = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].filterSumArray(sumArray);

          if (filteredSumArray.length == 0) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].SORRY;
          }

          if (filteredSumArray.includes(21)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].B;
          }

          if (filteredSumArray.includes(20) || filteredSumArray.includes(19) || filteredSumArray.includes(18) || filteredSumArray.includes(17)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (filteredSumArray.includes(16)) {
            if (dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HR;
            }

            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(15)) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc)) {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HR;
            }

            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(14)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(13)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(12)) {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(11)) {
            if (dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (filteredSumArray.includes(10)) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (filteredSumArray.includes(9)) {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (filteredSumArray.includes(8)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
        }
      }]);

      return MoreCardCalculator_Johnslots;
    }();
    /***/

  },

  /***/
  "./src/app/blackjack/TwoCardCalculator_Blackjackstrategy.ts":
  /*!******************************************************************!*\
    !*** ./src/app/blackjack/TwoCardCalculator_Blackjackstrategy.ts ***!
    \******************************************************************/

  /*! exports provided: TwoCardCalculator_Blackjackstrategy */

  /***/
  function srcAppBlackjackTwoCardCalculator_BlackjackstrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoCardCalculator_Blackjackstrategy", function () {
      return TwoCardCalculator_Blackjackstrategy;
    });
    /* harmony import */


    var _Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Helper */
    "./src/app/blackjack/Helper.ts");

    var TwoCardCalculator_Blackjackstrategy = /*#__PURE__*/function () {
      function TwoCardCalculator_Blackjackstrategy() {
        _classCallCheck(this, TwoCardCalculator_Blackjackstrategy);
      }

      _createClass(TwoCardCalculator_Blackjackstrategy, null, [{
        key: "calculate",
        value: function calculate(dc, yc1, yc2) {
          if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].shouldChangeCards(yc1, yc2)) {
            var changedCard = yc1;
            yc1 = yc2;
            yc2 = changedCard;
          }

          if (yc1 == "A" && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc2) || yc2 == "A" && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc1)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].B;
          }

          if (yc1 == "A" && yc2 == "A") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc1) && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc2)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "9" && yc2 == "9") {
            if (dc == "7" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "8" && yc2 == "8") {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "7" && yc2 == "7") {
            if (dc == "8" || dc == "9" || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            } else if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc)) {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "6" && yc2 == "6") {
            if (dc == "7" || dc == "8" || dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "5" && yc2 == "5") {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (yc1 == "4" && yc2 == "4") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "3" && yc2 == "3") {
            if (dc == "4" || dc == "5" || dc == "6" || dc == "7") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "2" && yc2 == "2") {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6" || dc == "7") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          } //start soft


          if (yc1 == "A" && yc2 == "9") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "8") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "7") {
            if (dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc)) {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "6") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "5") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "4") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "3") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "2") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          var card1,
              card2,
              sum = 0;
          card1 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc1);
          card2 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc2);
          sum = card1 + card2;

          if (sum >= 17) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (sum == 16) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 15) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 14) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 13) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 12) {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 11) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (sum == 10) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (sum == 9) {
            if (dc == "7" || dc == "8" || dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (sum == 8) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 7) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 6) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum <= 5) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          return "NO ACTIONS preffered -> HIT";
        }
      }]);

      return TwoCardCalculator_Blackjackstrategy;
    }();
    /***/

  },

  /***/
  "./src/app/blackjack/TwoCardCalculator_Johnslots.ts":
  /*!**********************************************************!*\
    !*** ./src/app/blackjack/TwoCardCalculator_Johnslots.ts ***!
    \**********************************************************/

  /*! exports provided: TwoCardCalculator_Johnslots */

  /***/
  function srcAppBlackjackTwoCardCalculator_JohnslotsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoCardCalculator_Johnslots", function () {
      return TwoCardCalculator_Johnslots;
    });
    /* harmony import */


    var _Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Helper */
    "./src/app/blackjack/Helper.ts");

    var TwoCardCalculator_Johnslots = /*#__PURE__*/function () {
      function TwoCardCalculator_Johnslots() {
        _classCallCheck(this, TwoCardCalculator_Johnslots);
      }

      _createClass(TwoCardCalculator_Johnslots, null, [{
        key: "calculate",
        value: function calculate(dc, yc1, yc2) {
          if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].shouldChangeCards(yc1, yc2)) {
            var changedCard = yc1;
            yc1 = yc2;
            yc2 = changedCard;
          }

          if (yc1 == "A" && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc2) || yc2 == "A" && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc1)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].B;
          }

          if (yc1 == "A" && yc2 == "A") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc1) && _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(yc2)) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "9" && yc2 == "9") {
            if (dc == "7" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "8" && yc2 == "8") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "7" && yc2 == "7") {
            if (dc == "8" || dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "6" && yc2 == "6") {
            if (dc == "2") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HP;
            }

            if (dc == "7" || dc == "8" || dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
          }

          if (yc1 == "5" && yc2 == "5") {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (yc1 == "4" && yc2 == "4") {
            if (dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HP;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "3" && yc2 == "3") {
            if (dc == "2" || dc == "3") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HP;
            }

            if (dc == "4" || dc == "5" || dc == "6" || dc == "7") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "2" && yc2 == "2") {
            if (dc == "2" || dc == "3") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HP;
            }

            if (dc == "4" || dc == "5" || dc == "6" || dc == "7") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].P;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "9") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "8") {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "7") {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            if (dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (yc1 == "A" && yc2 == "6") {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "5") {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          console.log('cards');
          console.log(yc1);
          console.log(yc2);

          if (yc1 == "A" && yc2 == "4") {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "3") {
            if (dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (yc1 == "A" && yc2 == "2") {
            if (dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          } // start SUM


          var card1,
              card2,
              sum = 0;
          card1 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc1);
          card2 = _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].calculateCard(yc2);
          sum = card1 + card2;

          if (sum >= 17) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
          }

          if (sum == 16) {
            if (dc == "9" || _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HR;
            }

            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 15) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc)) {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].HR;
            }

            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 14) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 13) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 12) {
            if (dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].S;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum == 11) {
            if (dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (sum == 10) {
            if (_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].cardEquals10(dc) || dc == "A") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
          }

          if (sum == 9) {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6") {
              return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].DD;
            }

            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          if (sum <= 8) {
            return _Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].H;
          }

          return "NO ACTIONS preffered -> HIT";
        }
      }]);

      return TwoCardCalculator_Johnslots;
    }();
    /***/

  },

  /***/
  "./src/app/blackjack/blackjack-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/blackjack/blackjack-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BlackjackPageRoutingModule */

  /***/
  function srcAppBlackjackBlackjackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlackjackPageRoutingModule", function () {
      return BlackjackPageRoutingModule;
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


    var _blackjack_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blackjack.page */
    "./src/app/blackjack/blackjack.page.ts");

    var routes = [{
      path: '',
      component: _blackjack_page__WEBPACK_IMPORTED_MODULE_3__["BlackjackPage"]
    }];

    var BlackjackPageRoutingModule = function BlackjackPageRoutingModule() {
      _classCallCheck(this, BlackjackPageRoutingModule);
    };

    BlackjackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlackjackPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/blackjack/blackjack.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/blackjack/blackjack.module.ts ***!
    \***********************************************/

  /*! exports provided: BlackjackPageModule */

  /***/
  function srcAppBlackjackBlackjackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlackjackPageModule", function () {
      return BlackjackPageModule;
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


    var _blackjack_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blackjack-routing.module */
    "./src/app/blackjack/blackjack-routing.module.ts");
    /* harmony import */


    var _blackjack_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blackjack.page */
    "./src/app/blackjack/blackjack.page.ts");

    var BlackjackPageModule = function BlackjackPageModule() {
      _classCallCheck(this, BlackjackPageModule);
    };

    BlackjackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blackjack_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlackjackPageRoutingModule"]],
      declarations: [_blackjack_page__WEBPACK_IMPORTED_MODULE_6__["BlackjackPage"]]
    })], BlackjackPageModule);
    /***/
  },

  /***/
  "./src/app/blackjack/blackjack.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/blackjack/blackjack.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlackjackBlackjackPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-grid {\n  border: 1px solid #aeb7ca;\n  border-radius: 10px;\n  background-color: #eb445a;\n}\n\n.borderDiv {\n  border: 1px solid #aeb7ca;\n  border-radius: 10px;\n  background-color: #3880ff;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.separator::before, .separator::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid #000;\n}\n\n.separator::before {\n  margin-right: 0.25em;\n}\n\n.separator::after {\n  margin-left: 0.25em;\n}\n\nimg {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxhY2tqYWNrL0M6XFxVc2Vyc1xcVGJ1cmdlclxcVmlzdWFsU3R1ZGlvUHJvamVjdHNcXEJsYWNrSmFja1dpbm5pbmdIZWxwZXIvc3JjXFxhcHBcXGJsYWNramFja1xcYmxhY2tqYWNrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmxhY2tqYWNrL2JsYWNramFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QURBQTtFQUNFLFlBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2JsYWNramFjay9ibGFja2phY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1ncmlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZWI3Y2E7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNDQ1YTtcclxuICB9XHJcbiAgXHJcbi5ib3JkZXJEaXYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWI3Y2E7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gIFxyXG59XHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZXBhcmF0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlcGFyYXRvcjo6YmVmb3JlLCAuc2VwYXJhdG9yOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4uc2VwYXJhdG9yOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcclxufVxyXG4uc2VwYXJhdG9yOjphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1ZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNDQ1YTtcbn1cblxuLmJvcmRlckRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWI3Y2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VwYXJhdG9yOjpiZWZvcmUsIC5zZXBhcmF0b3I6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5zZXBhcmF0b3I6OmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xufVxuXG4uc2VwYXJhdG9yOjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1ZW07XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blackjack/blackjack.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/blackjack/blackjack.page.ts ***!
    \*********************************************/

  /*! exports provided: BlackjackPage */

  /***/
  function srcAppBlackjackBlackjackPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlackjackPage", function () {
      return BlackjackPage;
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


    var _TwoCardCalculator_Johnslots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./TwoCardCalculator_Johnslots */
    "./src/app/blackjack/TwoCardCalculator_Johnslots.ts");
    /* harmony import */


    var _TwoCardCalculator_Blackjackstrategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./TwoCardCalculator_Blackjackstrategy */
    "./src/app/blackjack/TwoCardCalculator_Blackjackstrategy.ts");
    /* harmony import */


    var _MoreCardCalculator_Johnslots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./MoreCardCalculator_Johnslots */
    "./src/app/blackjack/MoreCardCalculator_Johnslots.ts");
    /* harmony import */


    var _MoreCardCalculator_Blackjackstrategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./MoreCardCalculator_Blackjackstrategy */
    "./src/app/blackjack/MoreCardCalculator_Blackjackstrategy.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Helper */
    "./src/app/blackjack/Helper.ts");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/loader.service */
    "./src/app/services/loader.service.ts");

    var BlackjackPage = /*#__PURE__*/function () {
      function BlackjackPage(doc, toastController, storage, ionLoader) {
        _classCallCheck(this, BlackjackPage);

        this.doc = doc;
        this.toastController = toastController;
        this.storage = storage;
        this.ionLoader = ionLoader;
        this.disabled = true;
        this.indexOfCards = 0;
        this.card1 = '';
        this.card2 = '';
        this.card3 = '';
        this.card4 = '';
        this.card5 = '';
        this.dealerCard = ''; //properties

        this.strategy = 0;
        this.backside = 'blue';
        this.suits = 'hearts';
        this.loader = true;
        this.autocalc = false;
      }

      _createClass(BlackjackPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.showLoader();
          this.storage.get('backside').then(function (res) {
            _this.backside = res;
          });
          this.storage.get('suits').then(function (res) {
            _this.suits = res;
          });
          this.storage.get('strategy').then(function (res) {
            _this.strategy = res;
          });
          this.storage.get('autocalc').then(function (res) {
            _this.autocalc = res;
          });
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          var _this2 = this;

          this.ionLoader.showLoader();
          setTimeout(function () {
            _this2.ionLoader.hideLoader();

            _this2.loader = false;
          }, 750);
        }
      }, {
        key: "clickCard",
        value: function clickCard(card, cardElement) {
          var src = "";

          if (cardElement.target.src) {
            src = cardElement.target.src;
          } else {
            src = cardElement.srcElement.children[0].src;
          }

          if (this.indexOfCards == 0) {
            this.card1 = card;
            this.yc1img.src = src;
            this.changeColors(this.yc1, this.yc2);
          } else if (this.indexOfCards == 1) {
            this.card2 = card;
            this.yc2img.src = src;
            this.changeColors(this.yc2, this.dc1);
          } else if (this.indexOfCards == 2) {
            this.dealerCard = card;
            this.dc1img.src = src;
            this.changeColors(this.dc1, this.yc3);
          } else if (this.indexOfCards == 3) {
            this.card3 = card;
            this.yc3img.src = src;
            this.changeColors(this.yc3, this.yc4);
          } else if (this.indexOfCards == 4) {
            this.card4 = card;
            this.yc4img.src = src;
            this.changeColors(this.yc4, this.yc5);
          } else if (this.indexOfCards == 5) {
            this.card5 = card;
            this.yc5img.src = src;
            this.yc5.classList.remove('ion-color-primary');
            this.yc5.classList.add('ion-color-warning');
          } else {
            this.tooManyCards();
          }

          this.indexOfCards++;

          if (this.indexOfCards > 2) {
            if (this.autocalc) {
              this.calculate();
            } else {
              this.disabled = false;
            }
          }
        }
      }, {
        key: "changeColors",
        value: function changeColors(actualCard, nextCard) {
          actualCard.classList.remove('ion-color-success');
          actualCard.classList.add('ion-color-warning');
          nextCard.classList.remove('ion-color-dark');
          nextCard.classList.add('ion-color-success');
        }
      }, {
        key: "calculate",
        value: function calculate() {
          var action = "";

          if (this.indexOfCards == 3) {
            if (this.strategy == 1) {
              //Johnslots
              action = _TwoCardCalculator_Johnslots__WEBPACK_IMPORTED_MODULE_3__["TwoCardCalculator_Johnslots"].calculate(this.dealerCard, this.card1, this.card2);
            } else if (this.strategy == 2) {
              //BlackJackStrategy
              action = _TwoCardCalculator_Blackjackstrategy__WEBPACK_IMPORTED_MODULE_4__["TwoCardCalculator_Blackjackstrategy"].calculate(this.dealerCard, this.card1, this.card2);
            } else {
              // no impl
              action = 'no impl of strategy' + this.strategy;
            }
          } else if (this.indexOfCards >= 4) {
            if (this.strategy == 1) {
              //Johnslots
              action = _MoreCardCalculator_Johnslots__WEBPACK_IMPORTED_MODULE_5__["MoreCardCalculator_Johnslots"].calculate(this.dealerCard, this.card1, this.card2, this.card3, this.card4, this.card5);
            } else if (this.strategy == 2) {
              //BlackJackStrategy
              action = _MoreCardCalculator_Blackjackstrategy__WEBPACK_IMPORTED_MODULE_6__["MoreCardCalculator_Blackjackstrategy"].calculate(this.dealerCard, this.card1, this.card2, this.card3, this.card4, this.card5);
            } else {
              // no impl
              action = 'no impl of strategy' + this.strategy;
            }
          }

          if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].H) {
            this.ysimg.src = 'assets/img/hit.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].S) {
            this.ysimg.src = 'assets/img/stand.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].B) {
            this.ysimg.src = 'assets/img/blackjack.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].P) {
            this.ysimg.src = 'assets/img/split.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].DD) {
            this.ysimg.src = 'assets/img/doubledown.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].HP) {
            this.ysimg.src = 'assets/img/splitanddouble.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].HR) {
            this.ysimg.src = 'assets/img/surrender.png';
          } else if (action == _Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].SORRY) {
            this.ysimg.src = 'assets/img/sorry.png';
          }

          this.action.innerText = action;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.indexOfCards = 0;
          this.disabled = true;
          this.resetCards();
          this.resetColors();
          this.action.innerText = '-';
        }
      }, {
        key: "resetCards",
        value: function resetCards() {
          this.dealerCard = '';
          this.card1 = '';
          this.card2 = '';
          this.card3 = '';
          this.card4 = '';
          this.card5 = '';
          this.yc1img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.yc2img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.yc3img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.yc4img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.yc5img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.dc1img.src = 'assets/img/cards/backside-' + this.backside + '.png';
          this.ysimg.src = 'assets/img/placeholder.png';
        }
      }, {
        key: "resetColors",
        value: function resetColors() {
          this.yc1.classList.remove('ion-color-warning');
          this.yc1.classList.add('ion-color-success');
          this.yc2.classList.remove('ion-color-warning');
          this.yc2.classList.remove('ion-color-success');
          this.yc2.classList.add('ion-color-primary');
          this.yc3.classList.remove('ion-color-warning');
          this.yc3.classList.remove('ion-color-success');
          this.yc3.classList.add('ion-color-primary');
          this.yc4.classList.remove('ion-color-warning');
          this.yc4.classList.remove('ion-color-success');
          this.yc4.classList.add('ion-color-primary');
          this.yc5.classList.remove('ion-color-warning');
          this.yc5.classList.remove('ion-color-success');
          this.yc5.classList.add('ion-color-primary');
          this.dc1.classList.remove('ion-color-warning');
          this.dc1.classList.remove('ion-color-success');
          this.dc1.classList.add('ion-color-primary');
        }
      }, {
        key: "falseCard",
        value: function falseCard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.indexOfCards > 5)) {
                      _context.next = 4;
                      break;
                    }

                    this.tooManyCards();
                    _context.next = 9;
                    break;

                  case 4:
                    message = 'select the cards from the Card Selection';
                    _context.next = 7;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 7:
                    toast = _context.sent;
                    toast.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "tooManyCards",
        value: function tooManyCards() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    message = 'all cards selected please reset for next game';
                    _context2.next = 3;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 3:
                    toast = _context2.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "yc1",
        get: function get() {
          return this.doc.getElementById("yc1");
        }
      }, {
        key: "yc1img",
        get: function get() {
          return this.doc.getElementById("yc1img");
        }
      }, {
        key: "yc2",
        get: function get() {
          return this.doc.getElementById("yc2");
        }
      }, {
        key: "yc2img",
        get: function get() {
          return this.doc.getElementById("yc2img");
        }
      }, {
        key: "yc3",
        get: function get() {
          return this.doc.getElementById("yc3");
        }
      }, {
        key: "yc3img",
        get: function get() {
          return this.doc.getElementById("yc3img");
        }
      }, {
        key: "yc4",
        get: function get() {
          return this.doc.getElementById("yc4");
        }
      }, {
        key: "yc4img",
        get: function get() {
          return this.doc.getElementById("yc4img");
        }
      }, {
        key: "yc5",
        get: function get() {
          return this.doc.getElementById("yc5");
        }
      }, {
        key: "yc5img",
        get: function get() {
          return this.doc.getElementById("yc5img");
        }
      }, {
        key: "dc1",
        get: function get() {
          return this.doc.getElementById("dc1");
        }
      }, {
        key: "dc1img",
        get: function get() {
          return this.doc.getElementById("dc1img");
        }
      }, {
        key: "action",
        get: function get() {
          return this.doc.getElementById("action");
        }
      }, {
        key: "ys",
        get: function get() {
          return this.doc.getElementById("ys");
        }
      }, {
        key: "ysimg",
        get: function get() {
          return this.doc.getElementById("ysimg");
        }
      }]);

      return BlackjackPage;
    }();

    BlackjackPage.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]
      }];
    };

    BlackjackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blackjack',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blackjack.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blackjack/blackjack.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blackjack.page.scss */
      "./src/app/blackjack/blackjack.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], BlackjackPage);
    /***/
  },

  /***/
  "./src/app/services/loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loader.service.ts ***!
    \********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LoaderService = /*#__PURE__*/function () {
      function LoaderService(loadingController) {
        _classCallCheck(this, LoaderService);

        this.loadingController = loadingController;
      } // This will show then autohide the loader


      _createClass(LoaderService, [{
        key: "showHideAutoLoader",
        value: function showHideAutoLoader() {
          this.loadingController.create({
            message: 'Preparing...',
            duration: 2000
          }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {});
          });
        } // Show the loader for infinite time

      }, {
        key: "showLoader",
        value: function showLoader() {
          this.loadingController.create({
            message: 'Preparing...'
          }).then(function (res) {
            res.present();
          });
        } // Hide the loader if already created otherwise return error

      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.loadingController.dismiss().then(function (res) {})["catch"](function (error) {
            console.log('error', error);
          });
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  }
}]);
//# sourceMappingURL=blackjack-blackjack-module-es5.js.map