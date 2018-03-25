webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_main_component__ = __webpack_require__("./src/app/pages/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guard_index__ = __webpack_require__("./src/app/guard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_table_table_component__ = __webpack_require__("./src/app/pages/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs_component__ = __webpack_require__("./src/app/pages/tabs/tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs_component__["a" /* TabsComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__pages_table_table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs_component__["a" /* TabsComponent */], __WEBPACK_IMPORTED_MODULE_11__pages_main_main_component__["a" /* MainComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__["c" /* LayoutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__["c" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatGridListModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__guard_index__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_index__ = __webpack_require__("./src/app/pages/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_index__ = __webpack_require__("./src/app/pages/main/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_index__ = __webpack_require__("./src/app/guard/index.ts");




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_main_index__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_index__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__pages_main_index__["a" /* MainComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/guard/auth-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    /**
     *
     */
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard_guard__ = __webpack_require__("./src/app/guard/auth-guard.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard_guard__["a"]; });



/***/ }),

/***/ "./src/app/pages/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n\tbackground-color: #e91e63;\n\tfont-family: 'Roboto', sans-serif;\n\tmargin:0px !important;\n}\n \n.app-header{\n\tcolor: #fff;\n    background-color: #e91e63;\n    text-align: center;\n    padding: 1%;\n\t-webkit-box-shadow: 2px 4px 58px -20px rgba(0,0,0,1);\n\tbox-shadow: 2px 4px 58px -20px rgba(0,0,0,1);\n}\n \n.login-container{\n\twidth: 100%;\n  \theight:400px;\n  \tpadding: 0% !important;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 2px 4px 58px -20px rgba(0,0,0,1);\n\tbox-shadow: 2px 4px 58px -20px rgba(0,0,0,1);\n}\n \n.login-box-header{\n\twidth: auto;\n    height: 20%;\n    background-color: #673ab7;\n    text-align: center;\n    vertical-align: middle;\n    font-size: 3em;\n    padding: 2%;\n    color: #fff;\n}\n \n.login-box-body{\n\twidth: auto;\n\theight:100%;\n\tpadding: 5% 5% 5% 5%;\n\tcolor: #d2d2d2;\n}\n \n.login-icon{\n\tmargin-top: -2px;\n}\n \n.justifier {\n\twidth: 100%;\n\tpadding-bottom: 2%;\n}\n \n.login-button{\n\twidth: 100%;\n\tpadding:1.5% !important;\t\n    background-color: #673ab7;\n    font-size: 1.5em;\n    color: #fff !important;\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;  position: relative;\nmargin-top: 20%;\">\n  <mat-card style=\"margin-left:5%; margin-right:5%\">\n    <mat-card-title>\n      Login\n    </mat-card-title>\n    <mat-card-content>\n        <form>\n          <div>\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"username\" placeholder=\"Username\" value=\"\" name=\"UserName\">\n            </mat-form-field>\n          </div>\n            <mat-form-field>\n                <input matInput \n                       [(ngModel)]=\"password\" \n                       name=\"Password\"\n                       placeholder=\"Password\" \n                       value=\"\" \n                       type=\"password\">\n            </mat-form-field>\n            <div>\n            <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n          </div>\n          </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.username == "bo" && this.password == "demo")
            this.router.navigate(['/main']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__("./src/app/pages/main/main.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });



/***/ }),

/***/ "./src/app/pages/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-is-mobile .example-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  \n  h1.example-app-name {\n    margin-left: 8px;\n  }\n  \n  .example-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  \n  .example-is-mobile .example-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n  }\n"

/***/ }),

/***/ "./src/app/pages/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">Responsive App</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n      <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'over'\"\n                   [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n        <mat-nav-list>\n          <a mat-list-item (click)=\"snav.toggle(); selectItem('table');\">Table</a>\n          <a mat-list-item (click)=\"snav.toggle(); selectItem('tabs');\">Tabs</a>\n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <ng-template #dynamicInsert></ng-template>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n  \n\n  \n  \n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_table_component__ = __webpack_require__("./src/app/pages/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_component__ = __webpack_require__("./src/app/pages/tabs/tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(changeDetectorRef, media, viewContainerRef, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    MainComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    MainComponent.prototype.insertComponent = function (componentName) {
        var componentFac = this.componentFactoryResolver.resolveComponentFactory(this.componentFactory(componentName));
        this.dynamicInsert.clear();
        this.dynamicInsert.createComponent(componentFac);
    };
    MainComponent.prototype.componentFactory = function (componentName) {
        switch (componentName) {
            case 'table': {
                return __WEBPACK_IMPORTED_MODULE_2__table_table_component__["a" /* TableComponent */];
            }
            case 'tabs': {
                return __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_component__["a" /* TabsComponent */];
            }
            default: {
                return __WEBPACK_IMPORTED_MODULE_2__table_table_component__["a" /* TableComponent */];
            }
        }
    };
    MainComponent.prototype.ngAfterViewInit = function () {
        //of empty return TableComponent
        this.insertComponent("");
    };
    MainComponent.prototype.selectItem = function (componentName) {
        this.insertComponent(componentName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('dynamicInsert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], MainComponent.prototype, "dynamicInsert", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/pages/main/main.component.html"),
            styles: [__webpack_require__("./src/app/pages/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-card>\n        <mat-card-title>\n          Table\n        </mat-card-title>\n        <mat-card-content>\n            <mat-table #table [dataSource]=\"dataSource\">\n    \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                  <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n                  <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n                </ng-container>\n            \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                  <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                </ng-container>\n            \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                  <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n                  <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n                </ng-container>\n            \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                  <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n                  <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n                </ng-container>\n            \n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n              </mat-table>\n        </mat-card-content>\n      </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TableComponent = (function () {
    function TableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](ELEMENT_DATA);
    }
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/pages/table/table.component.html"),
            styles: [__webpack_require__("./src/app/pages/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/pages/tabs/tabs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tabs works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabs',
            template: __webpack_require__("./src/app/pages/tabs/tabs.component.html"),
            styles: [__webpack_require__("./src/app/pages/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map