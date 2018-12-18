(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/images.module": [
		"./src/app/images/images.module.ts",
		"images-images-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.toolbar {\r\n  padding: 0;\r\n}\r\n\r\n.nav-header {\r\n  padding: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx5QkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLE9BQU87Q0FDUjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdi1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"'over'\" [opened]=\"false\">\r\n    <mat-toolbar color=\"primary\">OPUS</mat-toolbar>\r\n\r\n    <div *ngFor=\"let nav of navigation\">\r\n      <div class=\"nav-header\">\r\n        <div>{{nav.name}}</div>\r\n        <div *ngIf=opusFolderAvailable>\r\n          <!-- <button mat-icon-button>\r\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </button> -->\r\n        </div>\r\n      </div>\r\n      <mat-nav-list>\r\n        <a *ngFor=\"let secondNav of nav.secondLevelNavigation\" mat-list-item href=\"{{nav.name+'/'+secondNav.id}}\">{{secondNav.name}}</a>\r\n      </mat-nav-list>\r\n    </div>\r\n\r\n\r\n    <div class=\"nav-header\">Settings</div>\r\n    <mat-nav-list>\r\n      <a mat-list-item [routerLink]=\"['/integrations']\">Integrations</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class=\"toolbar\" color=\"primary\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <span>OPUS</span>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_google_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/google-api */ "./src/app/core/google-api.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver, googleAPIService) {
        this.breakpointObserver = breakpointObserver;
        this.googleAPIService = googleAPIService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.title = 'opus';
        this.opusFolderAvailable = false;
        this.navigation = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSignStatus();
        this.googleAPIService.OPUSFolderPresented.subscribe(function (opusStatus) { return _this.opusFolderAvailable = opusStatus; });
    };
    AppComponent.prototype.getSignStatus = function () {
        var _this = this;
        this.googleAPIService.googleSignInStatus.subscribe(function (status) {
            if (status) {
                _this.getOPUSFolder();
            }
        });
    };
    AppComponent.prototype.getOPUSFolder = function () {
        var _this = this;
        this.googleAPIService.getOPUSFolder().subscribe(function (response) {
            var files = response.result.files;
            if (files.length === 0) {
                _this.createOPUSFolder();
            }
            else {
                _this.googleAPIService.OPUSFolderPresented.next(true);
                var opusFolder = files[0];
                _this.getFirstLevelNavigation(opusFolder.id);
            }
        });
    };
    AppComponent.prototype.createOPUSFolder = function () {
        var _this = this;
        var canCreate = confirm('Your drive dont have OPUS folder.Shall we create one for you?');
        if (canCreate) {
            this.googleAPIService.createFolder('OPUS').subscribe(function (fileID) {
                var images$ = _this.googleAPIService.createFolder('Images', fileID);
                var firstThen$ = _this.googleAPIService.createFolder('FirstAndThen', fileID);
                var flow$ = _this.googleAPIService.createFolder('Flow', fileID);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(images$, firstThen$, flow$).subscribe(function (_a) {
                    var fileIDs = _a[0];
                    return console.log('OPUS folder setup complete');
                });
            });
        }
        else {
            alert('Without OPUS folder app will not work as expected');
        }
    };
    AppComponent.prototype.getFirstLevelNavigation = function (folderID) {
        var _this = this;
        var allowedNavigation = ['Flow', 'Images', 'FirstAndThen'];
        this.googleAPIService.getFoldersFromFolder(folderID).subscribe(function (response) {
            var firstLevelNavigation = response.files.filter(function (file) { return allowedNavigation.indexOf(file.name) !== -1; });
            _this.getSecondLevelNavigation(firstLevelNavigation);
        });
    };
    AppComponent.prototype.getSecondLevelNavigation = function (firstLevelNavigation) {
        var _this = this;
        var secondLevelRequest = firstLevelNavigation.map(function (navigation) { return _this.googleAPIService.getFoldersFromFolder(navigation.id); });
        rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"].apply(void 0, secondLevelRequest).subscribe(function (subFolders) {
            _this.navigation = subFolders.map(function (folders, i) {
                firstLevelNavigation[i].secondLevelNavigation = folders.files;
                return firstLevelNavigation[i];
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _core_google_api__WEBPACK_IMPORTED_MODULE_5__["GoogleAPIService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-import */ "./src/app/material-import.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _core_google_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/google-api */ "./src/app/core/google-api.ts");
/* harmony import */ var _side_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-nav.service */ "./src/app/side-nav.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrations/integrations.component */ "./src/app/integrations/integrations.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_11__["IntegrationsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ].concat(_material_import__WEBPACK_IMPORTED_MODULE_4__["materialImports"], [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ]),
            providers: [_core_google_api__WEBPACK_IMPORTED_MODULE_7__["GoogleAPIService"], _side_nav_service__WEBPACK_IMPORTED_MODULE_8__["SideNavService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations/integrations.component */ "./src/app/integrations/integrations.component.ts");





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'integrations',
        component: _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_4__["IntegrationsComponent"]
    }, {
        path: 'Images/:id',
        loadChildren: './images/images.module#ImagesModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/google-api.ts":
/*!************************************!*\
  !*** ./src/app/core/google-api.ts ***!
  \************************************/
/*! exports provided: GoogleAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAPIService", function() { return GoogleAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var GoogleAPIService = /** @class */ (function () {
    function GoogleAPIService() {
        var _this = this;
        this.googleSignInStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.OPUSFolderPresented = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.googleAPIReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.googleAPIServiceInstance = this;
        gapi.load('client:auth2', function () { return _this.connectDiscoveryAPI(); });
    }
    GoogleAPIService.prototype.connectDiscoveryAPI = function () {
        var _this = this;
        var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
        var config = {
            apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DRIVE_API_KEY,
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DRIVE_CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DRIVE_SCOPE
        };
        gapi.client.init(config).then(function () {
            console.log('Discovery API loaded');
            _this.updateProperties();
        });
    };
    GoogleAPIService.prototype.signIn = function () {
        gapi.auth2.getAuthInstance().signIn();
        this.updateProperties();
    };
    GoogleAPIService.prototype.signOut = function () {
        gapi.auth2.getAuthInstance().signOut();
        this.updateProperties();
    };
    GoogleAPIService.prototype.updateProperties = function () {
        this.googleAPIReady.next(true);
        this.updateSignInStatus();
        this.updateCurrentUser();
    };
    GoogleAPIService.prototype.updateSignInStatus = function () {
        this.googleSignInStatus.next(this.getSignedStatus());
    };
    GoogleAPIService.prototype.updateCurrentUser = function () {
        this.currentUser.next(this.getCurrentUser());
    };
    GoogleAPIService.prototype.getFiles = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            gapi.client.drive.files.list({ 'fields': 'nextPageToken, files(id, name)' }).then(function (result) { return observer.next(result); });
        });
    };
    GoogleAPIService.prototype.getSignedStatus = function () {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    };
    GoogleAPIService.prototype.getCurrentUser = function () {
        return gapi.auth2.getAuthInstance().currentUser.get();
    };
    GoogleAPIService.prototype.getOPUSFolder = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            gapi.client.drive.files.list({ q: 'mimeType="application/vnd.google-apps.folder" and name = "OPUS"' }).then(function (result) {
                observer.next(result);
            });
        });
    };
    GoogleAPIService.prototype.createFolder = function (folderName, parentID) {
        if (parentID === void 0) { parentID = null; }
        var fileMetadata = {
            'name': folderName,
            'mimeType': 'application/vnd.google-apps.folder',
            'parents': parentID ? [parentID] : null
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            gapi.client.drive.files.create({ resource: fileMetadata, fields: 'id' }).then(function (response) {
                observer.next(response.result.id);
            });
        });
    };
    GoogleAPIService.prototype.getFoldersFromFolder = function (folderID) {
        var fileMetadata = {
            'q': "'" + folderID + "' in parents and mimeType = 'application/vnd.google-apps.folder'"
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            gapi.client.drive.files.list(fileMetadata).then(function (response) {
                observer.next(response.result);
            });
        });
    };
    GoogleAPIService.prototype.getImagesFromFolder = function (folderID) {
        var fileMetadata = {
            'q': "'" + folderID + "' in parents and mimeType='image/jpeg'",
            'fields': 'files(id, name,webContentLink,thumbnailLink)'
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            gapi.client.drive.files.list(fileMetadata).then(function (response) {
                observer.next(response.result);
            });
        });
    };
    GoogleAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleAPIService);
    return GoogleAPIService;
}());



/***/ }),

/***/ "./src/app/home/default-collection.ts":
/*!********************************************!*\
  !*** ./src/app/home/default-collection.ts ***!
  \********************************************/
/*! exports provided: defaultCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCollection", function() { return defaultCollection; });
var defaultCollection = [{
        category: 'travel',
        images: ['pexels-photo-191238.jpeg',
            'pexels-photo-112473.jpeg',
            'pexels-photo-167681.jpeg',
            'pexels-photo-831475.jpeg',
            'pexels-photo-849835.jpeg',
            'vespa-roller-motor-scooter-cult-159192.jpeg',]
    }, {
        category: 'toy',
        images: [
            'ladybug-fig-funny-lucky-ladybug.jpg',
            'mario-luigi-figures-funny-163114.jpeg',
            'pexels-photo.jpg',
            'pexels-photo-104344.jpeg',
            'pexels-photo-255514.jpeg',
            'pexels-photo-1050310.jpeg '
        ]
    }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  padding: 0 24px;\r\n}\r\n\r\n.collection-title {\r\n  margin: 10px 0;\r\n}\r\n\r\n.image-card {\r\n  cursor: pointer;\r\n}\r\n\r\n.current-view-image {\r\n  /* Set rules to fill background */\r\n  min-height: 100%;\r\n  min-width: 100%;\r\n  /* Set up proportionate scaling */\r\n  width: 100%;\r\n  height: auto;\r\n  /* Set up positioning */\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.close-image-view {\r\n  position: fixed;\r\n  top: 24px;\r\n  right: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsUUFBUTtDQUNUOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmltYWdlLWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1cnJlbnQtdmlldy1pbWFnZSB7XHJcbiAgLyogU2V0IHJ1bGVzIHRvIGZpbGwgYmFja2dyb3VuZCAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIC8qIFNldCB1cCBwcm9wb3J0aW9uYXRlIHNjYWxpbmcgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogU2V0IHVwIHBvc2l0aW9uaW5nICovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2xvc2UtaW1hZ2UtdmlldyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMjRweDtcclxuICByaWdodDogMjRweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n  <div *ngFor=\"let collection of homeImageCollection\">\r\n    <div class=\"collection-title\">\r\n      <label class=\"label \" for=\"\">{{collection.category}}</label>\r\n    </div>\r\n    <mat-grid-list [cols]=\"cardPerRow\">\r\n      <mat-grid-tile (click)=viewImage(collection.category,image) *ngFor=\"let image of collection.images\">\r\n        <mat-card class=\"image-card\">\r\n          <mat-card-content class=\"dashboard-card-content\">\r\n            <img src=\"./assets/default-collection/{{collection.category}}/preview/{{image}}\" alt=\"\">\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n</div>\r\n\r\n<img class=\"current-view-image\" *ngIf=currentViewImage src=\"{{currentViewImage}}\" alt=\"\">\r\n\r\n<button (click)=closeImageView() *ngIf=currentViewImage class=\"close-image-view\" mat-fab>\r\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">close</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _default_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-collection */ "./src/app/home/default-collection.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.cardPerRow = 6;
        this.homeImageCollection = _default_collection__WEBPACK_IMPORTED_MODULE_3__["defaultCollection"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.layoutObserver();
    };
    HomeComponent.prototype.layoutObserver = function () {
        var _this = this;
        this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).subscribe(function (_a) {
            var matches = _a.matches;
            if (matches) {
                _this.cardPerRow = 1;
            }
        });
    };
    HomeComponent.prototype.viewImage = function (category, image) {
        this.currentViewImage = "./assets/default-collection/" + category + "/original/" + image;
    };
    HomeComponent.prototype.closeImageView = function () {
        this.currentViewImage = null;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/integrations/integrations.component.html":
/*!**********************************************************!*\
  !*** ./src/app/integrations/integrations.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n  <div class=\"wrap-item\">Connect to Google Drive</div>\r\n  <div class=\"wrap-item\">\r\n    <img src=\"./assets/drive_icon.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"wrap-item\">\r\n    <button mat-raised-button *ngIf=!isSignedIn color=\"primary\" (click)=connect()>Connect</button>\r\n    <button mat-raised-button *ngIf=isSignedIn color=\"primary\" (click)=signOut()>SignOut</button>\r\n  </div>\r\n  <div class=\"wrap-item\">\r\n    <div> {{currentUser.name}}</div>\r\n    <div>{{currentUser.email}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/integrations/integrations.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/integrations/integrations.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column; }\n  .wrap .wrap-item {\n    text-align: center;\n    margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZWdyYXRpb25zL0Q6XFxzb3VyY2UtY29udHJvbFxcZ2l0aHViXFxvcHVzL3NyY1xcYXBwXFxpbnRlZ3JhdGlvbnNcXGludGVncmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFNdkI7RUFYRDtJQVFJLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnRlZ3JhdGlvbnMvaW50ZWdyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC53cmFwLWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/integrations/integrations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/integrations/integrations.component.ts ***!
  \********************************************************/
/*! exports provided: IntegrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationsComponent", function() { return IntegrationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_google_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/google-api */ "./src/app/core/google-api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var IntegrationsComponent = /** @class */ (function () {
    function IntegrationsComponent(googleAPIService, changeDetectorRef) {
        this.googleAPIService = googleAPIService;
        this.changeDetectorRef = changeDetectorRef;
        this.currentUser = {};
    }
    IntegrationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var status$ = this.googleAPIService.googleSignInStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (status) { return _this.isSignedIn = status; }));
        var user$ = this.googleAPIService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            var basicProfile = user.getBasicProfile();
            if (user && basicProfile) {
                _this.currentUser.name = basicProfile.getName();
                _this.currentUser.email = basicProfile.getEmail();
            }
            else {
                _this.currentUser = {};
            }
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(status$, user$).subscribe(function () { return _this.changeDetectorRef.detectChanges(); });
    };
    IntegrationsComponent.prototype.signOut = function () {
        this.googleAPIService.signOut();
    };
    IntegrationsComponent.prototype.connect = function () {
        this.googleAPIService.signIn();
    };
    IntegrationsComponent.prototype.getFiles = function () {
        this.googleAPIService.getFiles().subscribe(function (result) { return console.log(result); });
    };
    IntegrationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-integrations',
            template: __webpack_require__(/*! ./integrations.component.html */ "./src/app/integrations/integrations.component.html"),
            styles: [__webpack_require__(/*! ./integrations.component.scss */ "./src/app/integrations/integrations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_google_api__WEBPACK_IMPORTED_MODULE_2__["GoogleAPIService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], IntegrationsComponent);
    return IntegrationsComponent;
}());



/***/ }),

/***/ "./src/app/material-import.ts":
/*!************************************!*\
  !*** ./src/app/material-import.ts ***!
  \************************************/
/*! exports provided: materialImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialImports", function() { return materialImports; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

var materialImports = [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"]];


/***/ }),

/***/ "./src/app/side-nav.service.ts":
/*!*************************************!*\
  !*** ./src/app/side-nav.service.ts ***!
  \*************************************/
/*! exports provided: SideNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavService", function() { return SideNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SideNavService = /** @class */ (function () {
    function SideNavService(sidenav, router) {
        this.sidenav = sidenav;
        this.router = router;
        this.subscribeRouterEvent();
    }
    SideNavService.prototype.subscribeRouterEvent = function () {
        var _this = this;
        this.router.events.subscribe(function (event) { return _this.close(); });
    };
    SideNavService.prototype.open = function () {
        return this.sidenav.open();
    };
    SideNavService.prototype.close = function () {
        return this.sidenav.close();
    };
    SideNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SideNavService);
    return SideNavService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    DRIVE_CLIENT_ID: '168065657698-bl8m4hh00baftnpii5in899qc2kn9e30.apps.googleusercontent.com',
    DRIVE_API_KEY: 'AIzaSyDNAkrieRcIRXn9kWVhdf34woFwgFfU0bM',
    DRIVE_SCOPE: 'https://www.googleapis.com/auth/drive'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\source-control\github\opus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map