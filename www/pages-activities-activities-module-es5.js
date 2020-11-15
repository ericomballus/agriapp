(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activities-activities-module"], {
    /***/
    "+rdI":
    /*!*******************************************************!*\
      !*** ./src/app/pages/activities/activities.module.ts ***!
      \*******************************************************/

    /*! exports provided: ActivitiesPageModule */

    /***/
    function rdI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function () {
        return ActivitiesPageModule;
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


      var _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activities-routing.module */
      "v3gk");
      /* harmony import */


      var _activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activities.page */
      "hVi4");

      var ActivitiesPageModule = function ActivitiesPageModule() {
        _classCallCheck(this, ActivitiesPageModule);
      };

      ActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitiesPageRoutingModule"]],
        declarations: [_activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"]]
      })], ActivitiesPageModule);
      /***/
    },

    /***/
    "06pu":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activities/activities.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function pu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>activities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "EuA5":
    /*!*******************************************************!*\
      !*** ./src/app/pages/activities/activities.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function EuA5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "hVi4":
    /*!*****************************************************!*\
      !*** ./src/app/pages/activities/activities.page.ts ***!
      \*****************************************************/

    /*! exports provided: ActivitiesPage */

    /***/
    function hVi4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPage", function () {
        return ActivitiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activities.page.html */
      "06pu");
      /* harmony import */


      var _activities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activities.page.scss */
      "EuA5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ActivitiesPage = /*#__PURE__*/function () {
        function ActivitiesPage() {
          _classCallCheck(this, ActivitiesPage);
        }

        _createClass(ActivitiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ActivitiesPage;
      }();

      ActivitiesPage.ctorParameters = function () {
        return [];
      };

      ActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activities',
        template: _raw_loader_activities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ActivitiesPage);
      /***/
    },

    /***/
    "v3gk":
    /*!***************************************************************!*\
      !*** ./src/app/pages/activities/activities-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ActivitiesPageRoutingModule */

    /***/
    function v3gk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPageRoutingModule", function () {
        return ActivitiesPageRoutingModule;
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


      var _activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activities.page */
      "hVi4");

      var routes = [{
        path: '',
        component: _activities_page__WEBPACK_IMPORTED_MODULE_3__["ActivitiesPage"]
      }];

      var ActivitiesPageRoutingModule = function ActivitiesPageRoutingModule() {
        _classCallCheck(this, ActivitiesPageRoutingModule);
      };

      ActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivitiesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-activities-activities-module-es5.js.map