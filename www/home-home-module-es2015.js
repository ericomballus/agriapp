(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"desktop\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar>\n      <ion-row class=\"ion-align-items-center\" *ngIf=\"isDesktop\">\n        <ion-col size=\"2\">\n          <img src=\"../assets/splash.png\" class=\"logo ion-text-left\" />\n        </ion-col>\n        <ion-col size=\"10\">\n          <div class=\"navbar\" class=\"left\">\n            <ion-button\n              fill=\"clear\"\n              routerLink=\"/tabs/tab1\"\n              routerDirection=\"root\"\n              routerLinkActive=\"active-link\"\n              class=\"link\"\n            >\n              Tab 1\n            </ion-button>\n            <ion-button\n              fill=\"clear\"\n              routerLink=\"/tabs/tab2\"\n              routerDirection=\"root\"\n              routerLinkActive=\"active-link\"\n              class=\"link\"\n            >\n              Tab 2\n            </ion-button>\n            <ion-button\n              fill=\"clear\"\n              routerLink=\"/tabs/tab3\"\n              routerDirection=\"root\"\n              routerLinkActive=\"active-link\"\n              class=\"link\"\n            >\n              Tab 3\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</div>\n<ion-content>\n  <div class=\"dive\">\n    <ion-grid class=\"grid\">\n      <ion-row>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>employés</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/employee\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"person-add-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>équipements</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/equipement\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"construct-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>Inventaire</h3>\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              routerLink=\"/inventory\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"reader-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>activités</h3>\n\n            <ion-button\n              class=\"round\"\n              fill=\"outline\"\n              size=\"large\"\n              size=\"large\"\n              routerLink=\"/created-activitie\"\n              routerDirection=\"forward\"\n            >\n              <ion-icon name=\"film-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>salaire</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"save-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>statistiques</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"image-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>récoltes</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"trail-sign-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"3\" size-sm=\"6\">\n          <div class=\"ion-text-center ion-text-uppercase\">\n            <h3>a venir</h3>\n            <ion-button class=\"round\" fill=\"outline\" size=\"large\">\n              <ion-icon name=\"trail-sign-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.dive {\n  position: absolute;\n  top: 25%;\n  left: 13%;\n  margin: -25px 0 0 -25px;\n  width: 80%;\n  height: 50%;\n}\n\n.round {\n  --width: 250px;\n  --height: 250px;\n}\n\n.desktop ion-router-outlet {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n\n.desktop .logo {\n  max-height: 40px;\n}\n\n.desktop ion-toolbar {\n  --background: #374168;\n}\n\n.desktop .link {\n  --color: var(--ion-color-light);\n}\n\n.desktop .active-link {\n  --color: var(--ion-color-primary);\n}\n\n.footer {\n  width: 100%;\n  color: #fff;\n  font-weight: bold;\n  background: #374168;\n  height: 56px;\n  line-height: 56px;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUlFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsZ0JBQUE7QUFQSjs7QUFVRTtFQUNFLHFCQUFBO0FBUko7O0FBV0U7RUFDRSwrQkFBQTtBQVRKOztBQVlFO0VBQ0UsaUNBQUE7QUFWSjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFYRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRpdmUge1xuICAvLyBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcbiAgLy93aWR0aDogNzAlO1xuICAvLyBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMTMlO1xuICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcbiAgLy8gbGVmdDogNTAlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLnJvdW5kIHtcbiAgLS13aWR0aDogMjUwcHg7XG4gIC0taGVpZ2h0OiAyNTBweDtcbn1cbi5kZXNrdG9wIHtcbiAgaW9uLXJvdXRlci1vdXRsZXQge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzM3NDE2ODtcbiAgfVxuXG4gIC5saW5rIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG5cbiAgLmFjdGl2ZS1saW5rIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMzNzQxNjg7XG4gIGhlaWdodDogNTZweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_screensize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/screensize.service */ "uIHg");





let HomePage = class HomePage {
    constructor(screensizeService) {
        this.screensizeService = screensizeService;
        this.screensizeService.isDesktopView().subscribe((isDesktop) => {
            console.log(isDesktop);
            if (this.isDesktop && !isDesktop) {
                // Reload because our routing is out of place
            }
            console.log(this.isDesktop);
            this.isDesktop = isDesktop;
        });
    }
    onResize(event) {
        this.screensizeService.onResize(event.target.innerWidth);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_screensize_service__WEBPACK_IMPORTED_MODULE_4__["ScreensizeService"] }
];
HomePage.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:resize", ["$event"],] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map