(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employee-employee-module"], {
    /***/
    "2FAO":
    /*!***************************************************!*\
      !*** ./src/app/pages/employee/employee.module.ts ***!
      \***************************************************/

    /*! exports provided: EmployeePageModule */

    /***/
    function FAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function () {
        return EmployeePageModule;
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


      var _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-routing.module */
      "6Dv2");
      /* harmony import */


      var _employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee.page */
      "4BYF");

      var EmployeePageModule = function EmployeePageModule() {
        _classCallCheck(this, EmployeePageModule);
      };

      EmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_6__["EmployeePage"]]
      })], EmployeePageModule);
      /***/
    },

    /***/
    "4BYF":
    /*!*************************************************!*\
      !*** ./src/app/pages/employee/employee.page.ts ***!
      \*************************************************/

    /*! exports provided: EmployeePage */

    /***/
    function BYF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePage", function () {
        return EmployeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employee.page.html */
      "5n/d");
      /* harmony import */


      var _employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee.page.scss */
      "mq6l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _models_employe_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/employe.model */
      "fwz0");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/authentification.service */
      "izgN");

      var EmployeePage = /*#__PURE__*/function () {
        function EmployeePage(formBuilder, userService, toastController, database, auth //
        ) {
          _classCallCheck(this, EmployeePage);

          this.formBuilder = formBuilder;
          this.userService = userService;
          this.toastController = toastController;
          this.database = database;
          this.auth = auth;
          this.defaultDate = "1987-06-30";
          this.isSubmitted = false;
          this.userList = [];
          this.getEmployees();
        }

        _createClass(EmployeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]],
              poste: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
              //dob: [this.defaultDate],
              mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]+$")]]
            });
          }
        }, {
          key: "getDate",
          value: function getDate(e) {
            var date = new Date(e.target.value).toISOString().substring(0, 10);
            this.ionicForm.get("dob").setValue(date, {
              onlyself: true
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              console.log("Please provide all the required values!");
              return false;
            } else {
              console.log(this.ionicForm.value);
              var emp = this.ionicForm.value;
              var employe = new _models_employe_model__WEBPACK_IMPORTED_MODULE_5__["Employe"](emp.name, emp.poste, emp.email, emp.mobile);
              console.log(employe);
              this.auth.inscription(employe.email, "hellohello123").then(function (res) {
                console.log(res);

                _this.userService.addUserToFirebase(employe).then(function (data) {
                  _this.notifier("employé ajouté");
                });
              });
              this.ionicForm.value.name = "";
            }
          }
        }, {
          key: "getEmployees",
          value: function getEmployees() {
            var _this2 = this;

            this.database.list("agriUser").snapshotChanges(["child_added"]).subscribe(function (actions) {
              var tab = [];
              actions.forEach(function (action) {
                var a = action.payload.val();
                a["key"] = action.key;
                console.log(a);

                var index = _this2.userList.findIndex(function (elt) {
                  return elt.key === a["key"];
                });

                if (index >= 0) {
                  console.log("existe");
                } else {
                  tab.push(a);
                }
              });
              _this2.userList = tab;
              console.log(_this2.userList);
            });
          }
        }, {
          key: "notifier",
          value: function notifier(texte) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: texte,
                        duration: 5000,
                        animated: true,
                        position: "top"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeEmploye",
          value: function removeEmploye(user) {
            var _this3 = this;

            console.log(user);
            this.database.list("agriUser").remove(user.key).then(function (res) {
              _this3.getEmployees();
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return EmployeePage;
      }();

      EmployeePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]
        }, {
          type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_9__["AuthentificationService"]
        }];
      };

      EmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-employee",
        template: _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmployeePage);
      /***/
    },

    /***/
    "5n/d":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center ion-text-uppercase\">\n          <h3>ajouter un employé</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"12\"> </ion-col>\n      <ion-col size-xs=\"12\" size-md=\"6\" size-lg=\"6\" size-sm=\"12\">\n        <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n          </ion-item>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.name.errors?.required\"\n          >\n            Name is required.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\"\n          >\n            Name should be min 2 chars long.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.name.errors?.maxLength\"\n          >\n            Name not should be max 20 chars long.\n          </span>\n\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Poste</ion-label>\n            <ion-input formControlName=\"poste\" type=\"text\"></ion-input>\n          </ion-item>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.poste.errors?.required\"\n          >\n            Name is required.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.poste.errors?.minlength\"\n          >\n            Name should be min 2 chars long.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.poste.errors?.maxLength\"\n          >\n            Name not should be max 20 chars long.\n          </span>\n\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n          </ion-item>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.email.errors?.required\"\n          >\n            Email is required.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\"\n          >\n            Please provide valid email id.\n          </span>\n\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Mobile</ion-label>\n            <ion-input\n              maxlength=\"10\"\n              formControlName=\"mobile\"\n              type=\"text\"\n              required\n            ></ion-input>\n          </ion-item>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.mobile.errors?.required\"\n          >\n            Mobile number is required.\n          </span>\n          <span\n            class=\"error ion-padding\"\n            *ngIf=\"isSubmitted && errorControl.mobile.errors?.pattern\"\n          >\n            Only numerical values allowed.\n          </span>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"danger\" expand=\"block\"\n                >Submit</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"12\"> </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center ion-text-uppercase\">\n          <h3>liste employés</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"12\"> </ion-col>\n      <ion-col size-xs=\"12\" size-md=\"6\" size-lg=\"6\" size-sm=\"12\">\n        <ion-list>\n          <ion-item *ngFor=\"let user of userList\">\n            <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n            <ion-label>\n              <h2>{{user.name}}</h2>\n              <p>Email:{{user.email}}, Telephone: {{user.mobile}}</p>\n            </ion-label>\n            <ion-button fill=\"clear\" slot=\"end\" (click)=\"removeEmploye(user)\"\n              >delete\n              <ion-icon slot=\"end\" name=\"trash-bin-outline\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"12\"> </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "6Dv2":
    /*!***********************************************************!*\
      !*** ./src/app/pages/employee/employee-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: EmployeePageRoutingModule */

    /***/
    function Dv2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePageRoutingModule", function () {
        return EmployeePageRoutingModule;
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


      var _employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee.page */
      "4BYF");

      var routes = [{
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_3__["EmployeePage"]
      }];

      var EmployeePageRoutingModule = function EmployeePageRoutingModule() {
        _classCallCheck(this, EmployeePageRoutingModule);
      };

      EmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmployeePageRoutingModule);
      /***/
    },

    /***/
    "fwz0":
    /*!*****************************************!*\
      !*** ./src/app/models/employe.model.ts ***!
      \*****************************************/

    /*! exports provided: Employe */

    /***/
    function fwz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Employe", function () {
        return Employe;
      });

      var Employe = function Employe(name, poste, email, mobile) {
        _classCallCheck(this, Employe);

        this.salaire = 0;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.poste = poste; //  this.salaire = salaire;
      };
      /***/

    },

    /***/
    "mq6l":
    /*!***************************************************!*\
      !*** ./src/app/pages/employee/employee.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function mq6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlL2VtcGxveWVlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-employee-employee-module-es5.js.map