(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-instruction-instruction-module"], {
    /***/
    "kpVe":
    /*!*********************************************************!*\
      !*** ./src/app/modal/instruction/instruction.module.ts ***!
      \*********************************************************/

    /*! exports provided: InstructionPageModule */

    /***/
    function kpVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstructionPageModule", function () {
        return InstructionPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _instruction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./instruction-routing.module */
      "y3wQ");
      /* harmony import */


      var _instruction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./instruction.page */
      "E6OS");

      var InstructionPageModule = function InstructionPageModule() {
        _classCallCheck(this, InstructionPageModule);
      };

      InstructionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _instruction_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstructionPageRoutingModule"]],
        declarations: [_instruction_page__WEBPACK_IMPORTED_MODULE_6__["InstructionPage"]]
      })], InstructionPageModule);
      /***/
    },

    /***/
    "y3wQ":
    /*!*****************************************************************!*\
      !*** ./src/app/modal/instruction/instruction-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: InstructionPageRoutingModule */

    /***/
    function y3wQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstructionPageRoutingModule", function () {
        return InstructionPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _instruction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./instruction.page */
      "E6OS");

      var routes = [{
        path: '',
        component: _instruction_page__WEBPACK_IMPORTED_MODULE_3__["InstructionPage"]
      }];

      var InstructionPageRoutingModule = function InstructionPageRoutingModule() {
        _classCallCheck(this, InstructionPageRoutingModule);
      };

      InstructionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InstructionPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modal-instruction-instruction-module-es5.js.map