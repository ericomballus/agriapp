(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-add-activie-modal-add-activie-modal-module~pages-created-activitie-created-activitie-module"],{

/***/ "1TVE":
/*!*********************************************************************!*\
  !*** ./src/app/modal/add-activie-modal/add-activie-modal.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL2FkZC1hY3RpdmllLW1vZGFsL2FkZC1hY3RpdmllLW1vZGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "S8bl":
/*!****************************************************!*\
  !*** ./src/app/services/activities-api.service.ts ***!
  \****************************************************/
/*! exports provided: ActivitiesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesApiService", function() { return ActivitiesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "Jgta");





let ActivitiesApiService = class ActivitiesApiService {
    constructor(http, database) {
        this.http = http;
        this.database = database;
        this.url = "http://localhost:3000/";
        let ref = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref("agriActivities");
        let a = ref
            .onDisconnect()
            .cancel()
            .then((res) => {
            console.log("we are offline!!");
        });
    }
    postActivitie(data) {
        data["firebaseAdd"] = false;
        return this.http.post(this.url + `activities`, data);
    }
    upadteActivitieFirebaseStatus(data) {
        // data["firebaseAdd"] = false;
        return this.http.patch(this.url + `activities/firebaseAdd`, data);
    }
    postActivitieToFirebase(activitie) {
        console.log(activitie);
        return new Promise((resolve, reject) => {
            let database = this.database.list("agriActivities");
            database
                .push(activitie)
                .then((b) => {
                resolve(b);
            })
                .catch((error) => {
                reject(JSON.stringify(error));
            });
        });
    }
    getLastTenActivitie() {
        return this.http.get(this.url + `activities`);
    }
};
ActivitiesApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
ActivitiesApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ActivitiesApiService);



/***/ }),

/***/ "oOOt":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/add-activie-modal/add-activie-modal.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"dismiss()\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\" size-sm=\"12\" size-xl=\"12\">\n        <div class=\"cole\">\n          <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n            <div class=\"first\">\n              <div class=\"divint\">\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Nom</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le nom de l'activité ici\"\n                    formControlName=\"name\"\n                    type=\"text\"\n                  ></ion-input>\n                </ion-item>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.required\"\n                >\n                  Name is required.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\"\n                >\n                  Name should be min 2 chars long.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.maxLength\"\n                >\n                  Name not should be max 20 chars long.\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">executant</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer l'information ici\"\n                    formControlName=\"executant\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.executant.errors?.minlength\"\n                >\n                  Please provide valid executant .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.executant.errors?.maxLength\"\n                >\n                  Please provide valid executant .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.executant.errors?.required\"\n                >\n                  Entrer le executant.\n                </span>\n              </div>\n\n              <div class=\"divint\">\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Superficie</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer la superficie ici\"\n                    formControlName=\"superficie\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.superficie.errors?.minlength\"\n                >\n                  Please provide valid superficie .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.superficie.errors?.maxLength\"\n                >\n                  Please provide valid superficie .\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Main d'oeuvre</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le cout de la main d'oeuvre ici\"\n                    formControlName=\"coutmaindoeuvre\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutmaindoeuvre.errors?.minlength\"\n                >\n                  Please provide valid price .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutmaindoeuvre.errors?.maxLength\"\n                >\n                  Please provide valid price .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutmaindoeuvre.errors?.required\"\n                >\n                  Entrer le cout de la main d'oeuvre.\n                </span>\n              </div>\n            </div>\n\n            <div class=\"second\">\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Fréquence</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer la fréquence ici\"\n                    formControlName=\"frequence\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.frequence.errors?.minlength\"\n                >\n                  Please provide valid frequence .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.frequence.errors?.maxLength\"\n                >\n                  Please provide valid frequence .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.frequence.errors?.required\"\n                >\n                  Entrer le frequence.\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">periode</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer la période ici\"\n                    formControlName=\"periode\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.periode.errors?.minlength\"\n                >\n                  Please provide valid periode .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.periode.errors?.maxLength\"\n                >\n                  Please provide valid periode .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.periode.errors?.required\"\n                >\n                  Entrer la periode.\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">besoin materiel</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le besoin ici\"\n                    formControlName=\"besoinMateriel\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.besoinMateriel.errors?.minlength\"\n                >\n                  Please provide valid materiel .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.besoinMateriel.errors?.maxLength\"\n                >\n                  Please provide valid besoin materiel .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.besoinMateriel.errors?.required\"\n                >\n                  Entrer le besoin materiel.\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">cout materiel</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le cout ici\"\n                    formControlName=\"coutMateriel\"\n                    type=\"texte\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutMateriel.errors?.minlength\"\n                >\n                  Please provide valid cout materiel .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutMateriel.errors?.maxLength\"\n                >\n                  Please provide valid cout materiel .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.coutMateriel.errors?.required\"\n                >\n                  Entrer le cout materiel.\n                </span>\n              </div>\n            </div>\n\n            <div class=\"third\">\n              <div class=\"divint\">\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Description</ion-label>\n                  <ion-textarea\n                    placeholder=\"faite une description ici\"\n                    formControlName=\"description\"\n                    type=\"text\"\n                  ></ion-textarea>\n                </ion-item>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.description.errors?.required\"\n                >\n                  description is required.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.description.errors?.minlength\"\n                >\n                  Name should be min 5 chars long.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.description.errors?.maxLength\"\n                >\n                  Name not should be max 1000 chars long.\n                </span>\n              </div>\n            </div>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-center\">\n                  <ion-button type=\"submit\" color=\"danger\" size=\"small\"\n                    >Submit</ion-button\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "wvRO":
/*!*******************************************************************!*\
  !*** ./src/app/modal/add-activie-modal/add-activie-modal.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddActivieModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActivieModalPage", function() { return AddActivieModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_activie_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-activie-modal.page.html */ "oOOt");
/* harmony import */ var _add_activie_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-activie-modal.page.scss */ "1TVE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_activities_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/activities-api.service */ "S8bl");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let AddActivieModalPage = class AddActivieModalPage {
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
                this.activitiService
                    .postActivitieToFirebase(result["activitie"])
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
                });
            }, (err) => {
                console.log(err);
            });
        }
    }
    getActivities() {
        this.activitiService.getLastTenActivitie().subscribe((data) => {
            console.log(data);
            this.activitiesTab = data;
            // this.activitiesTab = this.activitiesTab.reverse();
        });
    }
    updateActivitiesStatus(data) {
        this.activitiService
            .upadteActivitieFirebaseStatus(data)
            .subscribe((data) => {
            console.log(data);
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
};
AddActivieModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_activities_api_service__WEBPACK_IMPORTED_MODULE_5__["ActivitiesApiService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
AddActivieModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-add-activie-modal",
        template: _raw_loader_add_activie_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_activie_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddActivieModalPage);



/***/ })

}]);
//# sourceMappingURL=default~modal-add-activie-modal-add-activie-modal-module~pages-created-activitie-created-activitie-module-es2015.js.map