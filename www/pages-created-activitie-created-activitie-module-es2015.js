(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-created-activitie-created-activitie-module"],{

/***/ "4/l1":
/*!*********************************************************************!*\
  !*** ./src/app/pages/created-activitie/created-activitie.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreatedActivitiePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedActivitiePageModule", function() { return CreatedActivitiePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _created_activitie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./created-activitie-routing.module */ "FgHO");
/* harmony import */ var _created_activitie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./created-activitie.page */ "i8AY");







let CreatedActivitiePageModule = class CreatedActivitiePageModule {
};
CreatedActivitiePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _created_activitie_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatedActivitiePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_created_activitie_page__WEBPACK_IMPORTED_MODULE_6__["CreatedActivitiePage"]],
    })
], CreatedActivitiePageModule);



/***/ }),

/***/ "96Ms":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/created-activitie/created-activitie.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/home\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"createActivitie()\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center ion-text-uppercase\">\n          <h3>liste des activités</h3>\n        </div>\n        <div>\n          <ion-row class=\"header-row\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">Nom</div>\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">fréquence</div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">période</div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">\n                Besoin matériel\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">\n                cout matériel\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row\n          *ngFor=\"let row of activitiesTab; let i= index\"\n          class=\"data-row data-update\"\n          [ngStyle]=\"{'background-color': i % 2 == 0 ? '#f1f1f1' : 'white' }\"\n        >\n          <ion-col\n            size=\"2\"\n            class=\"ion-align-self-center\"\n            [ngStyle]=\"{'height': '30px' }\"\n          >\n            <div class=\"ion-text-center inte\">{{row.name}}</div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">{{row.coutmaindoeuvre}}</div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">{{row.frequence}}</div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">{{row.periode}}</div>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <div class=\"ion-text-center\">{{row.coutMateriel}}</div>\n          </ion-col>\n\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center\">\n              <ion-item button (click)=\"presentModal(row)\">\n                <ion-label>\n                  {{row.firebaseAdd? 'approuvé': 'non confirmé'}}\n                </ion-label>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "FgHO":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/created-activitie/created-activitie-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CreatedActivitiePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedActivitiePageRoutingModule", function() { return CreatedActivitiePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _created_activitie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./created-activitie.page */ "i8AY");




const routes = [
    {
        path: '',
        component: _created_activitie_page__WEBPACK_IMPORTED_MODULE_3__["CreatedActivitiePage"]
    }
];
let CreatedActivitiePageRoutingModule = class CreatedActivitiePageRoutingModule {
};
CreatedActivitiePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatedActivitiePageRoutingModule);



/***/ }),

/***/ "RKEY":
/*!*********************************************************************!*\
  !*** ./src/app/pages/created-activitie/created-activitie.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cole {\n  border-right: 1px solid #f1f1f1;\n}\n\n.center {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 20px 0;\n  font-size: 20px;\n  background-color: #f1f1f1;\n}\n\nion-label {\n  text-transform: uppercase;\n  font-size: 5px;\n}\n\nspan {\n  text-align: center;\n  background-color: #f56276;\n  text-transform: uppercase;\n  font-size: 10px;\n  display: block;\n}\n\nion-item {\n  font-size: 12px;\n}\n\nion-col div {\n  font-size: 10px;\n  text-transform: uppercase;\n}\n\nion-col .inte {\n  font-size: 10px;\n  text-transform: uppercase;\n}\n\n.data-lastrow {\n  background-color: #f1f1f1;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.header-row {\n  background-color: #263bf5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.first {\n  display: block;\n}\n\n.first {\n  display: flex;\n}\n\n.first div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin: 15px;\n}\n\n.second {\n  display: flex;\n}\n\n.second div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin: 15px;\n}\n\n.third {\n  display: flex;\n}\n\n.third div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin-top: 15px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlZC1hY3Rpdml0aWUvY3JlYXRlZC1hY3Rpdml0aWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFNRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUhKOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFXQTtFQUNFLGNBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFhQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7QUFYRjs7QUFlQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFiRjs7QUFlQTtFQUNFLGFBQUE7QUFaRjs7QUFjQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlZC1hY3Rpdml0aWUvY3JlYXRlZC1hY3Rpdml0aWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiA1cHg7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgOTgsIDExOCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5pb24tY29sIHtcclxuICBkaXYge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAuaW50ZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRhLWxhc3Ryb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjNiZjU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBkaXYge1xyXG4gICAgICAvLyBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZpcnN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG4uZmlyc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZmlyc3QgZGl2IHtcclxuICAvLyB3aWR0aDogMjUlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnNlY29uZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5zZWNvbmQgZGl2IHtcclxuICAvLyB3aWR0aDogMjUlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG4udGhpcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRoaXJkIGRpdiB7XHJcbiAgLy8gd2lkdGg6IDI1JTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuZm9ybSxcclxuLmZpZWxkcyB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "i8AY":
/*!*******************************************************************!*\
  !*** ./src/app/pages/created-activitie/created-activitie.page.ts ***!
  \*******************************************************************/
/*! exports provided: CreatedActivitiePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedActivitiePage", function() { return CreatedActivitiePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_created_activitie_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./created-activitie.page.html */ "96Ms");
/* harmony import */ var _created_activitie_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./created-activitie.page.scss */ "RKEY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_activities_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/activities-api.service */ "S8bl");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_instruction_instruction_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modal/instruction/instruction.page */ "E6OS");
/* harmony import */ var src_app_modal_add_activie_modal_add_activie_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modal/add-activie-modal/add-activie-modal.page */ "wvRO");











const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let CreatedActivitiePage = class CreatedActivitiePage {
    constructor(formBuilder, activitiService, database, modalController) {
        this.formBuilder = formBuilder;
        this.activitiService = activitiService;
        this.database = database;
        this.modalController = modalController;
        // defaultDate = "1987-06-30";
        this.isSubmitted = false;
        this.getStatus();
        this.getActivities();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ionicForm = this.formBuilder.group({
                name: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                    ],
                ],
                description: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                superficie: [
                    "",
                    [
                        // Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100),
                    ],
                ],
                // dob: [this.defaultDate],
                // mobile: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
                coutmaindoeuvre: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                frequence: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                periode: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                besoinMateriel: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                coutMateriel: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
                executant: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                    ],
                ],
            });
        });
    }
    getStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(status);
            console.log("hello status");
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log(status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
        });
    }
    ngOnDestroy() {
        this.networkListener.remove();
    }
    getDate(e) {
        let date = new Date(e.target.value).toISOString().substring(0, 10);
        this.ionicForm.get("dob").setValue(date, {
            onlyself: true,
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log("Please provide all the required values!");
            return false;
        }
        else {
            console.log(this.ionicForm.value);
            let emp = this.ionicForm.value;
            this.activitiService.postActivitie(this.ionicForm.value).subscribe((result) => {
                console.log(result["activitie"]);
                this.isSubmitted = false;
                this.ionicForm.reset();
                this.getActivities();
                /*  this.activitiService
                  .postActivitieToFirebase(result)
                  .then((res) => {
                    console.log(res);
                    this.updateActivitiesStatus({
                      id: result["activitie"]["_id"],
                      status: true,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    this.updateActivitiesStatus({
                      id: result["activitie"]["_id"],
                      status: false,
                    });
                  }); */
            }, (err) => {
                console.log(err);
            });
            /* let employe = new Employe(
              emp.name,
              emp.poste,
              emp.email,
              emp.dob,
              emp.mobile
            ); */
            // console.log(employe);
        }
    }
    getActivities() {
        this.activitiService.getLastTenActivitie().subscribe((data) => {
            console.log(data);
            this.activitiesTab = data;
            // this.activitiesTab = this.activitiesTab.reverse();
            this.getActivityFromFirebase();
        }, (err) => {
            this.getActivityFromFirebase();
        });
    }
    updateActivitiesStatus(data) {
        this.activitiService
            .upadteActivitieFirebaseStatus(data)
            .subscribe((data) => {
            console.log(data);
        });
    }
    presentModal(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(row);
            const modal = yield this.modalController.create({
                component: _modal_instruction_instruction_page__WEBPACK_IMPORTED_MODULE_9__["InstructionPage"],
                cssClass: "my-custom-class",
                componentProps: {
                    firstName: row,
                    lastName: "Adams",
                    middleInitial: "N",
                },
            });
            return yield modal.present();
        });
    }
    createActivitie() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modal_add_activie_modal_add_activie_modal_page__WEBPACK_IMPORTED_MODULE_10__["AddActivieModalPage"],
                cssClass: "my-custom-class",
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            this.getActivities();
        });
    }
    getActivityFromFirebase() {
        this.database
            //.list("agriActivities")
            .list("/agriActivities", (ref) => ref.orderByChild("agriActivities").limitToLast(20))
            .snapshotChanges()
            .subscribe((actions) => {
            console.log(actions);
            let tab = [];
            actions.forEach((action) => {
                let a = action.payload.val();
                a["key"] = action.key;
                console.log(a);
                tab.push(a);
            });
            if (this.activitiesTab.length) {
                tab.forEach((act) => {
                    this.activitiesTab.forEach((elt) => {
                        if (elt._id == act._id) {
                            this.remplaceActivitie(act);
                        }
                    });
                });
            }
        });
    }
    remplaceActivitie(act) {
        let index = this.activitiesTab.findIndex((elt) => {
            return elt._id == act._id;
        });
        if (index >= 0) {
            console.log("existe");
            this.activitiesTab.splice(index, 1, act);
        }
    }
};
CreatedActivitiePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_activities_api_service__WEBPACK_IMPORTED_MODULE_5__["ActivitiesApiService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
CreatedActivitiePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-created-activitie",
        template: _raw_loader_created_activitie_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_created_activitie_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatedActivitiePage);



/***/ })

}]);
//# sourceMappingURL=pages-created-activitie-created-activitie-module-es2015.js.map