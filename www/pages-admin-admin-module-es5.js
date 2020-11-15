(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module"], {
    /***/
    "0zqc":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"dive\">\n    <ion-grid class=\"grid\">\n      <ion-row>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>employés</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/employee\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"person-add-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>équipements</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/equipement\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"construct-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>Inventaire</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/inventory\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"reader-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>activités</h3>\n\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              size=\"large\"\n              routerLink=\"/activities\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"film-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>salaire</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"save-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>statistiques</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"image-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>récoltes</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"trail-sign-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>a venir</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"trail-sign-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "4Bzd":
    /*!*********************************************!*\
      !*** ./src/app/pages/admin/admin.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Bzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dive {\n  position: absolute;\n  top: 25%;\n  left: 13%;\n  margin: -25px 0 0 -25px;\n  width: 80%;\n  height: 50%;\n}\n\n.round {\n  --width: 250px;\n  --height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBSUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbn1cclxuXHJcbi5kaXZlIHtcclxuICAvLyBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcclxuICAvL3dpZHRoOiA3MCU7XHJcbiAgLy8gYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjUlO1xyXG4gIGxlZnQ6IDEzJTtcclxuICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcclxuICAvLyBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnJvdW5kIHtcclxuICAtLXdpZHRoOiAyNTBweDtcclxuICAtLWhlaWdodDogMjUwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "GCp2":
    /*!*********************************************!*\
      !*** ./src/app/pages/admin/admin.module.ts ***!
      \*********************************************/

    /*! exports provided: AdminPageModule */

    /***/
    function GCp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageModule", function () {
        return AdminPageModule;
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


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-routing.module */
      "cG6H");
      /* harmony import */


      var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin.page */
      "rk6S");

      var AdminPageModule = function AdminPageModule() {
        _classCallCheck(this, AdminPageModule);
      };

      AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
      })], AdminPageModule);
      /***/
    },

    /***/
    "cG6H":
    /*!*****************************************************!*\
      !*** ./src/app/pages/admin/admin-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AdminPageRoutingModule */

    /***/
    function cG6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function () {
        return AdminPageRoutingModule;
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


      var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin.page */
      "rk6S");

      var routes = [{
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
      }];

      var AdminPageRoutingModule = function AdminPageRoutingModule() {
        _classCallCheck(this, AdminPageRoutingModule);
      };

      AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminPageRoutingModule);
      /***/
    },

    /***/
    "rk6S":
    /*!*******************************************!*\
      !*** ./src/app/pages/admin/admin.page.ts ***!
      \*******************************************/

    /*! exports provided: AdminPage */

    /***/
    function rk6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPage", function () {
        return AdminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.page.html */
      "0zqc");
      /* harmony import */


      var _admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.page.scss */
      "4Bzd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminPage = /*#__PURE__*/function () {
        function AdminPage() {
          _classCallCheck(this, AdminPage);
        }

        _createClass(AdminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminPage;
      }();

      AdminPage.ctorParameters = function () {
        return [];
      };

      AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-admin-module-es5.js.map