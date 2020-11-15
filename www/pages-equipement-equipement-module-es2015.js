(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipement-equipement-module"],{

/***/ "CEen":
/*!***************************************************************!*\
  !*** ./src/app/pages/equipement/equipement-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementPageRoutingModule", function() { return EquipementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _equipement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipement.page */ "jyYI");




const routes = [
    {
        path: '',
        component: _equipement_page__WEBPACK_IMPORTED_MODULE_3__["EquipementPage"]
    }
];
let EquipementPageRoutingModule = class EquipementPageRoutingModule {
};
EquipementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipementPageRoutingModule);



/***/ }),

/***/ "gilW":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipement/equipement.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementPageModule", function() { return EquipementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _equipement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipement-routing.module */ "CEen");
/* harmony import */ var _equipement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipement.page */ "jyYI");







let EquipementPageModule = class EquipementPageModule {
};
EquipementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _equipement_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipementPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_equipement_page__WEBPACK_IMPORTED_MODULE_6__["EquipementPage"]],
    })
], EquipementPageModule);



/***/ }),

/***/ "ibDG":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipement/equipement.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 20px 0;\n  font-size: 20px;\n  background-color: #f1f1f1;\n}\n\nion-label {\n  text-transform: uppercase;\n  font-size: 5px;\n}\n\nspan {\n  text-align: center;\n  background-color: #f56276;\n  text-transform: uppercase;\n  font-size: 10px;\n  display: block;\n}\n\nion-item {\n  font-size: 12px;\n}\n\nion-col div {\n  font-size: 10px;\n  text-transform: uppercase;\n}\n\nion-col .inte {\n  font-size: 10px;\n  text-transform: uppercase;\n}\n\n.data-lastrow {\n  background-color: #f1f1f1;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.header-row {\n  background-color: #263bf5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.first {\n  display: block;\n}\n\n.first {\n  display: flex;\n}\n\n.first div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin: 15px;\n}\n\n.second {\n  display: flex;\n}\n\n.second div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin: 15px;\n}\n\n.third {\n  display: flex;\n}\n\n.third div {\n  flex-grow: 1;\n  border: 1px solid #f1f1f1;\n  margin-top: 15px;\n  height: 200px;\n}\n\n.icone {\n  font-size: 30px;\n}\n\n.inte {\n  font-size: 15px;\n}\n\n.allIcone {\n  display: flex;\n}\n\n.allIcone div {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBlbWVudC9lcXVpcGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFNRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUhKOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFXQTtFQUNFLGNBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFhQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7QUFYRjs7QUFlQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFiRjs7QUFlQTtFQUNFLGFBQUE7QUFaRjs7QUFjQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVpGOztBQW1CQTtFQUNFLGVBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsZUFBQTtBQWZGOztBQWlCQTtFQUNFLGFBQUE7QUFkRjs7QUFnQkE7RUFFRSxZQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcXVpcGVtZW50L2VxdWlwZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDVweDtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCA5OCwgMTE4KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24taXRlbSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gIC5pbnRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtbGFzdHJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2M2JmNTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBpb24tY29sIHtcclxuICAgIGRpdiB7XHJcbiAgICAgIC8vIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZmlyc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59XHJcbi5maXJzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvL2ZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5maXJzdCBkaXYge1xyXG4gIC8vIHdpZHRoOiAyNSU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnNlY29uZCBkaXYge1xyXG4gIC8vIHdpZHRoOiAyNSU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi50aGlyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4udGhpcmQgZGl2IHtcclxuICAvLyB3aWR0aDogMjUlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5mb3JtLFxyXG4uZmllbGRzIHtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uaWNvbmUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uaW50ZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5hbGxJY29uZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWxsSWNvbmUgZGl2IHtcclxuICAvLyB3aWR0aDogMjUlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "jyYI":
/*!*****************************************************!*\
  !*** ./src/app/pages/equipement/equipement.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementPage", function() { return EquipementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_equipement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./equipement.page.html */ "zFxR");
/* harmony import */ var _equipement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipement.page.scss */ "ibDG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_materiel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/materiel.service */ "xF7u");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");







let EquipementPage = class EquipementPage {
    constructor(formBuilder, materielService, database) {
        this.formBuilder = formBuilder;
        this.materielService = materielService;
        this.database = database;
        // defaultDate = "1987-06-30";
        this.isSubmitted = false;
        this.getMateriel();
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            name: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                ],
            ],
            price: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                ],
            ],
            quantity: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000),
                ],
            ],
        });
    }
    submitForm() {
        this.isSubmitted = true;
        // console.log(this.ionicForm.value);
        if (!this.ionicForm.valid) {
            console.log("Please provide all the required values!");
            return false;
        }
        else {
            console.log(this.ionicForm.value);
            let emp = this.ionicForm.value;
            this.materielService.postMateriel(this.ionicForm.value).subscribe((result) => {
                console.log(result);
                this.materielListTab.unshift(result);
                this.isSubmitted = false;
                this.ionicForm.reset();
                // this.getActivities();
                this.materielService
                    .postMaterielToFirebase(result)
                    .then((res) => {
                    console.log(res);
                    this.updateMaterielStatus({
                        id: result["_id"],
                        status: true,
                    });
                })
                    .catch((err) => {
                    console.log(err);
                    this.updateMaterielStatus({
                        id: result["_id"],
                        status: false,
                    });
                });
            }, (err) => {
                console.log(err);
            });
        }
    }
    getMateriel() {
        this.materielService.getMateriel().subscribe((data) => {
            console.log(data);
            this.materielListTab = data;
            this.getEquipementFromFirebase();
        }, (err) => {
            this.getEquipementFromFirebase();
        });
    }
    updateMaterielStatus(data) {
        this.materielService
            .upadteMaterielFirebaseStatus(data)
            .subscribe((data) => {
            console.log(data);
        });
    }
    removeOne(row) {
        if (row.quantity > 0) {
            row.quantity = row.quantity - 1;
            this.materielService.upadteMateriel(row).subscribe((res) => {
                console.log(res);
            });
        }
    }
    addOne(row) {
        row.quantity = row.quantity + 1;
        this.materielService.upadteMateriel(row).subscribe((res) => {
            console.log(res);
        });
    }
    delete(row) {
        console.log(row);
        this.materielService.deleteMateriel(row).subscribe((res) => {
            console.log(res);
            this.materielListTab = this.materielListTab.filter((elt) => {
                return elt._id !== row._id;
            });
        });
    }
    getEquipementFromFirebase() {
        this.database
            //.list("agriActivities")
            .list("/agriMatriels", (ref) => ref.orderByChild("agriMatriels").limitToLast(20))
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
            /* if (this.activitiesTab.length) {
              tab.forEach((act) => {
                this.activitiesTab.forEach((elt) => {
                  if (elt._id == act._id) {
                    this.remplaceActivitie(act);
                  }
                });
              });
            } */
        });
    }
};
EquipementPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_materiel_service__WEBPACK_IMPORTED_MODULE_5__["MaterielService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
];
EquipementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-equipement",
        template: _raw_loader_equipement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equipement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EquipementPage);



/***/ }),

/***/ "xF7u":
/*!**********************************************!*\
  !*** ./src/app/services/materiel.service.ts ***!
  \**********************************************/
/*! exports provided: MaterielService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterielService", function() { return MaterielService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




let MaterielService = class MaterielService {
    constructor(http, database) {
        this.http = http;
        this.database = database;
        this.url = "http://localhost:3000/";
    }
    postMateriel(data) {
        data["firebaseAdd"] = false;
        return this.http.post(this.url + `materiel`, data);
    }
    upadteMaterielFirebaseStatus(data) {
        // data["firebaseAdd"] = false;
        return this.http.patch(this.url + `materiel/firebaseAdd`, data);
    }
    upadteMateriel(data) {
        // data["firebaseAdd"] = false;
        return this.http.patch(this.url + `materiel/`, data);
    }
    deleteMateriel(data) {
        // data["firebaseAdd"] = false;
        return this.http.delete(this.url + `materiel/firebaseAdd/${data._id}`);
    }
    postMaterielToFirebase(materiel) {
        return new Promise((resolve, reject) => {
            let database = this.database.list("agriMatriels");
            database
                .push(materiel)
                .then((b) => {
                resolve(b);
            })
                .catch((error) => {
                reject(JSON.stringify(error));
            });
        });
    }
    getMateriel() {
        return this.http.get(this.url + `materiel`);
    }
};
MaterielService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
MaterielService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], MaterielService);



/***/ }),

/***/ "zFxR":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipement/equipement.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"12\" size-lg=\"12\" size-xs=\"12\" size-sm=\"12\" size-xl=\"12\">\n        <div class=\"cole\">\n          <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n            <div class=\"first\">\n              <div class=\"divint\">\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">Nom matériel</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le nom ici\"\n                    formControlName=\"name\"\n                    type=\"text\"\n                  ></ion-input>\n                </ion-item>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.required\"\n                >\n                  Name is required.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\"\n                >\n                  Name should be min 2 chars long.\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.name.errors?.maxLength\"\n                >\n                  Name not should be max 20 chars long.\n                </span>\n              </div>\n\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">prix unitaire</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer le prix unitaire ici\"\n                    formControlName=\"price\"\n                    type=\"number\"\n                  ></ion-input>\n                </ion-item>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.price.errors?.minlength\"\n                >\n                  Please provide valid price .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.price.errors?.maxLength\"\n                >\n                  Please provide valid price .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.price.errors?.required\"\n                >\n                  Entrer le prix d'achat.\n                </span>\n              </div>\n              <div>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\">quantité disponible</ion-label>\n                  <ion-input\n                    placeholder=\"Entrer la quantité disponible ici\"\n                    formControlName=\"quantity\"\n                    type=\"number\"\n                  ></ion-input>\n                </ion-item>\n\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.quantity.errors?.minlength\"\n                >\n                  Please provide valid quantity .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.quantity.errors?.maxLength\"\n                >\n                  Please provide valid quantity .\n                </span>\n                <span\n                  class=\"error ion-padding\"\n                  *ngIf=\"isSubmitted && errorControl.quantity.errors?.required\"\n                >\n                  Entrer la quantité.\n                </span>\n              </div>\n              <div>\n                <ion-col>\n                  <div class=\"ion-text-center\">\n                    <ion-button type=\"submit\" color=\"danger\" size=\"small\"\n                      >Enregistrer</ion-button\n                    >\n                  </div>\n                </ion-col>\n              </div>\n            </div>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"ion-text-center ion-text-uppercase\">\n          <h3>liste matériels</h3>\n        </div>\n        <div>\n          <ion-row class=\"header-row\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">Nom</div>\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">\n                prix unitaire\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">quantité</div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">\n                Besoin matériel\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <div class=\"ion-text-center ion-text-uppercase\">\n                cout matériel\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row\n          *ngFor=\"let row of materielListTab; let i= index\"\n          class=\"data-row data-update\"\n          [ngStyle]=\"{'background-color': i % 2 == 0 ? '#f1f1f1' : 'white' }\"\n        >\n          <ion-col\n            size=\"2\"\n            class=\"ion-align-self-center\"\n            [ngStyle]=\"{'height': '30px' }\"\n          >\n            <div class=\"ion-text-center inte\">{{row.name}}</div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">\n              {{row.price | currency: \"FCFA\":\"symbol\":\"3.0-0\":\"fr\"}}\n            </div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">{{row.quantity}}</div>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">{{row.quantity}}</div>\n          </ion-col>\n\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\n            <div class=\"ion-text-center inte\">\n              {{row.quantity * row.price | currency:\n              \"FCFA\":\"symbol\":\"3.0-0\":\"fr\"}}\n            </div>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <div class=\"ion-text-center allIcone\">\n              <div>\n                <ion-button\n                  size=\"small\"\n                  fill=\"outline\"\n                  (click)=\"removeOne(row)\"\n                >\n                  <ion-icon\n                    class=\"icone\"\n                    name=\"remove-circle-outline\"\n                  ></ion-icon>\n                </ion-button>\n              </div>\n              <div>\n                <ion-button size=\"small\" fill=\"outline\" (click)=\"addOne(row)\">\n                  <ion-icon class=\"icone\" name=\"add-circle-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div>\n                <ion-button size=\"small\" fill=\"outline\" (click)=\"delete(row)\">\n                  <ion-icon class=\"icone\" name=\"trash\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-equipement-equipement-module-es2015.js.map