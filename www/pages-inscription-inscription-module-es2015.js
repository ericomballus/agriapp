(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inscription-inscription-module"],{

/***/ "4Smk":
/*!*********************************************************!*\
  !*** ./src/app/pages/inscription/inscription.module.ts ***!
  \*********************************************************/
/*! exports provided: InscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function() { return InscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inscription-routing.module */ "Gmid");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscription.page */ "4hXF");







let InscriptionPageModule = class InscriptionPageModule {
};
InscriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["InscriptionPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]],
    })
], InscriptionPageModule);



/***/ }),

/***/ "4hXF":
/*!*******************************************************!*\
  !*** ./src/app/pages/inscription/inscription.page.ts ***!
  \*******************************************************/
/*! exports provided: InscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPage", function() { return InscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inscription_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inscription.page.html */ "xfQF");
/* harmony import */ var _inscription_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inscription.page.scss */ "qDPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");








let InscriptionPage = class InscriptionPage {
    // tslint:disable-next-line:max-line-length
    constructor(auth, toastController, formBuilder, router) {
        this.auth = auth;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.initInscriptionForm();
    }
    initInscriptionForm() {
        this.inscriptionForm = this.formBuilder.group({
            login: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            passe: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            confirmation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    onInscriptionFormSubmit() {
        console.log("inscription");
        const value = this.inscriptionForm.value;
        console.log(value);
        const login = value.login;
        const passe = value.passe;
        const confirmation = value.confirmation;
        if (passe === confirmation) {
            this.auth
                .inscription(login, passe)
                .then(() => {
                this.router.navigate(["profil"]);
            })
                .catch((e) => {
                if (e.code === "auth/email-already-in-use") {
                    this.notifier("Cet email est déjà utilisé");
                }
                else {
                    this.notifier("Une erreur est survenue");
                }
            });
        }
        else {
            this.notifier("Les mots de passe doivent être identiques");
        }
    }
    notifier(texte) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texte,
                duration: 5000,
                animated: true,
                position: "top",
            });
            toast.present();
        });
    }
    inscriptionGoogle() {
        this.router.navigate(["accueil"]);
    }
};
InscriptionPage.ctorParameters = () => [
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InscriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inscription",
        template: _raw_loader_inscription_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inscription_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InscriptionPage);



/***/ }),

/***/ "Gmid":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inscription/inscription-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageRoutingModule", function() { return InscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscription.page */ "4hXF");




const routes = [
    {
        path: '',
        component: _inscription_page__WEBPACK_IMPORTED_MODULE_3__["InscriptionPage"]
    }
];
let InscriptionPageRoutingModule = class InscriptionPageRoutingModule {
};
InscriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InscriptionPageRoutingModule);



/***/ }),

/***/ "qDPS":
/*!*********************************************************!*\
  !*** ./src/app/pages/inscription/inscription.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.header-md:after {\n  background: none;\n}\n\n.muanza-row {\n  white-space: nowrap;\n  margin-right: 0px;\n  overflow-x: hidden;\n}\n\n.icone,\n.champ {\n  display: inline-block;\n}\n\n.icone {\n  color: #aaa;\n  font-size: 2.5em;\n  padding-right: 10px;\n  padding-top: 20px;\n  vertical-align: middle;\n}\n\n.bg-primaire {\n  background: #5a3f37;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #2c7744, #5a3f37);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.image-arriere {\n  background-image: url('splash.png');\n  background-size: cover;\n  background-position: center center;\n  height: 105vh;\n  margin-top: -5vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 110vw;\n  margin-left: -5vw;\n  z-index: 0;\n}\n\n.filtre-noir {\n  background: linear-gradient(to bottom, rgba(17, 17, 17, 0.4), rgba(0, 0, 0, 0.95));\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.contenu {\n  padding: 20px;\n}\n\n.page {\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  color: white;\n  text-align: center;\n  padding: 20px;\n  background: linear-gradient(to bottom, rgba(17, 17, 17, 0.4), rgba(0, 0, 0, 0.95));\n  z-index: 155555;\n}\n\n.page button {\n  font-size: 0.95em;\n  font-weight: 100;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  color: white;\n  background: none;\n  border: 1px solid #0f9b0f;\n  border-radius: 20px;\n  color: white;\n  background: #0f9b0f;\n}\n\n.page button:disabled {\n  color: white;\n  background: none;\n  border: 1px solid #eee;\n}\n\n.page button:active {\n  color: white;\n  background: #063e06;\n}\n\n.page textarea,\n.page select,\n.page input,\n.page button {\n  outline: none;\n  border: 0px solid #fff;\n}\n\n.page input,\n.page select {\n  width: 100%;\n  font-size: 1.2em;\n  font-weight: 100;\n  color: white;\n  background: none !important;\n  border: 0px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 5px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n.page input:focus,\n.page select:focus {\n  color: white;\n  background: none !important;\n  border-bottom: 1px solid #0f9b0f;\n}\n\n.page * {\n  font-family: \"Ubuntu\";\n}\n\n.page .titre {\n  text-align: center;\n  margin-bottom: 40px;\n  font-size: 2.5em;\n  font-family: \"Ubuntu\";\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  padding-top: 2vh;\n}\n\n.page .titre .muanza-icone {\n  font-size: 1.2em;\n}\n\n.page .connexion {\n  margin-top: 5vh;\n  margin-bottom: 20px;\n  color: #444;\n}\n\n.page .infos-oubliees {\n  text-align: center;\n  margin-bottom: 20px;\n  color: #fafafa;\n}\n\n.page .inscription {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: #eee;\n  padding: 20px;\n  text-align: center;\n}\n\n.page .vague {\n  position: absolute;\n  display: none;\n  bottom: -3px;\n  left: 0;\n  width: 100%;\n  margin-top: 15px;\n}\n\nion-toolbar {\n  text-align: center;\n  font-family: \"Ubuntu\";\n}\n\n/* cyrillic-ext */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcg72j00.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n/* cyrillic */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKew72j00.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* greek-ext */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcw72j00.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF;\n}\n\n/* greek */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKfA72j00.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF;\n}\n\n/* latin-ext */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcQ72j00.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n\n@font-face {\n  font-family: \"Ubuntu\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Ubuntu Regular\"), local(\"Ubuntu-Regular\"), url(https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKfw72.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n.padding {\n  padding: 5% !important;\n}\n\n.logo ion-icon {\n  font-size: 9em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo img {\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  position: relative;\n  height: 150px;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-item {\n  --ion-background-color: transparent !important;\n}\n\n.flex {\n  display: flex;\n  position: relative;\n  right: 10px;\n}\n\n.my-label {\n  font-size: 9px;\n  color: black;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0UsZ0JBQUE7QUFMSjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBOztFQUVFLHFCQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHdEQUFBO0VBQ0EscUVBQUE7QUFSRjs7QUFXQTtFQUVFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBVkY7O0FBYUE7RUFDRSxrRkFBQTtFQUNBLHFFQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0ZBQUE7RUFDQSxlQUFBO0FBVkY7O0FBWUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFZSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBVk47O0FBYUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFYTjs7QUFlRTs7OztFQUlFLGFBQUE7RUFDQSxzQkFBQTtBQWJKOztBQWdCRTs7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQWtCSTs7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQWZOOztBQW1CRTtFQUNFLHFCQUFBO0FBakJKOztBQW9CRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBb0JJO0VBQ0UsZ0JBQUE7QUFsQk47O0FBc0JFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXJCSjs7QUF3QkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUE5S0YsYUFBQTtFQWdMRSxrQkFBQTtBQXRCSjs7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBeEJGOztBQTJCQSxpQkFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0pBQUE7RUFHQSxzRkFBQTtBQTFCRjs7QUE4QkEsYUFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0pBQUE7RUFHQSw0REFBQTtBQTlCRjs7QUFpQ0EsY0FBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0pBQUE7RUFHQSwwQkFBQTtBQWpDRjs7QUFvQ0EsVUFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0pBQUE7RUFHQSwwQkFBQTtBQXBDRjs7QUF1Q0EsY0FBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0pBQUE7RUFHQSxtSEFBQTtBQXZDRjs7QUEyQ0EsVUFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNklBQUE7RUFHQSx5S0FBQTtBQTNDRjs7QUFnREE7RUFDRSxzQkFBQTtBQTlDRjs7QUFpREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBOUNGOztBQWlEQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUE5Q0Y7O0FBa0RBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBL0NGOztBQWtEQTtFQUtFLDZCQUFBO0FBbkRGOztBQXNEQTtFQUNFLDhDQUFBO0FBbkRGOztBQXNEQTtFQUNFLGFBQUE7RUFHQSxrQkFBQTtFQUNBLFdBQUE7QUFyREY7O0FBd0RBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQXJERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtdWFuemEtcGFkZGluZygpIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vLyBFbmVsdmVyIGwnb21icmUgc3VyIGxlIGhlYWRlclxyXG5pb24taGVhZGVyIHtcclxuICAmLmhlYWRlci1tZDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuJHByaW1haXJlOiAjMGY5YjBmO1xyXG5cclxuLm11YW56YS1yb3cge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uaWNvbmUsXHJcbi5jaGFtcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaWNvbmUge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYmctcHJpbWFpcmUge1xyXG4gIGJhY2tncm91bmQ6ICM1YTNmMzc7XHJcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJjNzc0NCwgIzVhM2YzNyk7XHJcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmM3NzQ0LCAjNWEzZjM3KTtcclxuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuXHJcbi5pbWFnZS1hcnJpZXJlIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hc3F1ZS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NwbGFzaC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGhlaWdodDogMTA1dmg7XHJcbiAgbWFyZ2luLXRvcDogLTV2aDtcclxuICAvLyBmaWx0ZXI6IGJsdXIoMjVweCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMTB2dztcclxuICBtYXJnaW4tbGVmdDogLTV2dztcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZmlsdHJlLW5vaXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoIzExMSwgMC40KSwgcmdiYSgjMDAwLCAwLjk1KSk7XHJcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG59XHJcblxyXG4uY29udGVudSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgjMTExLCAwLjQpLCByZ2JhKCMwMDAsIDAuOTUpKTtcclxuICB6LWluZGV4OiAxNTU1NTU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBmOWIwZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGY5YjBmO1xyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMGY5YjBmLCAyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0LFxyXG4gIGlucHV0LFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGY5YjBmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIjtcclxuICB9XHJcblxyXG4gIC50aXRyZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcblxyXG4gICAgLm11YW56YS1pY29uZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29ubmV4aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICB9XHJcblxyXG4gIC5pbmZvcy1vdWJsaWVlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgfVxyXG5cclxuICAuaW5zY3JpcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBAaW5jbHVkZSBtdWFuemEtcGFkZGluZygpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZhZ3VlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3R0b206IC0zcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIjtcclxufVxyXG5cclxuLyogY3lyaWxsaWMtZXh0ICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBzcmM6IGxvY2FsKFwiVWJ1bnR1IFJlZ3VsYXJcIiksIGxvY2FsKFwiVWJ1bnR1LVJlZ3VsYXJcIiksXHJcbiAgICB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3VidW50dS92MTQvNGlDczZLVmpiTkJZbGdvS2NnNzJqMDAud29mZjIpXHJcbiAgICAgIGZvcm1hdChcIndvZmYyXCIpO1xyXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsXHJcbiAgICBVK0ZFMkUtRkUyRjtcclxufVxyXG5cclxuLyogY3lyaWxsaWMgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogbG9jYWwoXCJVYnVudHUgUmVndWxhclwiKSwgbG9jYWwoXCJVYnVudHUtUmVndWxhclwiKSxcclxuICAgIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdWJ1bnR1L3YxNC80aUNzNktWamJOQllsZ29LZXc3MmowMC53b2ZmMilcclxuICAgICAgZm9ybWF0KFwid29mZjJcIik7XHJcbiAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xyXG59XHJcblxyXG4vKiBncmVlay1leHQgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogbG9jYWwoXCJVYnVudHUgUmVndWxhclwiKSwgbG9jYWwoXCJVYnVudHUtUmVndWxhclwiKSxcclxuICAgIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdWJ1bnR1L3YxNC80aUNzNktWamJOQllsZ29LY3c3MmowMC53b2ZmMilcclxuICAgICAgZm9ybWF0KFwid29mZjJcIik7XHJcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XHJcbn1cclxuXHJcbi8qIGdyZWVrICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBzcmM6IGxvY2FsKFwiVWJ1bnR1IFJlZ3VsYXJcIiksIGxvY2FsKFwiVWJ1bnR1LVJlZ3VsYXJcIiksXHJcbiAgICB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3VidW50dS92MTQvNGlDczZLVmpiTkJZbGdvS2ZBNzJqMDAud29mZjIpXHJcbiAgICAgIGZvcm1hdChcIndvZmYyXCIpO1xyXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xyXG59XHJcblxyXG4vKiBsYXRpbi1leHQgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIHNyYzogbG9jYWwoXCJVYnVudHUgUmVndWxhclwiKSwgbG9jYWwoXCJVYnVudHUtUmVndWxhclwiKSxcclxuICAgIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdWJ1bnR1L3YxNC80aUNzNktWamJOQllsZ29LY1E3MmowMC53b2ZmMilcclxuICAgICAgZm9ybWF0KFwid29mZjJcIik7XHJcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbn1cclxuXHJcbi8qIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBzcmM6IGxvY2FsKFwiVWJ1bnR1IFJlZ3VsYXJcIiksIGxvY2FsKFwiVWJ1bnR1LVJlZ3VsYXJcIiksXHJcbiAgICB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3VidW50dS92MTQvNGlDczZLVmpiTkJZbGdvS2Z3NzIud29mZjIpXHJcbiAgICAgIGZvcm1hdChcIndvZmYyXCIpO1xyXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsXHJcbiAgICBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsXHJcbiAgICBVK0ZFRkYsIFUrRkZGRDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dvIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDllbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvL2JvcmRlci1yYWRpdXM6IDcwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM2ZGQ1ZmEsICMyOTgwYjkpO1xyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzQ4NTU2MywgIzI5MzIzYyk7XHJcbiAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2Y5ZmJmZCwgI2Y0ZjdmYSk7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDgwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5teS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "xfQF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inscription/inscription.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"image-arriere\"></div>\n  <div class=\"page\">\n    <div class=\"contenu\">\n      <div>\n        <h1>Ekang</h1>\n      </div>\n\n      <p style=\"text-align: center\">\n        Veuillez remplir les informations\n        <br />\n        ci-dessous !\n      </p>\n      <form\n        [formGroup]=\"inscriptionForm\"\n        (ngSubmit)=\"onInscriptionFormSubmit()\"\n      >\n        <input formControlName=\"login\" type=\"text\" placeholder=\"Email\" />\n        <input\n          formControlName=\"passe\"\n          type=\"password\"\n          placeholder=\"Mot de passe\"\n        />\n        <input\n          formControlName=\"confirmation\"\n          type=\"password\"\n          placeholder=\"Confirmation\"\n        />\n\n        <div class=\"connexion\">\n          <button [disabled]=\"inscriptionForm.invalid\" class=\"bg-primaire\">\n            Je m'inscris\n          </button>\n        </div>\n      </form>\n      <div class=\"infos-oubliees\">Conditions d'utilisation</div>\n\n      <div class=\"vague\">\n        <img src=\"../../../assets/splash.png\" style=\"width: 100%\" />\n      </div>\n      <div (click)=\"inscriptionGoogle()\" class=\"inscription\">\n        Inscrivez-vous grâce à votre compte\n        <br />\n        GOOGLE\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-inscription-inscription-module-es2015.js.map