(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(3, 138, 248);\n}\n\n.contenthome {\n  margin-top: 50%;\n}\n\n.maeri {\n  position: absolute;\n  top: 10%;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  color: white;\n}\n\nion-button {\n  --border-radius: 25px;\n}\n\n.btnhome {\n  padding: 2%;\n}\n\n.m-1 {\n  margin: 1rem;\n}\n\n.my-1 {\n  margin: 1rem 0;\n}\n\n.p-1 {\n  padding: 1rem;\n}\n\n.py-1 {\n  padding: 1rem 0;\n}\n\n.m-2 {\n  margin: 2rem;\n}\n\n.my-2 {\n  margin: 2rem 0;\n}\n\n.p-2 {\n  padding: 2rem;\n}\n\n.py-2 {\n  padding: 2rem 0;\n}\n\n.m-3 {\n  margin: 3rem;\n}\n\n.my-3 {\n  margin: 3rem 0;\n}\n\n.p-3 {\n  padding: 3rem;\n}\n\n.py-3 {\n  padding: 3rem 0;\n}\n\n.m-4 {\n  margin: 4rem;\n}\n\n.my-4 {\n  margin: 4rem 0;\n}\n\n.p-4 {\n  padding: 4rem;\n}\n\n.py-4 {\n  padding: 4rem 0;\n}\n\n.m-5 {\n  margin: 5rem;\n}\n\n.my-5 {\n  margin: 5rem 0;\n}\n\n.p-5 {\n  padding: 5rem;\n}\n\n.py-5 {\n  padding: 5rem 0;\n}\n\n.container {\n  max-width: 1100px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 2rem;\n  margin-top: 6rem;\n  margin-bottom: 3rem;\n}\n\n.x-large {\n  font-size: 4rem;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n\n.large {\n  font-size: 3rem;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n\n.lead {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.text-primary {\n  color: #17a2b8;\n}\n\n.round-img {\n  border-radius: 50%;\n}\n\n.line {\n  height: 1px;\n  background: #ccc;\n  margin: 1.5rem 0;\n}\n\n.bg-primary {\n  background-color: #17a2b8;\n  color: #fff;\n}\n\n.bg-light {\n  background-color: #f4f4f4;\n  color: #333;\n  border: #ccc 1px solid;\n}\n\n.bg-dark {\n  background-color: #343a40;\n  color: #fff;\n}\n\n.bg-success {\n  background-color: #28a745;\n  color: #fff;\n}\n\n.bg-danger {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.bg-white {\n  background-color: #fff;\n  color: #333;\n  border: #ccc 1px solid;\n}\n\n.btn {\n  display: inline-block;\n  background: #f4f4f4;\n  color: #333;\n  padding: 0.4rem 1.3rem;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  margin-right: 0.5rem;\n  outline: none;\n  transition: all 0.2s ease-in;\n}\n\n.btn.btn-primary {\n  background-color: #17a2b8;\n  color: #fff;\n}\n\n.btn.btn-primary:hover {\n  background: #1ab6cf;\n}\n\n.btn.btn-dark {\n  background-color: #343a40;\n  color: #fff;\n}\n\n.btn.btn-dark:hover {\n  background: #3f474e;\n}\n\n.btn.btn-success {\n  background-color: #28a745;\n  color: #fff;\n}\n\n.btn.btn-success:hover {\n  background: #2dbc4e;\n}\n\n.btn.btn-danger {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.btn.btn-danger:hover {\n  background: #e04b59;\n}\n\n.btn:hover {\n  background: #626d78;\n  color: #fff;\n}\n\n.alert {\n  padding: 0.8rem;\n  margin: 1rem;\n  opacity: 0.9;\n  background: #f4f4f4;\n  color: #333;\n}\n\n.alert.alert-primary {\n  background-color: #17a2b8;\n  color: #fff;\n}\n\n.alert.alert-dark {\n  background-color: #343a40;\n  color: #fff;\n}\n\n.alert.alert-success {\n  background-color: #28a745;\n  color: #fff;\n}\n\n.alert.alert-danger {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.badge {\n  font-size: 0.8rem;\n  padding: 0.1rem;\n  text-align: center;\n  margin: 0.3rem;\n  background: #f4f4f4;\n  color: #333;\n}\n\n.badge.badge-primary {\n  background-color: #17a2b8;\n  color: #fff;\n}\n\n.badge.badge-dark {\n  background-color: #343a40;\n  color: #fff;\n}\n\n.badge.badge-success {\n  background-color: #28a745;\n  color: #fff;\n}\n\n.badge.badge-danger {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.dark-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.table th,\n.table td {\n  padding: 1rem;\n  text-align: left;\n}\n\n.table th {\n  background: #f4f4f4;\n}\n\n.form-group {\n  margin: 1.2rem 0;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.3rem;\n  color: #888;\n}\n\n.form input[type=text],\n.form input[type=email],\n.form input[type=password],\n.form input[type=date],\n.form select,\n.form textarea {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n\n.form input[type=submit] {\n  font: inherit;\n}\n\n.form .social-input {\n  display: flex;\n}\n\n.form .social-input i {\n  padding: 0.5rem;\n  width: 4rem;\n}\n\n.form .social-input i.fa-twitter {\n  color: #38a1f3;\n}\n\n.form .social-input i.fa-facebook {\n  color: #3b5998;\n}\n\n.form .social-input i.fa-instagram {\n  color: #3f729b;\n}\n\n.form .social-input i.fa-youtube {\n  color: #c4302b;\n}\n\n.form .social-input i.fa-linkedin {\n  color: #0077b5;\n}\n\n@media (max-width: 700px) {\n  .hide-sm {\n    display: none;\n  }\n\n  .container {\n    margin-top: 8rem;\n  }\n\n  .x-large {\n    font-size: 3rem;\n  }\n\n  .large {\n    font-size: 2rem;\n  }\n\n  .lead {\n    font-size: 1rem;\n  }\n\n  .navbar {\n    display: block;\n    text-align: center;\n  }\n  .navbar ul {\n    text-align: center;\n    justify-content: center;\n  }\n  .navbar h1 {\n    margin-bottom: 1rem;\n  }\n\n  .dash-buttons a {\n    display: block;\n    width: 100%;\n    margin-bottom: 0.2rem;\n  }\n\n  .profile {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile ul {\n    display: none;\n  }\n\n  .profile-grid {\n    grid-template-areas: \"top\" \"about\" \"exp\" \"edu\" \"github\";\n  }\n\n  .profile-about .skills {\n    flex-direction: column;\n  }\n\n  .post {\n    grid-template-columns: 1fr;\n  }\n  .post a,\n.post button {\n    padding: 0.3rem 0.4rem;\n  }\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #17a2b8;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  width: 100%;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.7rem 2rem;\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  top: 0;\n  border-bottom: solid 1px #17a2b8;\n  opacity: 0.9;\n}\n\n.navbar ul {\n  display: flex;\n}\n\n.navbar a {\n  color: #fff;\n  padding: 0.45rem;\n  margin: 0 0.25rem;\n}\n\n.navbar a:hover {\n  color: #17a2b8;\n}\n\n.landing {\n  position: relative;\n  background: url('splash.png') no-repeat center center/cover;\n  height: 100vh;\n}\n\n.landing-inner {\n  color: #fff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.profile {\n  display: grid;\n  grid-template-columns: 2fr 4fr 2fr;\n  grid-gap: 2rem;\n  align-items: center;\n  padding: 1rem;\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n\n.profile-grid {\n  display: grid;\n  grid-template-areas: \"top top\" \"about about\" \"exp edu\" \"github github\";\n  grid-gap: 1rem;\n}\n\n.profile-grid .profile-top {\n  grid-area: top;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.profile-grid .profile-top img {\n  width: 250px;\n}\n\n.profile-grid .profile-top .icons a {\n  color: #fff;\n  margin: 0 0.3rem;\n}\n\n.profile-grid .profile-top .icons a:hover {\n  color: #343a40;\n}\n\n.profile-grid .profile-about {\n  grid-area: about;\n  text-align: center;\n}\n\n.profile-grid .profile-about .skills {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.profile-grid .profile-exp {\n  grid-area: exp;\n}\n\n.profile-grid .profile-edu {\n  grid-area: edu;\n}\n\n.profile-grid .profile-exp > div,\n.profile-grid .profile-edu > div {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: #ccc 1px dotted;\n}\n\n.profile-grid .profile-exp:last-child,\n.profile-grid .profile-edu:last-child {\n  border: none;\n}\n\n.profile-grid .profile-exp p,\n.profile-grid .profile-edu p {\n  margin: 0.5rem 0;\n}\n\n.profile-grid .profile-github {\n  grid-area: github;\n}\n\n.profile-grid .profile-github .repo {\n  display: flex;\n}\n\n.profile-grid .profile-github .repo > div:first-child {\n  flex: 7;\n  flex-basis: 70%;\n}\n\n.profile-grid .profile-github .repo > div:last-child {\n  flex: 3;\n  flex-basis: 20%;\n}\n\n.post-form-header {\n  padding: 0.5rem;\n}\n\n.post {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-gap: 2rem;\n  align-items: center;\n}\n\n.post > div:first-child {\n  text-align: center;\n}\n\n.post img {\n  width: 150px;\n}\n\n@media (max-width: 700px) {\n  .hide-sm {\n    display: none;\n  }\n\n  .container {\n    margin-top: 8rem;\n  }\n\n  .x-large {\n    font-size: 3rem;\n  }\n\n  .large {\n    font-size: 2rem;\n  }\n\n  .lead {\n    font-size: 1rem;\n  }\n\n  .navbar {\n    display: block;\n    text-align: center;\n  }\n  .navbar ul {\n    text-align: center;\n    justify-content: center;\n  }\n  .navbar h1 {\n    margin-bottom: 1rem;\n  }\n\n  .dash-buttons a {\n    display: block;\n    width: 100%;\n    margin-bottom: 0.2rem;\n  }\n\n  .profile {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile ul {\n    display: none;\n  }\n\n  .profile-grid {\n    grid-template-areas: \"top\" \"about\" \"exp\" \"edu\" \"github\";\n  }\n\n  .profile-about .skills {\n    flex-direction: column;\n  }\n\n  .post {\n    grid-template-columns: 1fr;\n  }\n  .post a,\n.post button {\n    padding: 0.3rem 0.4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9fY29uZmlnLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL191dGlsaXRpZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vX2Zvcm0uc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vX21vYmlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBRUEsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUNJRTtFQUNFLFlBQUE7QURESjs7QUNLRTtFQUNFLGNBQUE7QURGSjs7QUNNRTtFQUNFLGFBQUE7QURISjs7QUNPRTtFQUNFLGVBQUE7QURKSjs7QUNaRTtFQUNFLFlBQUE7QURlSjs7QUNYRTtFQUNFLGNBQUE7QURjSjs7QUNWRTtFQUNFLGFBQUE7QURhSjs7QUNURTtFQUNFLGVBQUE7QURZSjs7QUM1QkU7RUFDRSxZQUFBO0FEK0JKOztBQzNCRTtFQUNFLGNBQUE7QUQ4Qko7O0FDMUJFO0VBQ0UsYUFBQTtBRDZCSjs7QUN6QkU7RUFDRSxlQUFBO0FENEJKOztBQzVDRTtFQUNFLFlBQUE7QUQrQ0o7O0FDM0NFO0VBQ0UsY0FBQTtBRDhDSjs7QUMxQ0U7RUFDRSxhQUFBO0FENkNKOztBQ3pDRTtFQUNFLGVBQUE7QUQ0Q0o7O0FDNURFO0VBQ0UsWUFBQTtBRCtESjs7QUMzREU7RUFDRSxjQUFBO0FEOERKOztBQzFERTtFQUNFLGFBQUE7QUQ2REo7O0FDekRFO0VBQ0UsZUFBQTtBRDRESjs7QUV0R0E7RUFDRSxpQkRHVTtFQ0ZWLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFB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aUJFO0lBQ0Usa0JBQUE7SUFDQSx1QkFBQTtFSm1pQko7RUloaUJFO0lBQ0UsbUJBQUE7RUpraUJKOztFSTloQkE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VKaWlCRjs7RUk3aEJBO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtFSmdpQkY7RUk5aEJFO0lBQ0UsYUFBQTtFSmdpQko7O0VJNWhCQTtJQUNFLHVEQUNFO0VKOGhCSjs7RUl0aEJFO0lBQ0Usc0JBQUE7RUp5aEJKOztFSXJoQkE7SUFDRSwwQkFBQTtFSndoQkY7RUl2aEJFOztJQUVFLHNCQUFBO0VKeWhCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8vIC0tYmFja2dyb3VuZDogcmdiKDEzNSwgMTM1LCAyNDgpO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDMsIDEzOCwgMjQ4KTtcclxufVxyXG5cclxuLmNvbnRlbnRob21lIHtcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5tYWVyaSB7XHJcbiAgLy8gbWFyZ2luLXRvcDogNDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL2xlZnQ6IDElO1xyXG4gIHRvcDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmJ0bmhvbWUge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL3NwbGFzaC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgL1xyXG4gIC8vICAgY292ZXI7XHJcbn1cclxuXHJcbi8vdnUgZGVza3RvcFxyXG5cclxuQGltcG9ydCBcImNvbmZpZ1wiO1xyXG5AaW1wb3J0IFwidXRpbGl0aWVzXCI7XHJcbkBpbXBvcnQgXCJmb3JtXCI7XHJcbkBpbXBvcnQgXCJtb2JpbGVcIjtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBOYXZiYXJcclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjdyZW0gMnJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRwcmltYXJ5LWNvbG9yO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuXHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjQ1cmVtO1xyXG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExhbmRpbmdcclxuLmxhbmRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3BsYXNoLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAmLWlubmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vLyBQcm9maWxlcyBQYWdlXHJcbi5wcm9maWxlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmciAyZnI7XHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLy8gUHJvZmlsZSBQYWdlXHJcbi5wcm9maWxlLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0b3AgdG9wXCIgXCJhYm91dCBhYm91dFwiIFwiZXhwIGVkdVwiIFwiZ2l0aHViIGdpdGh1YlwiO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5cclxuICAucHJvZmlsZS10b3Age1xyXG4gICAgZ3JpZC1hcmVhOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb25zIGEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwIDAuM3JlbTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtYWJvdXQge1xyXG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuc2tpbGxzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWV4cCB7XHJcbiAgICBncmlkLWFyZWE6IGV4cDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWVkdSB7XHJcbiAgICBncmlkLWFyZWE6IGVkdTtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWV4cCxcclxuICAucHJvZmlsZS1lZHUge1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAjY2NjIDFweCBkb3R0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtZ2l0aHViIHtcclxuICAgIGdyaWQtYXJlYTogZ2l0aHViO1xyXG5cclxuICAgIC5yZXBvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGZsZXg6IDc7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIGZsZXg6IDM7XHJcbiAgICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQb3N0cyBQYWdlXHJcbi5wb3N0LWZvcm0taGVhZGVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuICBncmlkLWdhcDogMnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW1wb3J0IFwibW9iaWxlXCI7XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcclxuICAvLyAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzE3YTJiODtcclxuJGRhcmstY29sb3I6ICMzNDNhNDA7XHJcbiRsaWdodC1jb2xvcjogI2Y0ZjRmNDtcclxuJGRhbmdlci1jb2xvcjogI2RjMzU0NTtcclxuJHN1Y2Nlc3MtY29sb3I6ICMyOGE3NDU7XHJcbiRtYXgtd2lkdGg6IDExMDBweDtcclxuXHJcbi8vIFNldCB0ZXh0IGNvbG9yIGJhc2VkIG9uIGJhY2tncm91bmRcclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA2MCkge1xyXG4gICAgQHJldHVybiAjMzMzO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2V0IGJhY2tncm91bmQgJiB0ZXh0IGNvbG9yXHJcbkBtaXhpbiBzZXQtYmFja2dyb3VuZCgkY29sb3IpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRjb2xvcik7XHJcbn1cclxuXHJcbi8vIE1hcmdpbiAmIFBhZGRpbmdcclxuJHNwYWNlYW1vdW50czogKDEsIDIsIDMsIDQsIDUpO1xyXG5cclxuQGVhY2ggJHNwYWNlIGluICRzcGFjZWFtb3VudHMge1xyXG4gIC8vIEFsbCBhcm91bmQgbWFyZ2luXHJcbiAgLm0tI3skc3BhY2V9IHtcclxuICAgIG1hcmdpbjogI3skc3BhY2V9cmVtO1xyXG4gIH1cclxuXHJcbiAgLy8gVmVydGljYWwgTWFyZ2luXHJcbiAgLm15LSN7JHNwYWNlfSB7XHJcbiAgICBtYXJnaW46ICN7JHNwYWNlfXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gQWxsIGFyb3VuZCBQYWRkaW5nXHJcbiAgLnAtI3skc3BhY2V9IHtcclxuICAgIHBhZGRpbmc6ICN7JHNwYWNlfXJlbTtcclxuICB9XHJcblxyXG4gIC8vIFZlcnRpY2FsIFBhZGRpbmdcclxuICAucHktI3skc3BhY2V9IHtcclxuICAgIHBhZGRpbmc6ICN7JHNwYWNlfXJlbSAwO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb250YWluZXJcclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuLy8gVGV4dCBTdHlsZXNcclxuLngtbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmxlYWQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLnJvdW5kLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBtYXJnaW46IDEuNXJlbSAwO1xyXG59XHJcblxyXG4vLyBCYWNrZ3JvdW5kc1xyXG4uYmcge1xyXG4gICYtcHJpbWFyeSB7XHJcbiAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZCgkcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG4gICYtbGlnaHQge1xyXG4gICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQoJGxpZ2h0LWNvbG9yKTtcclxuICAgIGJvcmRlcjogI2NjYyAxcHggc29saWQ7XHJcbiAgfVxyXG4gICYtZGFyayB7XHJcbiAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZCgkZGFyay1jb2xvcik7XHJcbiAgfVxyXG4gICYtc3VjY2VzcyB7XHJcbiAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZCgkc3VjY2Vzcy1jb2xvcik7XHJcbiAgfVxyXG4gICYtZGFuZ2VyIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRkYW5nZXItY29sb3IpO1xyXG4gIH1cclxuICAmLXdoaXRlIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCNmZmYpO1xyXG4gICAgYm9yZGVyOiAjY2NjIDFweCBzb2xpZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbnNcclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICRsaWdodC1jb2xvcjtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxuXHJcbiAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZCgkcHJpbWFyeS1jb2xvcik7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmJ0bi1kYXJrIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRkYXJrLWNvbG9yKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRkYXJrLWNvbG9yLCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQoJHN1Y2Nlc3MtY29sb3IpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5idG4tZGFuZ2VyIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRkYW5nZXItY29sb3IpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGRhcmstY29sb3IsIDIwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFsZXJ0c1xyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDAuOHJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJhY2tncm91bmQ6ICRsaWdodC1jb2xvcjtcclxuICBjb2xvcjogIzMzMztcclxuXHJcbiAgJi5hbGVydC1wcmltYXJ5IHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRwcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgJi5hbGVydC1kYXJrIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRkYXJrLWNvbG9yKTtcclxuICB9XHJcbiAgJi5hbGVydC1zdWNjZXNzIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRzdWNjZXNzLWNvbG9yKTtcclxuICB9XHJcbiAgJi5hbGVydC1kYW5nZXIge1xyXG4gICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQoJGRhbmdlci1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCYWRnZXNcclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGJhY2tncm91bmQ6ICRsaWdodC1jb2xvcjtcclxuICBjb2xvcjogIzMzMztcclxuXHJcbiAgJi5iYWRnZS1wcmltYXJ5IHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRwcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgJi5iYWRnZS1kYXJrIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRkYXJrLWNvbG9yKTtcclxuICB9XHJcbiAgJi5iYWRnZS1zdWNjZXNzIHtcclxuICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kKCRzdWNjZXNzLWNvbG9yKTtcclxuICB9XHJcbiAgJi5iYWRnZS1kYW5nZXIge1xyXG4gICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQoJGRhbmdlci1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGFyay1vdmVybGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodC1jb2xvcjtcclxuICB9XHJcbn1cclxuIiwiLmZvcm0ge1xyXG4gICYtZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gMDtcclxuICB9XHJcbiAgJi10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuICBpbnB1dFt0eXBlPSdwYXNzd29yZCddLFxyXG4gIGlucHV0W3R5cGU9J2RhdGUnXSxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcblxyXG4gICAgICAmLmZhLXR3aXR0ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzhhMWYzO1xyXG4gICAgICB9XHJcbiAgICAgICYuZmEtZmFjZWJvb2sge1xyXG4gICAgICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgICB9XHJcbiAgICAgICYuZmEtaW5zdGFncmFtIHtcclxuICAgICAgICBjb2xvcjogIzNmNzI5YjtcclxuICAgICAgfVxyXG4gICAgICAmLmZhLXlvdXR1YmUge1xyXG4gICAgICAgIGNvbG9yOiAjYzQzMDJiO1xyXG4gICAgICB9XHJcbiAgICAgICYuZmEtbGlua2VkaW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3N2I1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5oaWRlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhyZW07XHJcbiAgfVxyXG5cclxuICAvLyBUZXh0IFN0eWxlc1xyXG4gIC54LWxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5sYXJnZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAubGVhZCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAvLyBOYXZiYXJcclxuICAubmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGFzaC1idXR0b25zIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICB9XHJcblxyXG4gIC8vIFByb2ZpbGVzXHJcbiAgLnByb2ZpbGUge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAndG9wJ1xyXG4gICAgICAnYWJvdXQnXHJcbiAgICAgICdleHAnXHJcbiAgICAgICdlZHUnXHJcbiAgICAgICdnaXRodWInO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtYWJvdXQge1xyXG4gICAgLnNraWxscyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9zdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGEsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"desktop landing\">\n  <section class=\"container\">\n    <div class=\"dark-overlay\">\n      <div class=\"landing-inner\">\n        <h1 class=\"x-large\">MAERI</h1>\n        <p class=\"lead\">point of sale</p>\n        <form #formadmin=\"ngForm\" (ngSubmit)=\"login(formadmin)\" class=\"form\">\n          <div class=\"form-group\">\n            <ion-input\n              class=\"form-control\"\n              name=\"telephone\"\n              inputmode=\"tel\"\n              placeholder=\"phone number\"\n              ngModel\n              required\n              maxlength=\"11\"\n              [(ngModel)]=\"userNumber\"\n            ></ion-input>\n          </div>\n          <div class=\"form-group\">\n            <ion-input\n              class=\"form-control\"\n              name=\"password\"\n              type=\"password\"\n              placeholder=\"Password\"\n              ngModel\n              required\n              (ionChange)=\"handleInput($event)\"\n            ></ion-input>\n          </div>\n          <div class=\"btnhome\">\n            <ion-button\n              size=\"large\"\n              expand=\"block\"\n              color=\"danger\"\n              (click)=\"login(formadmin)\"\n              [disabled]=\"formadmin.invalid\"\n              >Login</ion-button\n            >\n          </div>\n\n          <div class=\"btnhome\" *ngIf=\"!maeriAdmin\">\n            <ion-button size=\"small\" clear expand=\"block\" color=\"success\"\n              >forgot password ?</ion-button\n            >\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");









let LoginPage = class LoginPage {
    constructor(router, auth, database, toastController, userservice) {
        this.router = router;
        this.auth = auth;
        this.database = database;
        this.toastController = toastController;
        this.userservice = userservice;
    }
    ngOnInit() { }
    login(formadmin) {
        console.log(formadmin.value);
        let name = formadmin.value.password;
        if (name.split("@")[0] === "admin") {
            this.router.navigateByUrl("admin");
        }
        else {
            this.router.navigateByUrl("home");
        }
    }
    handleInput(event) {
        console.log(event.detail.value);
    }
    connexion(login, passe) {
        this.auth
            .connexion(login, passe)
            .then((utilisateur) => {
            //console.log(utilisateur);
            this.email = login;
            this.chercherUtilisateur();
            if (utilisateur) {
                // this.chercherUtilisateur(utilisateur);
            }
            else {
                console.log("Login ou mot de passe incorrect");
            }
        })
            .catch((e) => {
            console.log("Login ou mot de passe incorrect");
            this.notifier("Login ou mot de passe incorrect");
        });
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
    chercherUtilisateur() {
        // let database = this.database.list("agriUser");
        this.database
            .list("agriUser")
            .snapshotChanges(["child_added"])
            .subscribe((actions) => {
            actions.forEach((action) => {
                let a = action.payload.val();
                a["key"] = action.key;
                console.log(a);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map