require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2,3],Array(90).concat([
/* 90 */
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);

            __webpack_require__(293)();
            
            
        if (false) {}
        
            const context = __webpack_require__(409);
            global.registerWebpackModules(context);
            if (false) {}
            
        
        /*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

__webpack_require__(123);
__webpack_require__(414);
const application = __webpack_require__(30);

// Dev, test, prod urls
const apiLoginUrlDev = "https://sts-dev.pciaa.net/api/pci/signin/issue";
const apiLoginUrlTest = "https://sts-test.pciaa.net/api/pci/signin/issue";
const apiLoginUrlProd = "https://sts.apci.org/api/pci/signin/issue";
const apiBaseServiceUrlDev = "https://dev.pciaa.net/pciwebsite/profileapi/";
const apiBaseServiceUrlTest = "https://test.pciaa.net/pciwebsite/profileapi/";
const apiBaseServiceUrlProd = "https://www.apci.org/pciwebsite/profileapi/";
const scopeDev = "http://dev.pciaa.net/";
const scopeTest = "http://test.pciaa.net/";
const scopeProd = "http://www.apci.org/";

// Define all global variables used throughout the entire solution.
global.apiLoginUrl = apiLoginUrlProd;
global.apiBaseServiceUrl = apiBaseServiceUrlProd;
global.scope = scopeProd;
global.token = null;
global.personId = null;
global.currentUser = null;
global.logonId = null;
global.isPci = false;
global.isProfileExecutive = false;
global.isProfileManager = false;
global.isProfileAccounting = false;
global.isProfileMembership = false;
global.isProfileEngagement = false;
global.isProfileUser = false;
global.isExecutive = "N";
global.companyGroupsSearchText = "";
global.companyGroupsSearchTextCompany = "";
global.peopleSearchText = "";
global.peopleSearchTextCompany = "";
global.peopleSearchTextGroup = "";
global.remarksSearchText = "";
global.remarksSearchTextCompany = "";
global.remarksSearchTextGroup = "";

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": 121
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 120;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n"},{"type":"rule","selectors":["ActivityIndicator"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"}]},{"type":"rule","selectors":["Page"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"comment","comment":" margin-top: -20; fix nested frame spacing "}]},{"type":"rule","selectors":[".ios .page"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".android TextField"],"declarations":[{"type":"declaration","property":"font","value":"14"}]},{"type":"rule","selectors":[".android .login-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".ios .login-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".android .login-field-switch"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .login-field-switch"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".hr-dark"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".android .button"],"declarations":[{"type":"declaration","property":"background","value":"#ccc"},{"type":"declaration","property":"border-color","value":"#999"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".ios .button"],"declarations":[{"type":"declaration","property":"background","value":"#eee"},{"type":"declaration","property":"border-color","value":"#ccc"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".android .login-button"],"declarations":[{"type":"declaration","property":"background","value":"#ccc"},{"type":"declaration","property":"border-color","value":"#999"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".ios .login-button"],"declarations":[{"type":"declaration","property":"background","value":"#0075be"},{"type":"declaration","property":"border-color","value":"#0075be"},{"type":"declaration","property":"border-radius","value":"3"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".android .forgot-button"],"declarations":[{"type":"declaration","property":"background","value":"transparent"},{"type":"declaration","property":"border","value":"none"},{"type":"declaration","property":"color","value":"#ea092a"},{"type":"declaration","property":"font-size","value":"11"}]},{"type":"rule","selectors":[".ios .forgot-button"],"declarations":[{"type":"declaration","property":"background","value":"transparent"},{"type":"declaration","property":"border","value":"none"},{"type":"declaration","property":"color","value":"#ea092a"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".navigation-frame Page"],"declarations":[{"type":"comment","comment":" margin-top: 20; fix nested frame spacing "},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".tab"],"declarations":[{"type":"comment","comment":" padding: 10; "},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"1"},{"type":"declaration","property":"background-color","value":"#eeeeee"},{"type":"declaration","property":"color","value":"#999"}]},{"type":"rule","selectors":[".tab-selected"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"}]},{"type":"rule","selectors":[".android .tab-icon"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .tab-icon"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".tab-label"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"margin-bottom","value":"1"}]},{"type":"rule","selectors":[".action-bar-title"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".android .list-view-item"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"5"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-small"],"declarations":[{"type":"declaration","property":"font-size","value":"11"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"5"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item-small"],"declarations":[{"type":"declaration","property":"font-size","value":"13"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".rad-list-view-item"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"comment","comment":" color: #212121; "},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding-bottom","value":"3"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding-bottom","value":"5"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".android .list-view-item-header-separator"],"declarations":[{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".ios .list-view-item-header-separator"],"declarations":[{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".android .list-view-item-form"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"comment","comment":" margin-right: 20; "},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".ios .list-view-item-form"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"comment","comment":" margin-right: 20; "},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-form-bottom"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"min-height","value":"38"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".ios .list-view-item-form-bottom"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"min-height","value":"44"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".android .list-view-item-form-bottom-short"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"padding-bottom","value":"4"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"4"}]},{"type":"rule","selectors":[".ios .list-view-item-form-bottom-short"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"padding-bottom","value":"6"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"6"}]},{"type":"rule","selectors":[".android .list-view-item-form-short"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"padding-bottom","value":"4"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"4"}]},{"type":"rule","selectors":[".ios .list-view-item-form-short"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"padding-bottom","value":"6"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"6"}]},{"type":"rule","selectors":[".android .list-view-section-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".ios .list-view-section-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"35"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".android .list-view-section-header-no-height"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-section-header-no-height"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#ddd"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".android .list-view-section-header-no-border"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"height","value":"30"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".ios .list-view-section-header-no-border"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"height","value":"35"},{"type":"declaration","property":"padding-bottom","value":"2"},{"type":"declaration","property":"padding-left","value":"20"},{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".list-view-section-detail"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"border-top-color","value":"#ddd"},{"type":"declaration","property":"border-top-width","value":"0.5"}]},{"type":"rule","selectors":[".android .list-view-item-main-top"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ios .list-view-item-main-top"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .list-view-item-main-top-small"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".ios .list-view-item-main-top-small"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".android .list-view-item-main"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-main"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-picker"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".ios .list-view-item-picker"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".android .list-view-item-textview"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ios .list-view-item-textview"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .list-view-item-left"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".ios .list-view-item-left"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".android .list-view-item-left-small"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".ios .list-view-item-left-small"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".android .list-view-item-left-bold"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".ios .list-view-item-left-bold"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".android .list-view-item-left-indent"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"font-style","value":"italic"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".ios .list-view-item-left-indent"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-style","value":"italic"},{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".android .list-view-item-right-bordered"],"declarations":[{"type":"declaration","property":"border-color","value":"black"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"min-width","value":"100"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ios .list-view-item-right-bordered"],"declarations":[{"type":"declaration","property":"border-color","value":"black"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"min-width","value":"100"},{"type":"declaration","property":"padding","value":"3"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".android .list-view-item-right"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ios .list-view-item-right"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".android .list-view-item-right-bold"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ios .list-view-item-right-bold"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".android .list-view-item-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".ios .list-view-item-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".android .list-view-item-sub-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"3"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-email"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"},{"type":"declaration","property":"text-decoration","value":"underline"}]},{"type":"rule","selectors":[".android .list-view-item-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ios .list-view-item-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .list-view-item-sub-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-phone"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-sub-title"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-sub-title"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .list-view-item-sub"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".ios .list-view-item-sub"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-top","value":"3"}]},{"type":"rule","selectors":[".android .fn-list-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#ccc"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".ios .fn-list-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#ccc"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"font-size","value":"26"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".android .fn-list-view-item-small"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-family","value":"fontawesome"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".ios .fn-list-view-item-small"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"},{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".login-background"],"declarations":[{"type":"comment","comment":" background-color: #0075be; "},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".login-box"],"declarations":[{"type":"declaration","property":"border","value":"solid 1px #999"}]},{"type":"rule","selectors":[".login-label"],"declarations":[{"type":"declaration","property":"color","value":"#0075be"}]},{"type":"rule","selectors":[".android .scroll-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".ios .scroll-view-item"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"padding-left","value":"15"},{"type":"declaration","property":"padding-right","value":"15"}]},{"type":"rule","selectors":[".android .scroll-view-item-bio"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".ios .scroll-view-item-bio"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"padding-left","value":"15"},{"type":"declaration","property":"padding-right","value":"15"},{"type":"declaration","property":"padding-top","value":"15"}]},{"type":"rule","selectors":[".bio-label"],"declarations":[{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".android .segmented-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#33a8f1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"10"},{"type":"declaration","property":"selected-background-color","value":"#0075be"},{"type":"comment","comment":" NEEDED "}]},{"type":"rule","selectors":[".ios .segmented-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#33a8f1"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"selected-background-color","value":"#0075be"},{"type":"comment","comment":" NEEDED "}]},{"type":"rule","selectors":[".swipe-icons"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"comment","comment":" padding-left: 10;\n    padding-right: 10; "},{"type":"declaration","property":"width","value":"80"}]},{"type":"rule","selectors":[".blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"}]},{"type":"rule","selectors":[".green"],"declarations":[{"type":"comment","comment":" background-color: green; "},{"type":"declaration","property":"background-color","value":"#35c4af"},{"type":"comment","comment":" #0a573d; "}]},{"type":"rule","selectors":[".orange"],"declarations":[{"type":"comment","comment":" background-color: #f68320; "},{"type":"declaration","property":"background-color","value":"#e88011"}]},{"type":"rule","selectors":[".red"],"declarations":[{"type":"comment","comment":" background-color: #cc2d30; "},{"type":"declaration","property":"background-color","value":"#ea092a"}]},{"type":"comment","comment":" .android .switch {\n    color: #cc2d30;\n} "},{"type":"rule","selectors":[".ios .switch"],"declarations":[{"type":"comment","comment":" background-color: #cc2d30; "},{"type":"declaration","property":"background-color","value":"#ea092a"}]},{"type":"comment","comment":" Switch[checked=true] {\n    color: white ;\n    background-color: #0075be;\n    transform: scale(1.25, 1.25);\n    transform: translate(-5, 0);\n  }\n  \n  Switch[checked=false] {\n    color: gray;\n    background-color: gray;\n  } "},{"type":"rule","selectors":[".view-title"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"20"},{"type":"comment","comment":" height: 44; "},{"type":"declaration","property":"padding-bottom","value":"10"},{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".view-title-space"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"20"},{"type":"comment","comment":" height: 44; "},{"type":"declaration","property":"padding-bottom","value":"10"},{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".view-title-multi"],"declarations":[{"type":"declaration","property":"background-color","value":"#0075be"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"20"},{"type":"comment","comment":" height: 44; "},{"type":"declaration","property":"padding-bottom","value":"10"},{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".view-subtitle"],"declarations":[{"type":"declaration","property":"background-color","value":"#eee"},{"type":"declaration","property":"border-bottom-color","value":"#999"},{"type":"declaration","property":"border-bottom-width","value":"0.5"},{"type":"declaration","property":"color","value":"#666"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"comment","comment":"\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n"},{"type":"comment","comment":"@import '~nativescript-theme-core/css/core.light.css';"}],"parsingErrors":[]}};; 
if (false ) {} 

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"login/login-page\"></Frame>"; 
if (false ) {} 

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if (true) {
    // Register tns-core-modules UI framework modules
    __webpack_require__(98);

    // register application modules
    // This will register each `root`, `page`, `fragment` postfixed xml, css, js, ts, scss file in the app/ folder
    const context = __webpack_require__(410);
    global.registerWebpackModules(context);
}
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteeViewModel = __webpack_require__(125);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var committeeList = new CommitteeViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeeList: committeeList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Committee";
    
        var committeeName = page.getViewById("committeeName");
        
        committeeName.text = navigationContext.committeeName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            committeeList.empty();

            pageData.set("isLoading", true);

            committeeList.load(navigationContext.committeeCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "people/person/person-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteeViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(committeeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "committee/committeemembers?committeeCode=" + committeeCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(person) {
                var webAccessEndDate;
                var bio;

                if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                    webAccessEndDate = null;
                } else {
                    var spaceIndex = person.WebAccessEndDate.indexOf(" ");

                    if (spaceIndex === -1)
                    {
                        webAccessEndDate = person.WebAccessEndDate;
                    }
                    else
                    {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }
                }
                
                // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                    bio = "";
                } else {
                    bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
                }

                viewModel.push({
                    personId: person.PersonId,
                    prefix: person.Prefix,
                    firstName: person.FirstName,
                    middleName: person.MiddleName,
                    lastName: person.LastName,
                    suffix: person.Suffix,
                    fullName: person.FullName,
                    informalSalutation: person.InformalSalutation,
                    title: person.Title,
                    personCompany: person.PersonCompany,
                    companyId: person.CompanyId,
                    companyName: person.CompanyName,
                    companyId0: person.CompanyId0,
                    groupId: person.GroupId,
                    groupName: person.GroupName,
                    webAccessCode: person.WebAccessCode,
                    webAccessGroupType: person.WebAccessGroupType,
                    webAccessEndDate: webAccessEndDate,
                    webAccessComment: person.WebAccessComment,
                    webAccess: person.WebAccess,
                    webRegistered: person.WebRegistered,
                    logonId: person.LogonId,
                    departmentId: person.DepartmentId,
                    department: person.Department,
                    supervisorId: person.SupervisorId,
                    supervisor: person.Supervisor,
                    ddScopeId: person.DdScopeId,
                    ddScope: person.DdScope,
                    ddFormatId: person.DdFormatId,
                    ddFormat: person.DdFormat,
                    profileReportStatusCode: person.ProfileReportStatusCode,
                    profileReportStatus: person.ProfileReportStatus,
                    profileChangesNeeded: person.ProfileChangesNeeded,
                    profileReportDate: person.ProfileReportDate,
                    lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                    lastPasswordChangeDate: person.LastPasswordChangeDate,
                    mainAddressesId: person.MainAddressesId,
                    streetAddress: person.StreetAddress,
                    address1: person.Address1,
                    address2: person.Address2,
                    city: person.City,
                    stateCode: person.StateCode,
                    state: person.State,
                    postalCode: person.PostalCode,
                    countryCode: person.CountryCode,
                    country: person.Country,
                    poBox: person.PoBox,
                    poBoxCity: person.PoBoxCity,
                    poBoxStateCode: person.PoBoxStateCode,
                    poBoxState: person.PoBoxState,
                    poBoxPostalCode: person.PoBoxPostalCode,
                    emailAddress: person.EmailAddress,
                    workPhone: person.WorkPhone,
                    extension: person.Extension,
                    cellPhone: person.CellPhone,
                    fax: person.Fax,
                    bio: bio,
                    secretaryId: person.SecretaryId,
                    secretary: person.Secretary,
                    secretaryTitle: person.SecretaryTitle,
                    secretaryEmailAddress: person.SecretaryEmailAddress,
                    secretaryWorkPhone: person.SecretaryWorkPhone,
                    secretaryExtension: person.SecretaryExtension,
                    secretaryFax: person.SecretaryFax,
                    committeeListCode: person.CommitteeListCode,
                    committeeList: person.CommitteeList,
                    committeeTypeCode: person.CommitteeTypeCode,
                    committeeType: person.CommitteeType,
                    committeeCode: person.CommitteeCode,
                    committee: person.Committee,
                    positionCode: person.PositionCode,
                    position: person.Position,
                    designatedMember: person.DesignatedMember,
                    memberTypeCode: person.MemberTypeCode,
                    memberType: person.MemberType,
                    startDate: person.StartDate.substring(0, person.StartDate.indexOf(" ")),
                    endDate: person.EndDate.substring(0, person.EndDate.indexOf(" "))
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteeViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"committeeName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeeList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <GridLayout columns=\"*, auto\" rows=\"auto, auto, auto, *\">\n                                    <StackLayout row=\"0\" colSpan=\"2\" orientation=\"horizontal\">\n                                        <Label text=\"{{ fullName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                        <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ memberTypeCode === 'M' ? 'visible' : 'collapse' }}\" />\n                                    </StackLayout>\n                                    <!-- <Label row=\"0\" colSpan=\"2\" text=\"{{ fullName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" /> -->\n                                    <Label row=\"1\" colSpan=\"2\" text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                    <Label row=\"2\" colSpan=\"2\" text=\"{{ personCompany }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                    <Label row=\"3\" col=\"0\" text=\"{{ designatedMember === 'N' ? positionCode === 10 ? memberType : position : positionCode === 10 ? memberType : position }}\" class=\"list-view-item-sub\" />\n                                    <Label row=\"3\" col=\"1\" text=\"{{ 'Since ' + startDate }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteesViewModel = __webpack_require__(128);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var committeesList = new CommitteesViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Committees";
    
        var committeeType = page.getViewById("committeeType");
        
        committeeType.text = navigationContext.committeeType;
        
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            committeesList.empty();

            pageData.set("isLoading", true);

            committeesList.load(navigationContext.committeeListCode, navigationContext.committeeTypeCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "committeetypes/committees/committee/committee-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(committeeListCode, committeeTypeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "committee/committees?committeeListCode=" + committeeListCode + "&committeeTypeCode=" + committeeTypeCode + "&isExecutive=Y",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.CommitteeCode !== null && committee.CommitteeCode !== 0) {
                    viewModel.push({
                        committeeListCode: committee.CommitteeListCode,
                        committeeList: committee.CommitteeList,
                        committeeTypeCode: committee.CommitteeTypeCode,
                        committeeType: committee.CommitteeType,
                        committeeStateListCode: committee.CommitteeStateListCode,
                        committeeStateList: committee.CommitteeStateList,
                        parentCommitteeCode: committee.ParentCommitteeCode,
                        parentCommittee: committee.ParentCommittee,
                        parentCommitteeTypeCode: committee.ParentCommitteeTypeCode,
                        committeeCode: committee.CommitteeCode,
                        committeeName: committee.CommitteeName,
                        dateFormed: committee.DateFormed,
                        stateCode: committee.StateCode,
                        stateName: committee.StateName,
                        memberCount: committee.MemberCount,
                        personId: committee.PersonId,
                        fullName: committee.FullName,
                        internalReportFlag: committee.InternalReportFlag,
                        annualReportFlag: committee.AnnualReportFlag,
                        restricted: committee.Restricted,
                        includeOnWebsite: committee.IncludeOnWebsite,
                        websiteName: committee.WebsiteName,
                        websiteText: committee.WebsiteText,
                        subCommitteeFlag: committee.SubCommitteeFlag
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"committeeType\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <GridLayout columns=\"*, auto\" rows=\"auto, *\" style=\"{{ subCommitteeFlag === 'Y' ? (parentCommitteeTypeCode === '10' ? (committeeTypeCode === '15' ? 'color: #ea092a; margin-left: 30;' : committeeTypeCode === '16' ? 'color: #0075be; margin-left: 30;' : 'color: black; margin-left: 30;') : (committeeTypeCode === '15' ? 'color: #ea092a; margin-left: 15;' : committeeTypeCode === '16' ? 'color: #0075be; margin-left: 15;' : 'color: black; margin-left: 15;')) : 'color: black; margin-left: 0;' }}\">\n                                    <Label row=\"0\" colSpan=\"2\" text=\"{{ committeeName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                    <Label row=\"1\" col=\"0\" text=\"{{ fullName.length === 0 ? 'No PCI Staff Representative' : fullName }}\" class=\"list-view-item-sub\" style=\"{{ fullName.length === 0 ? 'font-style: italic;' : 'font-style: normal;' }}\" />\n                                    <Label row=\"1\" col=\"1\" text=\"{{ memberCount + ' Members' }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteeTypesViewModel = __webpack_require__(131);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;

var committeeTypesList = new CommitteeTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeeTypesList: committeeTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Committees";

        if (committeeTypesList.length === 0) {
            pageData.set("isLoading", true);

            committeeTypesList.load().then(function () {
                pageData.set("isLoading", false);
            });
        }

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "committeetypes/committees/committees-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteeTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "committee/committeetypes?committeeListCode=1&isExecutive=Y",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committeeType) {
                if (committeeType.CommitteeTypeCode !== null && committeeType.CommitteeTypeCode !== 0) {
                    viewModel.push({
                        committeeListCode: committeeType.CommitteeListCode,
                        committeeList: committeeType.CommitteeList,
                        committeeTypeCode: committeeType.CommitteeTypeCode,
                        committeeType: committeeType.CommitteeType
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteeTypesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n    \n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeeTypesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ committeeType }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"1\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Attributes";

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <ScrollView>\n        <GridLayout columns=\"*\" rows=\"auto, *\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n                <Label id=\"companyName\" text=\"{{ companyName }}\" horizontalAlignment=\"center\" />\n            </StackLayout>\n            <StackLayout row=\"1\" col=\"0\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Account Manager\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ accountManager }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"COMPANY INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Status\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ status }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Joined PCI\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ companyFoundedDate }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Membership\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ membershipType }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"AM Best #\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ numberedAmBest }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"NAIC #\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ numberedNaic }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"PCI #\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ numberedNaii }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"State Domicile\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ domiciledState }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Country Domicile\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ domiciledCountry }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Marketing Type\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ marketingType }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Structure\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ structure }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Affiliations\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ affiliations }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"WEB ACCESS INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Web Access\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ webAccess }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Expiration Date\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ webAccessEndDate }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"PARENT/HOLDING COMPANY\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Name\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ holdCompany }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"COMPANY MAPPING\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Name\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ mapCompany }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Auto Selection\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ autoCoSelect }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"INCLUDE COMPANY IN PROFILE?\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Included\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ inclinProfile }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Date Removed\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ compRemovedDate }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteeMembersViewModel = __webpack_require__(136);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var committeeMembersList = new CommitteeMembersViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeeMembersList: committeeMembersList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Committee";

        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Committees";
        // } else {
        //     page.actionBar.title = "Company Committees";
        // }
    
        var companyName = page.getViewById("companyName");
        var committee = page.getViewById("committee");
        
        companyName.text = navigationContext.companyName;
        committee.text = navigationContext.committee; // + "(" + navigationContext.companyId + " : " + isGroup + " : " + navigationContext.committeeCode + ")";

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            committeeMembersList.empty();

            pageData.set("isLoading", true);

            committeeMembersList.load(navigationContext.companyId, isGroup, navigationContext.committeeCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        if (!model.isDeleted) {
            const navigationEntry = {
                moduleName: "people/person/person-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteeMembersViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, committeeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycommitteemembers?companyId=" + companyId + "&isGroup=" + isGroup + "&committeeCode=" + committeeCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(person) {
                var isDeleted = false;
                var startDate;
                var endDate;
                var webAccessEndDate;
                var bio;

                if (person.FullName.indexOf("(Deleted)") > 0) {
                    isDeleted = true;
                }

                if (person.StartDate === null || person.StartDate.length === 0) {
                    startDate = null;
                } else {
                    startDate = person.StartDate.substring(0, person.StartDate.indexOf(" "));
                }

                if (person.EndDate === null || person.EndDate.length === 0) {
                    endDate = null;
                } else {
                    endDate = person.EndDate.substring(0, person.EndDate.indexOf(" "));
                }

                if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                    webAccessEndDate = null;
                } else {
                    var spaceIndex = person.WebAccessEndDate.indexOf(" ");

                    if (spaceIndex === -1)
                    {
                        webAccessEndDate = person.WebAccessEndDate;
                    }
                    else
                    {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }
                }
                
                // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                    bio = "";
                } else {
                    bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
                }

                viewModel.push({
                    personId: person.PersonId,
                    prefix: person.Prefix,
                    firstName: person.FirstName,
                    middleName: person.MiddleName,
                    lastName: person.LastName,
                    suffix: person.Suffix,
                    fullName: person.FullName,
                    informalSalutation: person.InformalSalutation,
                    title: person.Title,
                    personCompany: person.PersonCompany,
                    companyId: person.CompanyId,
                    companyName: person.CompanyName,
                    companyId0: person.CompanyId0,
                    groupId: person.GroupId,
                    groupName: person.GroupName,
                    webAccessCode: person.WebAccessCode,
                    webAccessGroupType: person.WebAccessGroupType,
                    webAccessEndDate: webAccessEndDate,
                    webAccessComment: person.WebAccessComment,
                    webAccess: person.WebAccess,
                    webRegistered: person.WebRegistered,
                    logonId: person.LogonId,
                    departmentId: person.DepartmentId,
                    department: person.Department,
                    supervisorId: person.SupervisorId,
                    supervisor: person.Supervisor,
                    ddScopeId: person.DdScopeId,
                    ddScope: person.DdScope,
                    ddFormatId: person.DdFormatId,
                    ddFormat: person.DdFormat,
                    profileReportStatusCode: person.ProfileReportStatusCode,
                    profileReportStatus: person.ProfileReportStatus,
                    profileChangesNeeded: person.ProfileChangesNeeded,
                    profileReportDate: person.ProfileReportDate,
                    lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                    lastPasswordChangeDate: person.LastPasswordChangeDate,
                    mainAddressesId: person.MainAddressesId,
                    streetAddress: person.StreetAddress,
                    address1: person.Address1,
                    address2: person.Address2,
                    city: person.City,
                    stateCode: person.StateCode,
                    state: person.State,
                    postalCode: person.PostalCode,
                    countryCode: person.CountryCode,
                    country: person.Country,
                    poBox: person.PoBox,
                    poBoxCity: person.PoBoxCity,
                    poBoxStateCode: person.PoBoxStateCode,
                    poBoxState: person.PoBoxState,
                    poBoxPostalCode: person.PoBoxPostalCode,
                    emailAddress: person.EmailAddress,
                    workPhone: person.WorkPhone,
                    extension: person.Extension,
                    cellPhone: person.CellPhone,
                    fax: person.Fax,
                    bio: bio,
                    secretaryId: person.SecretaryId,
                    secretary: person.Secretary,
                    secretaryTitle: person.SecretaryTitle,
                    secretaryEmailAddress: person.SecretaryEmailAddress,
                    secretaryWorkPhone: person.SecretaryWorkPhone,
                    secretaryExtension: person.SecretaryExtension,
                    secretaryFax: person.SecretaryFax,
                    committeeListCode: person.CommitteeListCode,
                    committeeList: person.CommitteeList,
                    committeeTypeCode: person.CommitteeTypeCode,
                    committeeType: person.CommitteeType,
                    committeeCode: person.CommitteeCode,
                    committee: person.Committee,
                    positionCode: person.PositionCode,
                    position: person.Position,
                    designatedMember: person.DesignatedMember,
                    memberTypeCode: person.MemberTypeCode,
                    memberType: person.MemberType,
                    startDate: startDate,
                    endDate: endDate,
                    isDeleted: isDeleted
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteeMembersViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"committee\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeeMembersList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <GridLayout columns=\"*, auto\" rows=\"auto, auto, auto, *\">\n                                    <StackLayout row=\"0\" colSpan=\"2\" orientation=\"horizontal\">\n                                        <Label text=\"{{ fullName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                        <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ memberTypeCode === 'M' ? 'visible' : 'collapse' }}\" />\n                                    </StackLayout>\n                                    <Label row=\"1\" colSpan=\"2\" text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                    <Label row=\"2\" colSpan=\"2\" text=\"{{ personCompany }}\" textWrap=\"true\" class=\"list-view-item-sub\" visibility=\"{{ personCompany !== companyName ? 'visible' : 'collapse' }}\" />\n                                    <Label row=\"3\" col=\"0\" text=\"{{ designatedMember === 'N' ? positionCode === 10 ? memberType : position : positionCode === 10 ? memberType : position }}\" class=\"list-view-item-sub\" />\n                                    <Label row=\"3\" col=\"1\" text=\"{{ endDate === null ? 'Since ' + startDate : startDate + ' to ' + endDate }}\" class=\"list-view-item-sub\" />\n                                </GridLayout>\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ isDeleted ? 'collapse' : 'visible' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteesViewModel = __webpack_require__(139);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Committees";
            
        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Committees";
        // } else {
        //     page.actionBar.title = "Company Committees";
        // }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // committeesList.empty();
        
            // pageData.set("isLoading", true);
        
            // committeesList.load(navigationContext.companyId, isGroup, 1).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex + 1;

        committeesList.empty();
        
        pageData.set("isLoading", true);

        committeesList.load(navigationContext.companyId, isGroup, selectedIndex).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/committees/committeemembers/committeemembers-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, committeeListCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycommittees?companyId=" + companyId + "&isGroup=" + isGroup + "&committeeListCode=" + committeeListCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                viewModel.push({
                    companyId: committee.CompanyId,
                    companyName: committee.CompanyName,
                    committeeCode: committee.CommitteeCode,
                    committee: committee.Committee
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Committees\" />\n                    <SegmentedBarItem title=\"Contact Lists\" />\n                    <SegmentedBarItem title=\"Temporary Lists\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ committee }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

const AddressesViewModel = __webpack_require__(142);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var addressesList = new AddressesViewModel([]);

var pageData = new observableModule.fromObject({
    addressesList: addressesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        page.actionBar.title = "Addresses";
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            addressesList.empty();
        
            pageData.set("isLoading", true);
        
            addressesList.load(navigationContext.companyId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function AddressesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyaddresses?companyId=" + companyId + "&isGroup=N",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(address) {
                viewModel.push({
                    mainAddressesId: address.MainAddressesId,
                    companyId: address.CompanyId,
                    companyName: address.CompanyName,
                    companyId0: address.CompanyId0,
                    groupId: address.GroupId,
                    groupName: address.GroupName,
                    streetAddress: address.StreetAddress,
                    suite: address.Suite,
                    city: address.City,
                    stateCode: address.StateCode,
                    countryCode: address.CountryCode,
                    postalCode: address.PostalCode,
                    poBox: address.PoBox,
                    poBoxCityCode: address.PoBoxCityCode,
                    poBoxStateCode: address.PoBoxStateCode,
                    poBoxPostalCode: address.PoBoxPostalCode,
                    primaryAddress: address.PrimaryAddress,
                    phoneNumber: address.PhoneNumber
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = AddressesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ addressesList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout class=\"list-view-item\">\n                        <StackLayout visibility=\"{{ city !== null &amp;&amp; city.length > 0 ? 'visible' : 'collapse' }}\">\n                            <StackLayout orientation=\"horizontal\">\n                                <Label text=\"{{ streetAddress }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ primaryAddress === '1' ? 'visible' : 'collapse' }}\" />\n                            </StackLayout>\n                            <Label text=\"{{ city + ', ' + stateCode + ' ' + postalCode }}\" textWrap=\"true\" class=\"list-view-item-main\" />\n                            <Label text=\"{{ phoneNumber }}\" class=\"list-view-item-main\" />\n                        </StackLayout>\n                        <StackLayout visibility=\"{{ city !== null &amp;&amp; city.length > 0 &amp;&amp; poBoxCityCode !== null &amp;&amp; poBoxCityCode.length > 0 ? 'visible' : 'collapse' }}\">\n                            <Label text=\" \" textWrap=\"true\" class=\"list-view-item-main\" />\n                        </StackLayout>\n                        <StackLayout visibility=\"{{ poBoxCityCode !== null &amp;&amp; poBoxCityCode.length > 0 ? 'visible' : 'collapse' }}\">\n                            <Label text=\"{{ poBox }}\" textWrap=\"true\" class=\"list-view-item-main\" />\n                            <Label text=\"{{ poBoxCityCode + ', ' + poBoxStateCode + ' ' + poBoxPostalCode }}\" textWrap=\"true\" class=\"list-view-item-main\" />\n                        </StackLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

const CompaniesViewModel = __webpack_require__(145);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;
var loadData;

var companiesList = new CompaniesViewModel([]);

var pageData = new observableModule.fromObject({
    companiesList: companiesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        isGroup = navigationContext.isGroup;
        loadData = navigationContext.loadData;

        switch (loadData) {
            case "pacauthorization":
                // page.actionBar.title = "PAC Authorization";

                if (isGroup === "Y") {
                    page.actionBar.title = "Group PAC";
                } else {
                    page.actionBar.title = "Company PAC";
                }
                
                break;

            case "addresses":
                if (isGroup === "Y") {
                    page.actionBar.title = "Group Addresses";
                } else {
                    page.actionBar.title = "Company Addresses";
                }
                
                break;

            default:
                // page.actionBar.title = "PAC Authorization";

                if (isGroup === "Y") {
                    page.actionBar.title = "Group PAC";
                } else {
                    page.actionBar.title = "Company PAC";
                }
                
                break;

        }
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            companiesList.empty();
        
            pageData.set("isLoading", true);
        
            companiesList.load(loadData, navigationContext.companyId, isGroup).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;
        var moduleName;

        model.isGroup = isGroup;

        switch (loadData) {
            case "pacauthorization":
                moduleName = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
                
                break;

            case "addresses":
                moduleName = "companygroups/companygroup/companies/addresses/addresses-page";
                
                break;

            default:
                moduleName = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
                
                break;

        }

        const navigationEntry = {
            moduleName: moduleName,
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CompaniesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(loadData, companyId, isGroup) {
        var requestUrl;

        switch (loadData) {
            case "pacauthorization":
                requestUrl = global.apiBaseServiceUrl + "company/companypaceligiblecompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

            case "addresses":
                requestUrl = global.apiBaseServiceUrl + "company/companyaddresscompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

            default:
                requestUrl = global.apiBaseServiceUrl + "company/companypaceligiblecompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

        }

        return http.request({
            url: requestUrl,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    companyId0: company.CompanyId0,
                    groupId: company.GroupId,
                    groupName: company.GroupName
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CompaniesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ companiesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

const PacAuthorizationViewModel = __webpack_require__(148);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var pacAuthorizationList = new PacAuthorizationViewModel([]);

var pageData = new observableModule.fromObject({
    pacAuthorizationList: pacAuthorizationList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        page.actionBar.title = "PAC Authorization";
                
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            pacAuthorizationList.empty();
        
            pageData.set("isLoading", true);
        
            pacAuthorizationList.load(navigationContext.companyId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function PacAuthorizationViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companypaceligible?companyId=" + companyId + "&isGroup=N",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(pacEligible) {
                viewModel.push({
                    companyId: pacEligible.CompanyId,
                    companyName: pacEligible.CompanyName,
                    companyId0: pacEligible.CompanyId0,
                    groupId: pacEligible.GroupId,
                    groupName: pacEligible.GroupName,
                    year: pacEligible.Year,
                    eligible: pacEligible.Eligible,
                    pacGoal: pacEligible.PacGoal,
                    pacStartDate: pacEligible.PacStartDate,
                    fullName: pacEligible.FullName,
                    companyPacEligibleId: pacEligible.CompanyPacEligibleId
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = PacAuthorizationViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ pacAuthorizationList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"auto, auto, *\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ year }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;&nbsp;\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ eligible === 'Y' ? 'Authorized' : eligible === 'N' ? 'Not Authorized' : 'Not Reported' }}\" style=\"{{ eligible === 'Y' ? '' : eligible === 'N' ? '' : 'color: #666; font-style: italic;' }}\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

const CompanyGroupViewModel = __webpack_require__(151);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var companyGroupList = new CompanyGroupViewModel([]);

var pageData = new observableModule.fromObject({
    companyGroupList: companyGroupList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    isGroup = navigationContext.isGroup;
        
    if (isGroup === "Y") {
        page.actionBar.title = "Group";
    } else {
        page.actionBar.title = "Company";
    }
    
    var companyName = page.getViewById("companyName");
    
    companyName.text = navigationContext.companyName;

    if (args.isBackNavigation) {
        // Do Nothing on Back Navigation
    } else {
        companyGroupList.empty();

        companyGroupList.load(isGroup);

        page.bindingContext = pageData;
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args)
{
    try
    {
        var index = args.index;
        var item = companyGroupList.getItem(index);

        navigationContext.isGroup = isGroup;
        navigationContext.loadData = item.loadData;
        
        const navigationEntry = {
            moduleName: item.navigateTo,
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var ObservableArray = __webpack_require__(14).ObservableArray;

function CompanyGroupViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(isGroup) {
        var data;

        var premiumsTitle;
        var pacAuthorizationNavigateTo;
        var addressesNavigateTo;

        if (global.isProfileAccounting) {
            premiumsTitle = "Premiums & Assessments";
        } else {
            premiumsTitle = "Premiums";
        }

        if (isGroup === "Y") {
            pacAuthorizationNavigateTo = "companygroups/companygroup/companies/companies-page";
            addressesNavigateTo = "companygroups/companygroup/companies/companies-page"; 
        } else {
            pacAuthorizationNavigateTo = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
            addressesNavigateTo = "companygroups/companygroup/companies/addresses/addresses-page";
        }

        if (global.isProfileEngagement)
        {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page", "loadData" : ""},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page", "loadData" : ""},
                {"title": "People", "navigateTo": "people/people-page", "loadData" : ""},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page", "loadData" : ""},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarktypes/remarktypes-page", "loadData" : ""},
                {"title": premiumsTitle, "navigateTo": "companygroups/companygroup/premiums/premiums-page", "loadData" : ""},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page", "loadData" : ""},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page", "loadData" : ""},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page", "loadData" : ""},
                {"title": "PAC Authorization", "navigateTo": pacAuthorizationNavigateTo, "loadData" : "pacauthorization"},
                {"title": "Addresses", "navigateTo": addressesNavigateTo, "loadData" : "addresses"}
            ];
        }
        else
        {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page", "loadData" : ""},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page", "loadData" : ""},
                {"title": "People", "navigateTo": "people/people-page", "loadData" : ""},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page", "loadData" : ""},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarktypes/remarktypes-page", "loadData" : ""},
                {"title": premiumsTitle, "navigateTo": "companygroups/companygroup/premiums/premiums-page", "loadData" : ""},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page", "loadData" : ""},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page", "loadData" : ""},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page", "loadData" : ""},
                {"title": "Addresses", "navigateTo": addressesNavigateTo, "loadData" : "addresses"}
            ];
        }

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo,
                loadData: dataItem.loadData
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = CompanyGroupViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" width=\"100%\">\n            <ListView items=\"{{ companyGroupList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ title }}\" verticalAlignment=\"middle\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" verticalAlignment=\"middle\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

const ContactsViewModel = __webpack_require__(154);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var contactsList = new ContactsViewModel([]);

var pageData = new ObservableModule.fromObject({
    contactsList: contactsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = navigationContext.contactType;
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            contactsList.empty();

            pageData.set("isLoading", true);

            contactsList.load(navigationContext.companyId, isGroup, navigationContext.contactCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "people/person/person-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function ContactsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, contactCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycontacts?companyId=" + companyId + "&isGroup=" + isGroup + "&contactCode=" + contactCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            var prevCompanyName = "";

            data.forEach(function(person) {
                var showCompanyHeader = false;
                var webAccessEndDate;
                var bio;

                if (prevCompanyName !== person.CompanyName) {
                    showCompanyHeader = true;
                }

                if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                    webAccessEndDate = null;
                } else {
                    var spaceIndex = person.WebAccessEndDate.indexOf(" ");

                    if (spaceIndex === -1)
                    {
                        webAccessEndDate = person.WebAccessEndDate;
                    }
                    else
                    {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }
                }
                
                // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                    bio = "";
                } else {
                    bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
                }

                viewModel.push({
                    personId: person.PersonId,
                    prefix: person.Prefix,
                    firstName: person.FirstName,
                    middleName: person.MiddleName,
                    lastName: person.LastName,
                    suffix: person.Suffix,
                    fullName: person.FullName,
                    informalSalutation: person.InformalSalutation,
                    title: person.Title,
                    personCompany: person.PersonCompany,
                    companyId: person.CompanyId,
                    companyName: person.CompanyName,
                    companyId0: person.CompanyId0,
                    groupId: person.GroupId,
                    groupName: person.GroupName,
                    webAccessCode: person.WebAccessCode,
                    webAccessGroupType: person.WebAccessGroupType,
                    webAccessEndDate: webAccessEndDate,
                    webAccessComment: person.WebAccessComment,
                    webAccess: person.WebAccess,
                    webRegistered: person.WebRegistered,
                    logonId: person.LogonId,
                    departmentId: person.DepartmentId,
                    department: person.Department,
                    supervisorId: person.SupervisorId,
                    supervisor: person.Supervisor,
                    ddScopeId: person.DdScopeId,
                    ddScope: person.DdScope,
                    ddFormatId: person.DdFormatId,
                    ddFormat: person.DdFormat,
                    profileReportStatusCode: person.ProfileReportStatusCode,
                    profileReportStatus: person.ProfileReportStatus,
                    profileChangesNeeded: person.ProfileChangesNeeded,
                    profileReportDate: person.ProfileReportDate,
                    lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                    lastPasswordChangeDate: person.LastPasswordChangeDate,
                    mainAddressesId: person.MainAddressesId,
                    streetAddress: person.StreetAddress,
                    address1: person.Address1,
                    address2: person.Address2,
                    city: person.City,
                    stateCode: person.StateCode,
                    state: person.State,
                    postalCode: person.PostalCode,
                    countryCode: person.CountryCode,
                    country: person.Country,
                    poBox: person.PoBox,
                    poBoxCity: person.PoBoxCity,
                    poBoxStateCode: person.PoBoxStateCode,
                    poBoxState: person.PoBoxState,
                    poBoxPostalCode: person.PoBoxPostalCode,
                    emailAddress: person.EmailAddress,
                    workPhone: person.WorkPhone,
                    extension: person.Extension,
                    cellPhone: person.CellPhone,
                    fax: person.Fax,
                    bio: bio,
                    secretaryId: person.SecretaryId,
                    secretary: person.Secretary,
                    secretaryTitle: person.SecretaryTitle,
                    secretaryEmailAddress: person.SecretaryEmailAddress,
                    secretaryWorkPhone: person.SecretaryWorkPhone,
                    secretaryExtension: person.SecretaryExtension,
                    secretaryFax: person.SecretaryFax,
                    contactCode: person.ContactCode,
                    contactType: person.ContactType,
                    primaryRep: person.PrimaryRep,
                    sortOrder: person.SortOrder,
                    isGroup: isGroup,
                    showCompanyHeader: showCompanyHeader
                });

                prevCompanyName = person.CompanyName;
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ContactsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ contactsList }}\" itemTap=\"onItemTap\" height=\"100%\" separatorColor=\"transparent\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <StackLayout class=\"list-view-item-header\" visibility=\"{{ isGroup === 'Y' &amp;&amp; showCompanyHeader ? 'visible' : 'collapse' }}\">\n                            <Label text=\"{{ companyName }}\" textWrap=\"true\" />\n                        </StackLayout>\n                        <StackLayout class=\"list-view-item-header-separator\" visibility=\"{{ showCompanyHeader ? 'collapse' : 'visible' }}\"></StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <StackLayout orientation=\"horizontal\">\n                                    <Label text=\"{{ fullName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                    <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ primaryRep === '1' ? 'visible' : 'collapse' }}\" />\n                                </StackLayout>\n                                <Label text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                <Label text=\"{{ personCompany }}\" textWrap=\"true\" class=\"list-view-item-sub\" visibility=\"{{ personCompany !== companyName ? 'visible' : 'collapse' }}\" />\n                                <Label text=\"{{ workPhone }}\" class=\"list-view-item-sub\" visibility=\"{{ workPhone.length === 0 ? 'collapse' : 'visible' }}\" />\n                                <Label text=\"{{ emailAddress }}\" class=\"list-view-item-sub\" visibility=\"{{ emailAddress.length === 0 ? 'collapse' : 'visible' }}\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

const ContactTypesViewModel = __webpack_require__(157);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var contactTypesList = new ContactTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    contactTypesList: contactTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
            
        page.actionBar.title = "Contact Types";
        
        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Contacts";
        // } else {
        //     page.actionBar.title = "Company Contacts";
        // }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        contactTypesList.empty();

        pageData.set("isLoading", true);

        contactTypesList.load(navigationContext.companyId, isGroup).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/contacttypes/contacts/contacts-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function ContactTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycontacttypes?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(contactType) {
                viewModel.push({
                    companyId: contactType.CompanyId,
                    companyName: contactType.CompanyName,
                    contactCode: contactType.ContactCode,
                    contactType: contactType.ContactType,
                    sortOrder: contactType.SortOrder
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ContactTypesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ contactTypesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ contactType }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

const HiearchyViewModel = __webpack_require__(160);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);
var page;

var hierarchyList = new HiearchyViewModel([]);

var pageData = new observableModule.fromObject({
    hierarchyList: hierarchyList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Group Membership";

        var navigationContext = page.navigationContext;
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            hierarchyList.empty();
        
            pageData.set("isLoading", true);
        
            hierarchyList.load(navigationContext.companyId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = "N";

        const navigationEntry = {
            moduleName: "companygroups/companygroup/companygroup-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function HierarchyViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyhierarchy?companyId=" + companyId + "&isGroup=N",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                var autoCoSelect;
                var inclinProfile;

                if (company.AutoCoSelect === "Y") {
                    autoCoSelect = "Yes";
                } else {
                    autoCoSelect = "No";
                }

                if (company.InclinProfile === "Y") {
                    inclinProfile = "Yes";
                } else {
                    inclinProfile = "No";
                }

                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    companyId0: company.CompanyId0,
                    groupId: company.GroupId,
                    groupName: company.GroupName,
                    holdCompanyId: company.HoldCompanyId,
                    holdCompany: company.HoldCompany,
                    mapCompanyId: company.MapCompanyId,
                    mapCompany: company.MapCompany,
                    autoCoSelect: autoCoSelect,
                    inclinProfile: inclinProfile,
                    compRemovedDate: company.CompRemovedDate,
                    numberedAmBest: company.NumberedAmBest,
                    numberedNaic: company.NumberedNaic.toUpperCase(),
                    numberedNaii: company.NumberedNaii,
                    statusCode: company.StatusCode,
                    status: company.Status,
                    companyFoundedDate: company.CompanyFoundedDate,
                    domiciledStateCode: company.DomiciledStateCode,
                    domiciledState: company.DomiciledState,
                    domiciledCountryCode: company.DomiciledCountryCode,
                    domiciledCountry: company.DomiciledCountry,
                    marketingType: company.MarketingType,
                    structure: company.Structure,
                    membershipTypeCode: company.MembershipTypeCode,
                    membershipType: company.MembershipType,
                    isMember: company.IsMember,
                    webAccessCode: company.WebAccessCode,
                    webAccess: company.WebAccess,
                    webAccessEndDate: company.WebAccessEndDate,
                    affiliations: company.Affiliations,
                    subGroupFlag: company.SubGroupFlag,
                    subGroupCompanyId: company.SubGroupCompanyId,
                    accountManagerId: company.AccountManagerId,
                    accountManager: company.AccountManager //,
                    //endDate: company.EndDate,
                    //pacEligible: company.PacEligible,
                    //sortOrder: company.SortOrder
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = HierarchyViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ hierarchyList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ companyName }}\" textWrap=\"true\" style=\"{{ subGroupFlag === 'N' ? 'margin-left: 30;' : subGroupFlag === 'Y' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-main-top\" />\n                                <Label text=\"{{ membershipType }}\" style=\"{{ subGroupFlag === 'N' ? 'margin-left: 30;' : subGroupFlag === 'Y' ? 'margin-left: 15;' : 'margin-left: 0;' }}\" class=\"list-view-item-sub\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

const MeetingAttendeesViewModel = __webpack_require__(163);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var meetingAttendeesList = new MeetingAttendeesViewModel([]);

var pageData = new ObservableModule.fromObject({
    meetingAttendeesList: meetingAttendeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Attendees";

        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Meetings";
        // } else {
        //     page.actionBar.title = "Company Meetings";
        // }
    
        var companyName = page.getViewById("companyName");
        var meeting = page.getViewById("meeting");
        
        companyName.text = navigationContext.companyName;
        meeting.text = navigationContext.meeting; // + "(" + navigationContext.companyId + " : " + isGroup + " : " + navigationContext.meetingCode + ")";

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            meetingAttendeesList.empty();

            pageData.set("isLoading", true);

            meetingAttendeesList.load(navigationContext.companyId, isGroup, navigationContext.meetingCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        if (!model.isDeleted) {
            const navigationEntry = {
                moduleName: "people/person/person-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function MeetingAttendeesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, meetingCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companymeetingattendees?companyId=" + companyId + "&isGroup=" + isGroup + "&meetingCode=" + meetingCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(person) {
                var isDeleted = false;
                var startDate;
                var endDate;
                var webAccessEndDate;
                var bio;

                if (person.FullName.indexOf("(Deleted)") > 0) {
                    isDeleted = true;
                }

                if (person.StartDate === null || person.StartDate.length === 0) {
                    startDate = null;
                } else {
                    startDate = person.StartDate.substring(0, person.StartDate.indexOf(" "));
                }

                if (person.EndDate === null || person.EndDate.length === 0) {
                    endDate = null;
                } else {
                    endDate = person.EndDate.substring(0, person.EndDate.indexOf(" "));
                }

                if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                    webAccessEndDate = null;
                } else {
                    var spaceIndex = person.WebAccessEndDate.indexOf(" ");

                    if (spaceIndex === -1)
                    {
                        webAccessEndDate = person.WebAccessEndDate;
                    }
                    else
                    {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }
                }
                
                // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                    bio = "";
                } else {
                    bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
                }

                viewModel.push({
                    personId: person.PersonId,
                    prefix: person.Prefix,
                    firstName: person.FirstName,
                    middleName: person.MiddleName,
                    lastName: person.LastName,
                    suffix: person.Suffix,
                    fullName: person.FullName,
                    informalSalutation: person.InformalSalutation,
                    title: person.Title,
                    personCompany: person.PersonCompany,
                    companyId: person.CompanyId,
                    companyName: person.CompanyName,
                    companyId0: person.CompanyId0,
                    groupId: person.GroupId,
                    groupName: person.GroupName,
                    webAccessCode: person.WebAccessCode,
                    webAccessGroupType: person.WebAccessGroupType,
                    webAccessEndDate: webAccessEndDate,
                    webAccessComment: person.WebAccessComment,
                    webAccess: person.WebAccess,
                    webRegistered: person.WebRegistered,
                    logonId: person.LogonId,
                    departmentId: person.DepartmentId,
                    department: person.Department,
                    supervisorId: person.SupervisorId,
                    supervisor: person.Supervisor,
                    ddScopeId: person.DdScopeId,
                    ddScope: person.DdScope,
                    ddFormatId: person.DdFormatId,
                    ddFormat: person.DdFormat,
                    profileReportStatusCode: person.ProfileReportStatusCode,
                    profileReportStatus: person.ProfileReportStatus,
                    profileChangesNeeded: person.ProfileChangesNeeded,
                    profileReportDate: person.ProfileReportDate,
                    lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                    lastPasswordChangeDate: person.LastPasswordChangeDate,
                    mainAddressesId: person.MainAddressesId,
                    streetAddress: person.StreetAddress,
                    address1: person.Address1,
                    address2: person.Address2,
                    city: person.City,
                    stateCode: person.StateCode,
                    state: person.State,
                    postalCode: person.PostalCode,
                    countryCode: person.CountryCode,
                    country: person.Country,
                    poBox: person.PoBox,
                    poBoxCity: person.PoBoxCity,
                    poBoxStateCode: person.PoBoxStateCode,
                    poBoxState: person.PoBoxState,
                    poBoxPostalCode: person.PoBoxPostalCode,
                    emailAddress: person.EmailAddress,
                    workPhone: person.WorkPhone,
                    extension: person.Extension,
                    cellPhone: person.CellPhone,
                    fax: person.Fax,
                    bio: bio,
                    secretaryId: person.SecretaryId,
                    secretary: person.Secretary,
                    secretaryTitle: person.SecretaryTitle,
                    secretaryEmailAddress: person.SecretaryEmailAddress,
                    secretaryWorkPhone: person.SecretaryWorkPhone,
                    secretaryExtension: person.SecretaryExtension,
                    secretaryFax: person.SecretaryFax,
                    meetingTypeCode: person.MeetingTypeCode,
                    meetingType: person.MeetingType,
                    meetingCode: person.MeetingCode,
                    meeting: person.Meeting,
                    AttendanceStatusCode: person.AttendanceStatusCode,
                    AttendanceStatus: person.AttendanceStatus,
                    startDate: startDate,
                    endDate: endDate,
                    isDeleted: isDeleted
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingAttendeesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"meeting\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ meetingAttendeesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ fullName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                <Label text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                <Label text=\"{{ personCompany }}\" textWrap=\"true\" class=\"list-view-item-sub\" visibility=\"{{ personCompany !== companyName ? 'visible' : 'collapse' }}\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ isDeleted ? 'collapse' : 'visible' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

const MeetingsViewModel = __webpack_require__(166);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var meetingsList = new MeetingsViewModel([]);

var pageData = new observableModule.fromObject({
    meetingsList: meetingsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Meetings";
            
        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Meetings";
        // } else {
        //     page.actionBar.title = "Company Meetings";
        // }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // meetingsList.empty();
        
            // pageData.set("isLoading", true);
        
            // meetingsList.load(navigationContext.companyId, isGroup, 1).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex + 1;

        // An index of 4 is for None and we do NOT display this type in the application.
        if (selectedIndex === 4) {
            selectedIndex += 1;
        }

        meetingsList.empty();
        
        pageData.set("isLoading", true);

        meetingsList.load(navigationContext.companyId, isGroup, selectedIndex).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/meetings/meetingattendees/meetingattendees-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, meetingTypeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companymeetings?companyId=" + companyId + "&isGroup=" + isGroup + "&meetingTypeCode=" + meetingTypeCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                viewModel.push({
                    companyId: meeting.CompanyId,
                    companyName: meeting.CompanyName,
                    meetingCode: meeting.MeetingCode,
                    meeting: meeting.Meeting
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Committee\" />\n                    <SegmentedBarItem title=\"Advocacy\" />\n                    <SegmentedBarItem title=\"Meeting\" />\n                    <SegmentedBarItem title=\"Webinar\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ meetingsList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ meeting }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteeMembershipViewModel = __webpack_require__(169);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var committeeMembershipList = new CommitteeMembershipViewModel([]);

var pageData = new observableModule.fromObject({
    committeeMembershipList: committeeMembershipList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        page.actionBar.title = "Committee Membership";
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // committeeMembershipList.empty();
        
            // pageData.set("isLoading", true);
        
            // committeeMembershipList.load(navigationContext.companyId, isGroup).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        committeeMembershipList.empty();
        
        pageData.set("isLoading", true);
    
        committeeMembershipList.load(navigationContext.companyId, isGroup).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteeMembershipViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companymetriccommittees?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    year: company.Year,
                    committeeCount: company.CommitteeCount,
                    attendeeCount: company.AttendeeCount
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteeMembershipViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-chart", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.series", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/PointLabelStyle", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.horizontalAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.verticalAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries.labelStyle", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/CategoricalAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.legend", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/LinearAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadLegendView", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.palettes", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/Palette", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/Palette.entries", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/PaletteEntry", function() { return __webpack_require__(23); });

module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:chart=\"nativescript-ui-chart\">\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" height=\"100%\">\n            <chart:RadCartesianChart height=\"100%\" width=\"100%\">\n                <chart:RadCartesianChart.series>\n                    <chart:BarSeries legendTitle=\"Distinct Committees\" showLabels=\"true\" seriesName=\"Bar\" valueProperty=\"committeeCount\" categoryProperty=\"year\" items=\"{{ committeeMembershipList }}\">\n                        <chart:BarSeries.labelStyle>\n                            <chart:PointLabelStyle margin=\"7\" fontStyle=\"Bold\" fillColor=\"transparent\" textSize=\"10\" textColor=\"white\" />\n                        </chart:BarSeries.labelStyle>\n                    </chart:BarSeries>\n                    <chart:BarSeries legendTitle=\"Distinct Members\" showLabels=\"true\" seriesName=\"Bar\" valueProperty=\"attendeeCount\" categoryProperty=\"year\" items=\"{{ committeeMembershipList }}\">\n                        <chart:BarSeries.labelStyle>\n                            <chart:PointLabelStyle margin=\"7\" fontStyle=\"Bold\" fillColor=\"transparent\" textSize=\"10\" textColor=\"white\" />\n                        </chart:BarSeries.labelStyle>\n                    </chart:BarSeries>\n                </chart:RadCartesianChart.series>\n                <chart:RadCartesianChart.horizontalAxis>\n                    <chart:CategoricalAxis />\n                </chart:RadCartesianChart.horizontalAxis>\n                <chart:RadCartesianChart.verticalAxis>\n                    <chart:LinearAxis majorStep=\"5\" />\n                </chart:RadCartesianChart.verticalAxis>\n                <chart:RadCartesianChart.legend>\n                    <chart:RadLegendView position=\"Bottom\" height=\"150\"/>\n                </chart:RadCartesianChart.legend>\n                <chart:RadCartesianChart.palettes>\n                    <chart:Palette seriesName=\"Bar\">\n                        <chart:Palette.entries>\n                            <chart:PaletteEntry fillColor=\"#cc2d30\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#44c8f5\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#35c4af\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#f68320\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#0a6fb0\" strokeColor=\"#666\"/>\n                        </chart:Palette.entries>\n                    </chart:Palette>\n                </chart:RadCartesianChart.palettes>\n            </chart:RadCartesianChart>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

const MeetingAttendanceViewModel = __webpack_require__(172);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var meetingAttendanceList = new MeetingAttendanceViewModel([]);

var pageData = new observableModule.fromObject({
    meetingAttendanceList: meetingAttendanceList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        page.actionBar.title = "Meeting Attendance";
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // meetingAttendanceList.empty();
        
            // pageData.set("isLoading", true);
        
            // meetingAttendanceList.load(navigationContext.companyId, isGroup).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        meetingAttendanceList.empty();
        
        pageData.set("isLoading", true);
    
        meetingAttendanceList.load(navigationContext.companyId, isGroup).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function MeetingAttendanceViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companymetricmeetings?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    year: company.Year,
                    meetingCount: company.MeetingCount,
                    attendeeCount: company.AttendeeCount
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingAttendanceViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-chart", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.series", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/PointLabelStyle", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries.labelStyle", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/CategoricalAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.legend", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/LinearAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadLegendView", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/RadCartesianChart.palettes", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/Palette", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/Palette.entries", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries.verticalAxis", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/PaletteEntry", function() { return __webpack_require__(23); });
global.registerModule("nativescript-ui-chart/BarSeries.horizontalAxis", function() { return __webpack_require__(23); });

module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:chart=\"nativescript-ui-chart\">\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" height=\"100%\">\n            <chart:RadCartesianChart height=\"100%\" width=\"100%\">\n                <chart:RadCartesianChart.series>\n                    <chart:BarSeries legendTitle=\"Distinct Meetings\" showLabels=\"true\" seriesName=\"Bar\" valueProperty=\"meetingCount\" categoryProperty=\"year\" items=\"{{ meetingAttendanceList }}\">\n                        <chart:BarSeries.labelStyle>\n                            <chart:PointLabelStyle margin=\"7\" fontStyle=\"Bold\" fillColor=\"transparent\" textSize=\"10\" textColor=\"white\" />\n                        </chart:BarSeries.labelStyle>\n                    </chart:BarSeries>\n                    <chart:BarSeries legendTitle=\"Distinct Attendees\" showLabels=\"true\" seriesName=\"Bar\" valueProperty=\"attendeeCount\" categoryProperty=\"year\" items=\"{{ meetingAttendanceList }}\">\n                        <chart:BarSeries.labelStyle>\n                            <chart:PointLabelStyle margin=\"7\" fontStyle=\"Bold\" fillColor=\"transparent\" textSize=\"10\" textColor=\"white\" />\n                        </chart:BarSeries.labelStyle>\n                    </chart:BarSeries>\n                </chart:RadCartesianChart.series>\n                <chart:BarSeries.horizontalAxis>\n                    <chart:CategoricalAxis />\n                </chart:BarSeries.horizontalAxis>\n                <chart:BarSeries.verticalAxis>\n                    <chart:LinearAxis majorStep=\"5\" />\n                </chart:BarSeries.verticalAxis>\n                <chart:RadCartesianChart.legend>\n                    <chart:RadLegendView position=\"Bottom\" height=\"150\"/>\n                </chart:RadCartesianChart.legend>\n                <chart:RadCartesianChart.palettes>\n                    <chart:Palette seriesName=\"Bar\">\n                        <chart:Palette.entries>\n                            <chart:PaletteEntry fillColor=\"#cc2d30\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#44c8f5\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#35c4af\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#f68320\" strokeColor=\"#666\"/>\n                            <chart:PaletteEntry fillColor=\"#0a6fb0\" strokeColor=\"#666\"/>\n                        </chart:Palette.entries>\n                    </chart:Palette>\n                    <chart:Palette seriesName=\"Line\">\n                        <chart:Palette.entries>\n                            <chart:PaletteEntry strokeColor=\"#FFCF40\" strokeWidth=\"3\"/>\n                        </chart:Palette.entries>\n                    </chart:Palette>\n                </chart:RadCartesianChart.palettes>\n            </chart:RadCartesianChart>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

const MetricsViewModel = __webpack_require__(175);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var metricsList = new MetricsViewModel([]);

var pageData = new observableModule.fromObject({
    metricsList: metricsList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    isGroup = navigationContext.isGroup;

    page.actionBar.title = "Metrics";
        
    // if (isGroup === "Y") {
    //     page.actionBar.title = "Group Metrics";
    // } else {
    //     page.actionBar.title = "Company Metrics";
    // }
    
    var companyName = page.getViewById("companyName");
    
    companyName.text = navigationContext.companyName;

    if (args.isBackNavigation) {
        // Do Nothing on Back Navigation
    } else {
        metricsList.empty();

        metricsList.load();

        page.bindingContext = pageData;
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args)
{
    try
    {
        var index = args.index;
        var item = metricsList.getItem(index);

        navigationContext.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: item.navigateTo,
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var dialogs = __webpack_require__(8);

function MetricsViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data = [
            {"title": "Committee Membership", "navigateTo": "companygroups/companygroup/metrics/committeemembership/committeemembership-page"},
            {"title": "Meeting Attendance", "navigateTo": "companygroups/companygroup/metrics/meetingattendance/meetingattendance-page"}
        ];

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = MetricsViewModel;
; 
if (false ) {} 

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" width=\"100%\">\n            <ListView items=\"{{ metricsList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ title }}\" verticalAlignment=\"middle\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" verticalAlignment=\"middle\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

const AdjustmentsViewModel = __webpack_require__(178);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var adjustmentsList = new AdjustmentsViewModel([]);

var pageData = new ObservableModule.fromObject({
    adjustmentsList: adjustmentsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        if (navigationContext.isManual === "Y") {
            page.actionBar.title = "Other Adjustments";
        } else {
            page.actionBar.title = "Adjustments";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyNumber + ' ' + navigationContext.leadCompanyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            adjustmentsList.empty();

            pageData.set("isLoading", true);

            adjustmentsList.load(navigationContext.invoiceId, navigationContext.isManual).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function AdjustmentsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId, isManual) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoiceadjustments?invoiceId=" + invoiceId + "&isManual=" + isManual,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(adjustment) {
                viewModel.push({
                    invoiceId: adjustment.InvoiceId,
                    adjustmentDescription: adjustment.AdjustmentDescription,
                    adjustmentAmount: adjustment.AdjustmentAmount,
                    adjTypeMasterId: adjustment.AdjTypeMasterId
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = AdjustmentsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title-multi\">\n            <Label id=\"companyName\" text=\"\" textWrap=\"true\" style=\"margin-bottom: 8; margin-top: 8;\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ adjustmentsList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ adjustmentDescription }}\" textWrap=\"true\" class=\"list-view-item-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ adjustmentAmount | currencyConverter }}\" verticalAlignment=\"bottom\" class=\"list-view-item-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

const AffiliatesViewModel = __webpack_require__(181);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var affiliatesList = new AffiliatesViewModel([]);

var pageData = new ObservableModule.fromObject({
    affiliatesList: affiliatesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Companies Included";
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyNumber + ' ' + navigationContext.leadCompanyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            affiliatesList.empty();

            pageData.set("isLoading", true);

            affiliatesList.load(navigationContext.invoiceId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function AffiliatesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoiceaffiliates?invoiceId=" + invoiceId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(affiliate) {
                viewModel.push({
                    invoiceId: affiliate.InvoiceId,
                    companyNumber: affiliate.CompanyNumber,
                    companyName: affiliate.CompanyName,
                    affiliateDwp: affiliate.AffiliateDwp
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = AffiliatesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title-multi\">\n            <Label id=\"companyName\" text=\"\" textWrap=\"true\" style=\"margin-bottom: 8; margin-top: 8;\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ affiliatesList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ affiliateDwp | currencyConverter }}\" verticalAlignment=\"bottom\" class=\"list-view-item-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

const BreakdownViewModel = __webpack_require__(184);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var breakdownList = new BreakdownViewModel([]);

var pageData = new ObservableModule.fromObject({
    breakdownList: breakdownList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Assessment Breakdown";
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyNumber + ' ' + navigationContext.leadCompanyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            breakdownList.empty();

            pageData.set("isLoading", true);

            breakdownList.load(navigationContext.invoiceId, navigationContext.isReinsurer).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function BreakdownViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId, isReinsurer) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoicebreakdown?invoiceId=" + invoiceId + "&isReinsurer=" + isReinsurer,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(breakdown) {
                var upperLimitPremVol;

                if (isReinsurer === "Y") {
                    upperLimitPremVol = breakdown.UpperLimitPremVol;
                } else {
                    if (breakdown.UpperLimitPremVol === 10000000000000000 || (breakdown.Dwp > breakdown.LowerLimitPremVol && breakdown.Dwp < breakdown.UpperLimitPremVol)) {
                        upperLimitPremVol = breakdown.Dwp;
                    } else {
                        upperLimitPremVol = breakdown.UpperLimitPremVol;
                    }
                }

                viewModel.push({
                    invoiceId: breakdown.InvoiceId,
                    ratePerPremVol: Number(breakdown.RatePerPremVol).toFixed(2),
                    lowerLimitPremVol: breakdown.LowerLimitPremVol,
                    upperLimitPremVol: upperLimitPremVol,
                    assessmentPremVol: breakdown.AssessmentPremVol,
                    dwp: breakdown.Dwp
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = BreakdownViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title-multi\">\n            <Label id=\"companyName\" text=\"\" textWrap=\"true\" style=\"margin-bottom: 8; margin-top: 8;\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ breakdownList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item-small\">\n                            <StackLayout row=\"0\" col=\"0\" orientation=\"horizontal\">\n                                <Label text=\"{{ lowerLimitPremVol | currencyConverter() }}\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                                <Label text=\"-\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                                <Label text=\"{{ upperLimitPremVol | currencyConverter() }}\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                                <Label text=\"@$\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                                <Label text=\"{{ ratePerPremVol }}\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                                <Label text=\"/MM\" textWrap=\"true\" class=\"list-view-item-top-small\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-top-small\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ assessmentPremVol | currencyConverter }}\" verticalAlignment=\"bottom\" class=\"list-view-item-top-small\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);

var page;
var navigationContext;

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    page.actionBar.title = "Invoice";
    
    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onBreakdownTap(args) {
    try {
        try {
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/invoice/breakdown/breakdown-page",
                context: navigationContext,
                clearHistory: false
            };
    
            frameModule.topmost().navigate(navigationEntry);
        } catch(e) {
            dialogs.alert(e);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAdjustmentsTap(args) {
    try {
        navigationContext.isManual = "N";

        const navigationEntry = {
            moduleName: "companygroups/companygroup/premiums/invoice/adjustments/adjustments-page",
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onOtherAdjustmentsTap(args) {
    try {
        navigationContext.isManual = "Y";

        const navigationEntry = {
            moduleName: "companygroups/companygroup/premiums/invoice/adjustments/adjustments-page",
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAffiliatesTap(args) {
    try {
        const navigationEntry = {
            moduleName: "companygroups/companygroup/premiums/invoice/affiliates/affiliates-page",
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onBreakdownTap = onBreakdownTap;
exports.onAdjustmentsTap = onAdjustmentsTap;
exports.onOtherAdjustmentsTap = onOtherAdjustmentsTap;
exports.onAffiliatesTap = onAffiliatesTap;
; 
if (false ) {} 

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <ScrollView>\n        <GridLayout columns=\"*\" rows=\"auto, *\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title-multi\">\n                <Label id=\"companyName\" text=\"{{ companyNumber + ' ' + leadCompanyName }}\" textWrap=\"true\" style=\"margin-bottom: 8; margin-top: 8;\" />\n            </StackLayout>\n            <StackLayout row=\"1\" col=\"0\">\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <GridLayout columns=\"*, auto\" rows=\"auto\" verticalAlignment=\"bottom\">\n                        <Label row=\"0\" col=\"0\" text=\"{{ 'INVOICE #' + invoiceId }}\" />\n                        <Label row=\"0\" col=\"1\" text=\"{{ invoiceDate }}\" horizontalAlignment=\"right\" />\n                    </GridLayout>\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Assessment Period\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ assessmentPeriod }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"INVOICE SUMMARY\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom-short\">\n                    <Label row=\"0\" col=\"0\" text=\"Semi-Annual Assessment\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ finalAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom-short\">\n                    <Label row=\"0\" col=\"0\" text=\"Payments Received\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ totalPayments | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-short\">\n                    <Label row=\"0\" col=\"0\" text=\"Previous Balance\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ previousBalance | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Total Balance Due\" class=\"list-view-item-left-bold\" />\n                    <Label row=\"0\" col=\"1\" text=\"&nbsp;\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"2\" text=\"{{ balanceDue | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right-bold\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"INVOICE DETAILS\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : reinsurerCalcTypeId === '2' ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"R/I Assumed Premium\" class=\"list-view-item-left-bold\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ adjustedDwp | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right-bold\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : reinsurerCalcTypeId === '2' ? 'collapse' : 'visible' }}\">\n                    <StackLayout row=\"0\" col=\"0\">\n                        <Label text=\"Total Direct Written Premium\" class=\"list-view-item-left-bold\" />\n                        <Label text=\"(per statutory page 14)\" class=\"list-view-item-left-small\" />\n                    </StackLayout>\n                    <Label row=\"0\" col=\"1\" text=\"{{ adjustedDwp | currencyConverter() }}\" horizontalAlignment=\"right\" verticalAlignment=\"top\" class=\"list-view-item-right-bold\" />\n                </GridLayout>\n                <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ fixedAssessment === 'Y' ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Fixed Assessment Per Customer Agreement\" textWrap=\"true\" class=\"list-view-item-left-bold\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, auto, *\" rows=\"auto\" tap=\"onBreakdownTap\" class=\"list-view-item-form-bottom-short\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : reinsurerCalcTypeId === '2' ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"R/I Assessment Breakdown\" class=\"list-view-item-left-bold\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ totalBreakdowns === 0 ? 'collapse' : 'visible' }}\" />\n                    <Label row=\"0\" col=\"2\" text=\"{{ totalBreakdowns | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, auto, *\" rows=\"auto\" tap=\"onBreakdownTap\" class=\"list-view-item-form-bottom-short\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : reinsurerCalcTypeId === '2' ? 'collapse' : 'visible' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Total Assessment Breakdown\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ totalBreakdowns === 0 ? 'collapse' : 'visible' }}\" />\n                    <Label row=\"0\" col=\"2\" text=\"{{ totalBreakdowns | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-short\" visibility=\"{{ fixedAssessment === 'Y' || reinsurerCalcTypeId === '2' ? 'collapse' : 'visible' }}\">\n                    <StackLayout row=\"0\" col=\"0\" orientation=\"horizontal\">\n                        <Label text=\"States Charged ( \" class=\"list-view-item-left\" />\n                        <Label text=\"{{ stateCount }}\" class=\"list-view-item-left-small\" />\n                        <Label text=\" @ \" class=\"list-view-item-left-small\" />\n                        <Label text=\"{{ stateCountRate | currencyConverter() }}\" class=\"list-view-item-left-small\" />\n                        <Label text=\" / State\" class=\"list-view-item-left-small\" />\n                        <Label text=\" )\" class=\"list-view-item-left\" />\n                    </StackLayout>\n                    <Label row=\"0\" col=\"1\" text=\"{{ stateAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ fixedAssessment === 'Y' || reinsurerCalcTypeId === '2' ? 'collapse' : 'visible' }}\">\n                    <StackLayout row=\"0\" col=\"0\">\n                        <Label text=\"Annual Assessment\" class=\"list-view-item-left-bold\" />\n                        <Label text=\"(Breakdown + States)\" class=\"list-view-item-left-small\" />\n                    </StackLayout>\n                    <Label row=\"0\" col=\"1\" text=\"{{ annualAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" \n                        verticalAlignment=\"top\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom-short\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : 'visible' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Semi-Annual Base Assessment\" class=\"list-view-item-left-bold\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ semiAnnualAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" \n                        class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, auto, *\" rows=\"auto\" tap=\"onAdjustmentsTap\" class=\"list-view-item-form-short\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : 'visible' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Total Adjustments\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ totalAdjustments === 0 ? 'collapse' : 'visible' }}\" />\n                    <Label row=\"0\" col=\"2\" text=\"{{ totalAdjustments | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : 'visible' }}\">\n                    <StackLayout row=\"0\" col=\"0\">\n                        <Label text=\"Subtotal\" class=\"list-view-item-left-bold\" />\n                        <Label text=\"(Semi-Annual Base - Adjustments)\" class=\"list-view-item-left-small\" />\n                    </StackLayout>\n                    <Label row=\"0\" col=\"1\" text=\"{{ semiAnnualAdjustedAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" \n                        verticalAlignment=\"top\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, auto, *\" rows=\"auto\" tap=\"onOtherAdjustmentsTap\" class=\"list-view-item-form-short\" visibility=\"{{ fixedAssessment === 'Y' ? 'collapse' : 'visible' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Total Other Adjustments\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ totalManualAdjustments === 0 ? 'collapse' : 'visible' }}\" />\n                    <Label row=\"0\" col=\"2\" text=\"{{ totalManualAdjustments | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Total Semi-Annual Assessment\" class=\"list-view-item-left-bold\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ finalAssessment | currencyConverter() }}\" horizontalAlignment=\"right\" verticalAlignment=\"top\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"COMPANIES INCLUDED\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" tap=\"onAffiliatesTap\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"View Companies Included\" class=\"list-view-item-left\" style=\"font-style: italic;\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                </GridLayout>\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

const LinesViewModel = __webpack_require__(189);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var linesList = new LinesViewModel([]);

var pageData = new observableModule.fromObject({
    linesList: linesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
            
        if (isGroup === "Y") {
            page.actionBar.title = "Group Lines";
        } else {
            page.actionBar.title = "Company Lines";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex;
        var sort;

        if (selectedIndex === 0) {
            sort = "dwp";
        } else {
            sort = "alpha";
        }

        linesList.empty();
        
        pageData.set("isLoading", true);

        linesList.load(navigationContext.companyId, isGroup, sort).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        if (isGroup === "Y") {
            var view = args.view;
            var model = view.bindingContext;

            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/lines/written/written-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function LinesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, sort) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentlines?companyId=" + companyId + "&isGroup=" + isGroup + "&sort=" + sort + "&rank=51",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(line) {
                viewModel.push({
                    companyId: line.CompanyId,
                    companyName: line.CompanyName,
                    lineOfBusinessId: line.LineOfBusinessId,
                    lineOfBusiness: line.LineOfBusiness,
                    assessedDwp: line.AssessedDwp,
                    isGroup: isGroup
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = LinesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Assessed DWP\" />\n                    <SegmentedBarItem title=\"Alphabetical\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ linesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ lineOfBusiness }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"{{ assessedDwp | currencyConverter() }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ isGroup === 'Y' ? 'visible' : 'collapse' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

const WrittenViewModel = __webpack_require__(192);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var writtenList = new WrittenViewModel([]);

var pageData = new ObservableModule.fromObject({
    writtenList: writtenList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        if (isGroup === "Y") {
            page.actionBar.title = "Group Line";
        } else {
            page.actionBar.title = "Company Line";
        }
    
        var companyName = page.getViewById("companyName");
        var lineOfBusiness = page.getViewById("lineOfBusiness");
        
        companyName.text = navigationContext.companyName;
        lineOfBusiness.text = navigationContext.lineOfBusiness;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            writtenList.empty();

            pageData.set("isLoading", true);

            writtenList.load(navigationContext.companyId, isGroup, navigationContext.lineOfBusinessId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function WrittenViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, lineOfBusinessId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentlineswritten?companyId=" + companyId + "&isGroup=" + isGroup + "&lineOfBusinessId=" + lineOfBusinessId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(line) {
                viewModel.push({
                    companyId: line.CompanyId,
                    companyName: line.CompanyName,
                    companyId0: line.CompanyId0,
                    groupId: line.GroupId,
                    groupName: line.GroupName,
                    lineOfBusinessId: line.LineOfBusinessId,
                    lineOfBusiness: line.LineOfBusiness,
                    assessedDwp: line.AssessedDwp
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = WrittenViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"lineOfBusiness\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ writtenList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ assessedDwp | currencyConverter }}\" verticalAlignment=\"bottom\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const PremiumsViewModel = __webpack_require__(195);
const InvoicesViewModel = __webpack_require__(196);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var premiums = new PremiumsViewModel([]);
var invoicesList = new InvoicesViewModel([]);

var pageData = new ObservableModule.fromObject({
    premiums: premiums,
    invoicesList: invoicesList,
    isProfileAccounting: global.isProfileAccounting,
    isGroup: isGroup,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        if (global.isProfileAccounting) {
            page.actionBar.title = "Premiums & Assessents";
        } else {
            page.actionBar.title = "Premiums";
        }
    
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            premiums.empty();
            invoicesList.empty();
        
            pageData.set("isLoading", true);

            // if (navigationContext.companyId === navigationContext.groupId && navigationContext.companyId === navigationContext.companyId0) {
            //     isGroup = "Y";
            // }

            premiums.load(navigationContext.companyId, isGroup).then(function () {
                if (premiums.companyId !== null) {
                    invoicesList.load(navigationContext.companyId, isGroup).then(function () {
                        pageData.set("isLoading", false);
                    });
                } else {
                    pageData.set("isLoading", false);
                }
                
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "companygroups/companygroup/premiums/invoice/invoice-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onStatesTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext.premiums;

        if (model.companyId !== null) {
            model.isGroup = isGroup;
            
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/states/states-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onLinesTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext.premiums;

        if (model.companyId !== null) {
            model.isGroup = isGroup;
            
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/lines/lines-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
exports.onStatesTap = onStatesTap;
exports.onLinesTap = onLinesTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function PremiumsViewModel() {
    const viewModel = ObservableModule.fromObject({
        companyId: null,
        companyName: "",
        companyId0: null,
        groupId: null,
        groupName: "",
        leadCompanyId: null,
        leadCompanyName: "",
        assessmentYear: "",
        dwpYear: "",
        totalDwp: null,
        excludedDwp: "",
        assessedDwp: null,
        totalAssessment: "",
        stateCount: "",
        lineCount: "",
    
        load: function(companyId, isGroup) {
            return http.request({
                url: global.apiBaseServiceUrl + "company/companyassessments?companyId=" + companyId + "&isGroup=" + isGroup,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);

                if (data[0].CompanyId !== undefined && data[0].CompanyId !== null)
                {
                    viewModel.companyId = data[0].CompanyId;
                    viewModel.companyName = data[0].CompanyName;
                    viewModel.companyId0 = data[0].CompanyId0;
                    viewModel.groupId = data[0].GroupId;
                    viewModel.groupName = data[0].GroupName;
                    viewModel.leadCompanyId = data[0].LeadCompanyId;
                    viewModel.leadCompanyName = data[0].LeadCompanyName;
                    viewModel.assessmentYear = data[0].AssessmentYear;
                    viewModel.dwpYear = data[0].DwpYear;
                    viewModel.totalDwp = data[0].TotalDwp;
                    viewModel.excludedDwp = data[0].ExcludedDwp;
                    viewModel.assessedDwp = data[0].AssessedDwp;
                    viewModel.totalAssessment = data[0].TotalAssessment;
                    viewModel.stateCount = data[0].StateCount;
                    viewModel.lineCount = data[0].LineCount;
                }
                else
                {
                    // undefined or null data.CompanyId returned.
                    viewModel.companyId = null;
                    viewModel.companyName = "";
                    viewModel.companyId0 = null;
                    viewModel.groupId = null;
                    viewModel.groupName = "";
                    viewModel.leadCompanyId = null;
                    viewModel.leadCompanyName = "";
                    viewModel.assessmentYear = "";
                    viewModel.dwpYear = "";
                    viewModel.totalDwp = null;
                    viewModel.excludedDwp = "";
                    viewModel.assessedDwp = null;
                    viewModel.totalAssessment = "";
                    viewModel.stateCount = "";
                    viewModel.lineCount = "";

                    // dialogs.alert("Company assessment information not available at this time.")
                }
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }, 

        empty: function() {
            viewModel.companyId = null;
            viewModel.companyName = "";
            viewModel.companyId0 = null;
            viewModel.groupId = null;
            viewModel.groupName = "";
            viewModel.leadCompanyId = null;
            viewModel.leadCompanyName = "";
            viewModel.assessmentYear = "";
            viewModel.dwpYear = "";
            viewModel.totalDwp = null;
            viewModel.excludedDwp = "";
            viewModel.assessedDwp = null;
            viewModel.totalAssessment = "";
            viewModel.stateCount = "";
            viewModel.lineCount = "";
        }
    });

    return viewModel;
}

module.exports = PremiumsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function InvoicesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoices?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            data.forEach(function(invoice) {
                if (invoice.InvoiceDate == null)
                {
                   // Do nothing to return an empty array.
                }
                else
                {
                    var invoiceDateText = invoice.InvoiceDate;
                    var invoiceDate;
                    var invoiceDateFormatted;

                    if (invoiceDateText.indexOf(" ") > 0) {
                        invoiceDateText = invoiceDateText.substring(0, invoiceDateText.indexOf(" "))
                    }

                    invoiceDate = new Date(invoiceDateText);

                    invoiceDateFormatted = monthList[invoiceDate.getMonth()] + ' ' + invoiceDate.getDate() + ', ' + invoiceDate.getFullYear();
                
                    viewModel.push({
                        invoiceId: invoice.InvoiceId,
                        invoiceDate: invoiceDateFormatted.toUpperCase(),
                        leadCompanyId: invoice.LeadCompanyId,
                        leadCompanyName: invoice.LeadCompanyName,
                        companyNumber: invoice.CompanyNumber,
                        assessmentPeriodId: invoice.AssessmentPeriodId,
                        assessmentPeriod: invoice.AssessmentPeriod,
                        finalAssessment: invoice.FinalAssessment,
                        fixedAssessment: invoice.FixedAssessment,
                        totalPayments: -1 * Number(invoice.TotalPayments),
                        previousBalance: invoice.PreviousBalance,
                        balanceDue: invoice.BalanceDue,
                        reinsurerCalcTypeId: invoice.ReinsurerCalcTypeId,
                        adjustedDwp: invoice.AdjustedDwp,
                        stateCount: invoice.StateCount,
                        stateCountRate: invoice.StateCountRate,
                        stateAssessment: invoice.StateAssessment,
                        totalBreakdowns: invoice.TotalBreakdowns,
                        annualAssessment: invoice.AnnualAssessment,
                        semiAnnualAssessment: invoice.SemiAnnualAssessment,
                        totalAdjustments: invoice.TotalAdjustments,
                        semiAnnualAdjustedAssessment: invoice.SemiAnnualAdjustedAssessment,
                        totalManualAdjustments: invoice.TotalManualAdjustments
                    
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = InvoicesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*\" rows=\"auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, *\" height=\"100%\" width=\"100%\">\n                <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"DIRECT WRITTEN PREMIUMS\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout row=\"1\" col=\"0\" columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"{{ premiums.dwpYear + ' Total DWP' }}\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ premiums.totalDwp | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout row=\"2\" col=\"0\" columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"{{ premiums.dwpYear + ' Assessed DWP' }}\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ premiums.assessedDwp | currencyConverter() }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout row=\"3\" col=\"0\" verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"STATES\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout row=\"4\" col=\"0\" columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"State Count\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ premiums.stateCount }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout row=\"5\" col=\"0\" columns=\"*, auto\" rows=\"auto\" tap=\"onStatesTap\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"States Written\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ premiums.companyId === null ? 'collapse' : 'visible' }}\" />\n                </GridLayout>\n                <StackLayout row=\"6\" col=\"0\" verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"LINES OF BUSINESS\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout row=\"7\" col=\"0\" columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Line Count\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ premiums.lineCount }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout row=\"8\" col=\"0\" columns=\"*, auto\" rows=\"auto\" tap=\"onLinesTap\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Lines Written\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ premiums.companyId === null ? 'collapse' : 'visible' }}\" />\n                </GridLayout>\n                <StackLayout row=\"9\" col=\"0\" verticalAlignment=\"bottom\" class=\"list-view-section-header\" visibility=\"{{ isProfileAccounting ? 'visible' : 'collapse' }}\">\n                    <Label text=\"SEMI-ANNUAL ASSESSMENTS BY LEAD COMPANY\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <StackLayout row=\"10\" col=\"0\" verticalAlignment=\"top\" width=\"100%\" visibility=\"{{ isProfileAccounting ? 'visible' : 'collapse' }}\">\n                    <ListView items=\"{{ invoicesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                        <ListView.itemTemplate>\n                            <StackLayout>\n                                <GridLayout columns=\"*, auto, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                                    <Label row=\"0\" col=\"0\" text=\"{{ leadCompanyName }}\" textWrap=\"true\" verticalAlignment=\"middle\" class=\"list-view-item-main-top\" />\n                                    <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-main-top\" />\n                                    <Label row=\"0\" col=\"2\" text=\"{{ finalAssessment | currencyConverter() }}\" verticalAlignment=\"middle\" class=\"list-view-item-right\" />\n                                    <Label row=\"0\" col=\"3\" text=\"&#xf105;\" verticalAlignment=\"middle\" class=\"fn-list-view-item\" />\n                                </GridLayout>\n                            </StackLayout>\n                        </ListView.itemTemplate>\n                    </ListView>\n                </StackLayout>\n            </GridLayout>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

const StatesViewModel = __webpack_require__(199);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var statesList = new StatesViewModel([]);

var pageData = new observableModule.fromObject({
    statesList: statesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
            
        if (isGroup === "Y") {
            page.actionBar.title = "Group States";
        } else {
            page.actionBar.title = "Company States";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // statesList.empty();
        
            // pageData.set("isLoading", true);
        
            // statesList.load(navigationContext.companyId, isGroup, 1).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex;
        var sort;

        if (selectedIndex === 0) {
            sort = "dwp";
        } else {
            sort = "alpha";
        }

        statesList.empty();
        
        pageData.set("isLoading", true);

        statesList.load(navigationContext.companyId, isGroup, sort).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        if (isGroup === "Y") {
            var view = args.view;
            var model = view.bindingContext;

            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/states/written/written-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function StatesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, sort) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentstates?companyId=" + companyId + "&isGroup=" + isGroup + "&sort=" + sort + "&rank=51",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(state) {
                viewModel.push({
                    companyId: state.CompanyId,
                    companyName: state.CompanyName,
                    stateId: state.StateId,
                    state: state.State,
                    assessedDwp: state.AssessedDwp,
                    isGroup: isGroup
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = StatesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Assessed DWP\" />\n                    <SegmentedBarItem title=\"Alphabetical\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ statesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ state }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"{{ assessedDwp | currencyConverter() }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" visibility=\"{{ isGroup === 'Y' ? 'visible' : 'collapse' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

const WrittenViewModel = __webpack_require__(202);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var writtenList = new WrittenViewModel([]);

var pageData = new ObservableModule.fromObject({
    writtenList: writtenList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        if (isGroup === "Y") {
            page.actionBar.title = "Group State";
        } else {
            page.actionBar.title = "Company State";
        }
    
        var companyName = page.getViewById("companyName");
        var state = page.getViewById("state");
        
        companyName.text = navigationContext.companyName;
        state.text = navigationContext.state;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            writtenList.empty();

            pageData.set("isLoading", true);

            writtenList.load(navigationContext.companyId, isGroup, navigationContext.stateId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function WrittenViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, stateId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentstateswritten?companyId=" + companyId + "&isGroup=" + isGroup + "&stateId=" + stateId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(state) {
                viewModel.push({
                    companyId: state.CompanyId,
                    companyName: state.CompanyName,
                    companyId0: state.CompanyId0,
                    groupId: state.GroupId,
                    groupName: state.GroupName,
                    stateId: state.StateId,
                    state: state.State,
                    assessedDwp: state.AssessedDwp
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = WrittenViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"state\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ writtenList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ assessedDwp | currencyConverter }}\" verticalAlignment=\"bottom\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Remark";

    // if (navigationContext.isGroup === "Y")
    // {
    //     page.actionBar.title = "Group Remark";
    // } else {
    //     page.actionBar.title = "Company Remark";
    // }

    navigationContext.isProfileMembership = global.isProfileMembership;

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"{{ companyName }}\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Remark Level\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ publicPrivate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Remark Type\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ remarkType }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Creation Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ creationDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Completion Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ completionDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <!-- isProfileMembership ? 'visible' : 'collapse' - Previously applied to the below GridLayout to hide the Visit Date in certain instances. -->\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ visitDate.length === 0 ? 'collapse' : 'visible' }}\">\n                <Label row=\"0\" col=\"0\" text=\"Visit Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ visitDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Created By\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ userName }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Comment\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\">\n            <GridLayout columns=\"*\" rows=\"*\">\n                <TextView text=\"{{ comment }}\" editable=\"false\" class=\"scroll-view-item\" />\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
const appModule = __webpack_require__(30);
var http = __webpack_require__(18);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;

        if (platform.isIOS) {
            const controller = frameModule.topmost().ios.controller;
            // get the view controller navigation item
            const navigationItem = controller.visibleViewController.navigationItem;
            // hide back button
            navigationItem.setHidesBackButtonAnimated(true, false);
        }

        if (args.isBackNavigation) {
            var remarkLevelLabel = page.getViewById("remarkLevelLabel");
            var remarkTypeLabel = page.getViewById("remarkTypeLabel");
            var creationDateLabel = page.getViewById("creationDateLabel");
            var completionDateLabel = page.getViewById("completionDateLabel");
            var visitDateLabel = page.getViewById("visitDateLabel");

            remarkLevelLabel.text = pageData.publicPrivate;
            remarkTypeLabel.text = pageData.remarkType;

            var completionDateStackLayout = page.getViewById("completionDateStackLayout");

            if (pageData.remarkTypeCode === "8") {
                pageData.completionDate = null;

                completionDateStackLayout.visibility = "collapse";
            } else {
                pageData.completionDate = new Date();

                completionDateStackLayout.visibility = "visible";
            }

            creationDateLabel.text = dateConverter(pageData.creationDate, "MM/DD/YYYY");
            completionDateLabel.text = dateConverter(pageData.completionDate, "MM/DD/YYYY");
            visitDateLabel.text = dateConverter(pageData.visitDate, "MM/DD/YYYY");

        } else {
            navigationContext = page.navigationContext;

            navigationContext.isProfileMembership = global.isProfileMembership;
            
            pageData = navigationContext;

            if (navigationContext.isGroup === "Y") {
                page.actionBar.title = "Add Group Remark";
            } else {
                page.actionBar.title = "Add Company Remark";
            }

            navigationContext.isProfileMembership = global.isProfileMembership;

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var visitDateDatePicker = page.getViewById("visitDateDatePicker");
        
        visitDateDatePicker.on("dateChange", function(args) {
            var visitDateLabel = page.getViewById("visitDateLabel");

            visitDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutRemarkLevelTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutRemarkTypeTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCreationDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCompletionDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutVisitDateTap(args) {
    try {
        var visitDateGridLayout = page.getViewById("visitDateGridLayout");
        
        if (visitDateGridLayout.visibility === "collapse") {
            visitDateGridLayout.visibility = "visible";

            page.addCss("#visitDateLabel {color: #cc2d30;}");
        } else {
            visitDateGridLayout.visibility = "collapse";

            page.addCss("#visitDateLabel {color: #666;}");
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCreatedByTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onTextViewFocus(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onCancelTap(args) {
    try {
        if (platform.isAndroid) {
            dialogs.confirm({
                title: "Save",
                message: "Would you like to save the remark?",
                okButtonText: "Yes",
                cancelButtonText: "No"
            }).then(function (result) {
                if (result) {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        } else if (platform.isIOS) {
            dialogs.action({
                cancelButtonText: "Cancel",
                actions: ["Save Remark"]
            }).then(function (result) {
                if (result === "Save Remark") {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSaveTap(args) {
    try {
        collapseDates();

        saveRemark();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveRemark() {
    if (pageData.creationDate !== null) {
        pageData.creationDate = dateConverter(pageData.creationDate, "MM/DD/YYYY");
    }

    if (pageData.completionDate !== null) {
        pageData.completionDate = dateConverter(pageData.completionDate, "MM/DD/YYYY");
    }

    if (pageData.visitDate !== null) {
        pageData.visitDate = dateConverter(pageData.visitDate, "MM/DD/YYYY");
    }

    http.request({
        url: global.apiBaseServiceUrl + "company/insertcompanyremark",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);
        
        if (data.RemarksId !== null)
        {
            global.refreshRemarks = true;

            pageData.remarksId = data.RemarksId;

            frameModule.topmost().goBack();
        } else {
            dialogs.alert("There was an error saving the remark.");
        }
        
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

function dateConverter(value, format) {
    let result = format;

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

    return result;
};

function collapseDates() {
    var visitDateGridLayout = page.getViewById("visitDateGridLayout");

    visitDateGridLayout.visibility = "collapse";

    page.addCss("#visitDateLabel {color: #666;}");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onStackLayoutRemarkLevelTap = onStackLayoutRemarkLevelTap;
exports.onStackLayoutRemarkTypeTap = onStackLayoutRemarkTypeTap;
exports.onStackLayoutCreationDateTap = onStackLayoutCreationDateTap;
exports.onStackLayoutCompletionDateTap = onStackLayoutCompletionDateTap;
exports.onStackLayoutVisitDateTap = onStackLayoutVisitDateTap;
exports.onStackLayoutCreatedByTap = onStackLayoutCreatedByTap;
exports.onTextViewFocus = onTextViewFocus;
exports.onCancelTap = onCancelTap;
exports.onSaveTap = onSaveTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <ActionItem tap=\"onCancelTap\" android.systemIcon=\"ic_menu_close_clear_cancel\" ios.systemIcon=\"1\" ios.position=\"left\" />\n        <ActionItem tap=\"onSaveTap\" ios.systemIcon=\"3\" android.systemIcon=\"ic_menu_save\" ios.position=\"right\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\">\n            <StackLayout verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n                <Label id=\"companyName\" text=\"{{ companyName }}\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutRemarkLevelTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Remark Level\" class=\"list-view-item-left\" />\n                    <Label id=\"remarkLevelLabel\" row=\"0\" col=\"1\" text=\"{{ publicPrivate }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutRemarkTypeTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Remark Type\" class=\"list-view-item-left\" />\n                    <Label id=\"remarkTypeLabel\" row=\"0\" col=\"1\" text=\"{{ remarkType }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutCreationDateTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Creation Date\" class=\"list-view-item-left\" />\n                    <Label id=\"creationDateLabel\" row=\"0\" col=\"1\" text=\"{{ creationDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout id=\"completionDateStackLayout\" tap=\"onStackLayoutCompletionDateTap\" visibility=\"{{ completionDate === null ? 'collapse' : 'visible' }}\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Completion Date\" class=\"list-view-item-left\" />\n                    <Label id=\"completionDateLabel\" row=\"0\" col=\"1\" text=\"{{ completionDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- visibility=\"{{ isProfileMembership ? 'visible' : 'collapse' }}\" - Previously applied to the below StackLayout to hide the Visit Date in certain instances. -->\n            <StackLayout tap=\"onStackLayoutVisitDateTap\"> \n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Visit Date\" class=\"list-view-item-left\" />\n                    <Label id=\"visitDateLabel\" row=\"0\" col=\"1\" text=\"{{ visitDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"visitDateGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <DatePicker id=\"visitDateDatePicker\" row=\"0\" col=\"0\" date=\"{{ visitDate }}\" horizontalAlignment=\"center\" class=\"list-view-item-picker\"></DatePicker>\n            </GridLayout>\n            <StackLayout tap=\"onStackLayoutCreatedByTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Created By\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ userName }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Comment\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n            <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\">\n                <TextView row=\"0\" col=\"0\" text=\"{{ comment }}\" focus=\"onTextViewFocus\" hint=\"Comment\" class=\"list-view-item-textview\" />\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarkLevelViewModel = __webpack_require__(209);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var remarkLevelList = new RemarkLevelViewModel([]);

var remarkLevelIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkLevelIndex: remarkLevelIndex,
    remarkLevelList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkLevelList === undefined) {
            pageData.set("isLoading", true);

            remarkLevelList.load(global.isProfileExecutive).then(function () {
                global.remarkLevelList = remarkLevelList;

                pageData.remarkLevelList = global.remarkLevelList;

                remarkLevelIndex = 0;

                if (pageData.boundData.publicPrivate !== null && pageData.boundData.publicPrivate.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                        if (pageData.remarkLevelList.List.getItem(i).remarkLevelCode === pageData.boundData.publicPrivate) {
                            remarkLevelIndex = i;
                        }
                    }
                }

                pageData.remarkLevelIndex = remarkLevelIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkLevelList = global.remarkLevelList;
            
            remarkLevelIndex = 0;

            if (pageData.boundData.publicPrivate !== null && pageData.boundData.publicPrivate.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                    if (pageData.remarkLevelList.List.getItem(i).remarkLevelCode === pageData.boundData.publicPrivate) {
                        remarkLevelIndex = i;
                    }
                }
            }

            pageData.remarkLevelIndex = remarkLevelIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var remarkLevelListPicker = page.getViewById("remarkLevelListPicker");
        
        remarkLevelListPicker.on("selectedIndexChange", function(args) {
            var remarkLevelItem = pageData.remarkLevelList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkLevelItem.remarkLevelCode + ": " + remarkLevelItem.remarkLevel);
            pageData.boundData.publicPrivate = remarkLevelItem.remarkLevel;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5).Observable;
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarkLevelViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function(isExecutive) {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarklevels?isExecutive=" + isExecutive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkLevel) {
                viewModel.Items.push(
                    remarkLevel.RemarkLevelDescription
                );

                viewModel.List.push({
                    remarkLevelCode: remarkLevel.RemarkLevelDescription,
                    remarkLevel: remarkLevel.RemarkLevelDescription
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkLevelViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"remarkLevelListPicker\" row=\"0\" col=\"0\" items=\"{{ remarkLevelList.Items }}\" selectedIndex=\"{{ remarkLevelIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarkTypeViewModel = __webpack_require__(212);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var remarkTypeList = new RemarkTypeViewModel([]);

var remarkTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkTypeIndex: remarkTypeIndex,
    remarkTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkTypeList === undefined) {
            pageData.set("isLoading", true);

            remarkTypeList.load().then(function () {
                global.remarkTypeList = remarkTypeList;

                pageData.remarkTypeList = global.remarkTypeList;

                remarkTypeIndex = 0;

                if (pageData.boundData.remarkTypeCode !== null && pageData.boundData.remarkTypeCode.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                        if (pageData.remarkTypeList.List.getItem(i).remarkTypeCode === pageData.boundData.remarkTypeCode) {
                            remarkTypeIndex = i;
                        }
                    }
                }

                pageData.remarkTypeIndex = remarkTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkTypeList = global.remarkTypeList;
            
            remarkTypeIndex = 0;

            if (pageData.boundData.remarkTypeCode !== null && pageData.boundData.remarkTypeCode.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                    if (pageData.remarkTypeList.List.getItem(i).remarkTypeCode === pageData.boundData.remarkTypeCode) {
                        remarkTypeIndex = i;
                    }
                }
            }

            pageData.remarkTypeIndex = remarkTypeIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var remarkTypeListPicker = page.getViewById("remarkTypeListPicker");
        
        remarkTypeListPicker.on("selectedIndexChange", function(args) {
            var remarkTypeItem = pageData.remarkTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkTypeItem.remarkTypeCode + ": " + remarkTypeItem.remarkType);
            pageData.boundData.remarkTypeCode = remarkTypeItem.remarkTypeCode;
            pageData.boundData.remarkType = remarkTypeItem.remarkType;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5).Observable;
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarkTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarktypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                viewModel.Items.push(
                    remarkType.RemarkTypeDescription
                );

                viewModel.List.push({
                    remarkTypeCode: remarkType.RemarkTypeCode,
                    remarkType: remarkType.RemarkTypeDescription
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkTypeViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"remarkTypeListPicker\" row=\"0\" col=\"0\" items=\"{{ remarkTypeList.Items }}\" selectedIndex=\"{{ remarkTypeIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarksViewModel = __webpack_require__(215);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var http = __webpack_require__(18);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var searchBar;
var remarksPageSize = 25;
var remarksSearchText = "";
var remarksSearchSubmitted = false;
var isGroup;
var companyId;
var remarkTypeCode;

var remarksList = new RemarksViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarksList: remarksList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        isGroup = navigationContext.isGroup;
        companyId = navigationContext.companyId;
        remarkTypeCode = navigationContext.remarkTypeCode;

        page.actionBar.title = "Remarks";

        if (isGroup === "Y") {
            // page.actionBar.title = "Group Remarks";

            remarksSearchText = global.remarksSearchTextGroup;
        } else {
            // page.actionBar.title = "Company Remarks";

            remarksSearchText = global.remarksSearchTextCompany;
        }
    
        if (remarksSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = remarksSearchText;

            remarksSearchSubmitted = true;
        }

        if (args.isBackNavigation) {
            if (global.refreshRemarks) {
                remarksList.empty();

                pageData.set("isLoading", true);

                remarksList.load(remarksSearchText, companyId, isGroup, global.isExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function () {
                    pageData.set("isLoading", false);
                });

                page.bindingContext = pageData;
            }
        } else {
            global.refreshRemarks = false;

            remarksList.empty();

            pageData.set("isLoading", true);

            remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark();
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark();
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args) {
    searchBar = args.object;

    if (isGroup === "Y") {
        global.remarksSearchTextGroup = searchBar.text.trim();
    } else {
        global.remarksSearchTextCompany = searchBar.text.trim();
    }

    remarksSearchText = searchBar.text.trim();

    remarksList.empty();
    
    pageData.set("isLoading", true);

    remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function (){
        pageData.set("isLoading", false);

        remarksSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    remarksSearchText = "";

    if (isGroup === "Y") {
        global.remarksSearchTextGroup = "";
    } else {
        global.remarksSearchTextCompany = "";
    }

    if (remarksSearchSubmitted) {
        remarksList.empty();
        
        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function (){
            pageData.set("isLoading", false);

            remarksSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;

        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remark/remark-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var remarksListCount = remarksList.length;
        var remarksPageNumber = Math.ceil(remarksListCount / remarksPageSize) + 1;
        var remarksRemainder = remarksListCount % remarksPageSize;

        if (remarksRemainder !== 0 && remarksRemainder < remarksPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, remarksPageNumber, remarksPageSize, remarkTypeCode, global.personId).then(function () {
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function addRemark() {
    var completionDate = null;

    if (navigationContext.remarkTypeCode !== "8") {
        completionDate = new Date();
    }

    var model = {
        remarksId: 0,
        companyId: navigationContext.companyId,
        companyName: navigationContext.companyName,
        companyId0: null,
        groupId: null,
        groupName: null,
        publicPrivate: "Public",
        remarkTypeCode: navigationContext.remarkTypeCode,
        remarkType: navigationContext.remarkType,
        creationDate: new Date(),
        completionDate: completionDate,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null
    }

    const navigationEntry = {
        moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarksViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, companyId, isGroup, isExecutive, page, pageSize, remarkTypeCode, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyremarksfilter?filter=" + filter.replace(/ /g, "%20") + "&companyId=" + companyId + 
                "&isGroup=" + isGroup + "&isExecutive" + isExecutive + "&page=" + page + "&pageSize=" + pageSize + 
                "&remarkTypeCode=" + remarkTypeCode + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remark) {
                viewModel.push({
                    remarksId: remark.RemarksId,
                    companyId: remark.CompanyId,
                    companyName: remark.CompanyName,
                    companyId0: remark.CompanyId0,
                    groupId: remark.GroupId,
                    groupName: remark.GroupName,
                    creationDate: remark.CreationDate.substring(0, remark.CreationDate.indexOf(" ")),
                    completionDate: remark.CompletionDate.substring(0, remark.CompletionDate.indexOf(" ")),
                    remarkTypeCode: remark.RemarkTypeCode,
                    remarkType: remark.RemarkType,
                    commentAbbreviated: remark.CommentAbbreviated,
                    comment: remark.Comment,
                    userName: remark.UserName,
                    publicPrivate: remark.PublicPrivate,
                    visitDate: remark.VisitDate.substring(0, remark.VisitDate.indexOf(" "))
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarksViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" />\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ remarksList }}\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <GridLayout columns=\"*, auto\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"{{ remarkType }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ creationDate }}\" class=\"list-view-item-main-top\" />\n                                </GridLayout>\n                                <Label text=\"{{ commentAbbreviated }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                <Label text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-sub\" style=\"font-style: italic;\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarkTypesViewModel = __webpack_require__(218);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var http = __webpack_require__(18);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var remarkTypesList = new RemarkTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarkTypesList: remarkTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Remark Types";
            
        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Remarks";
        // } else {
        //     page.actionBar.title = "Company Remarks";
        // }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        remarkTypesList.empty();

        pageData.set("isLoading", true);

        remarkTypesList.load(navigationContext.companyId, isGroup, global.isExecutive, global.personId).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark();
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark();
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remarks-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function addRemark() {
    var completionDate = null;

    if (navigationContext.remarkTypeCode !== "8") {
        completionDate = new Date();
    }

    var model = {
        remarksId: 0,
        companyId: navigationContext.companyId,
        companyName: navigationContext.companyName,
        companyId0: null,
        groupId: null,
        groupName: null,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null
    }

    const navigationEntry = {
        moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarkTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, isExecutive, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyremarktypes?companyId=" + companyId + "&isGroup=" + isGroup + "&isExecutive=" + isExecutive + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                if (data[0].CompanyId !== undefined && data[0].CompanyId !== null)
                {
                    viewModel.push({
                        companyId: remarkType.CompanyId,
                        companyName: remarkType.CompanyName,
                        remarkTypeCode: remarkType.RemarkTypeCode,
                        remarkType: remarkType.RemarkType,
                        sortOrder: remarkType.SortOrder
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkTypesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" />\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ remarkTypesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ remarkType }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const CompanyGroupsViewModel = __webpack_require__(221);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var http = __webpack_require__(18);
var gestures = __webpack_require__(69);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;
var searchBar;
var companyGroupsPageSize = 25;
var companyGroupsSearchText = "";
var companyGroupsSearchSubmitted = false;
var isGroup;
var memberOnly = "Y";

var companyGroupsList = new CompanyGroupsViewModel([]);

var pageData = new ObservableModule.fromObject({
    companyGroupsList: companyGroupsList,
    isGroup: isGroup,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        if (isGroup === "Y") {
            page.actionBar.title = "Groups";

            companyGroupsSearchText = global.companyGroupsSearchText;
        } else {
            page.actionBar.title = "Companies";

            companyGroupsSearchText = global.companyGroupsSearchTextCompany;
        }
        
        if (companyGroupsSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = companyGroupsSearchText;

            companyGroupsSearchSubmitted = true;
        }
        
        pageData.isGroup = isGroup;
        
        // Since the Page contains a SegmentedBar,
        // the selectedIndexChanged event will perform the initial load of the ListView.

        // if (companyGroupsList.length === 0) {
        //     pageData.set("isLoading", true);

        //     companyGroupsList.load(companyGroupsSearchText, 1, companyGroupsPageSize, isGroup, memberOnly).then(function () {
        //         pageData.set("isLoading", false);
        //     });
        // }

        // page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args) {
    try {
        searchBar = args.object;

        if (platform.isAndroid) {
            searchBar.android.clearFocus();
        } else if (platform.isIOS) {
            // iOS Styling
            searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
            searchBar.ios.showsCancelButton = true;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSubmit(args) {
    try {
        searchBar = args.object;

        if (isGroup === "Y") {
            global.companyGroupsSearchText = searchBar.text.trim();
        } else {
            global.companyGroupsSearchTextCompany = searchBar.text.trim();
        }

        companyGroupsSearchText = searchBar.text.trim();

        companyGroupsList.empty();
        
        pageData.set("isLoading", true);

        companyGroupsList.load(companyGroupsSearchText, 1, companyGroupsPageSize, isGroup, memberOnly).then(function (){
            pageData.set("isLoading", false);

            companyGroupsSearchSubmitted = true;
        
            searchBar.dismissSoftInput();
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onClear(args) {
    try {
        searchBar.text = "";
        companyGroupsSearchText = "";

        if (isGroup === "Y") {
            global.companyGroupsSearchText = "";
        } else {
            global.companyGroupsSearchTextCompany = "";
        }

        if (companyGroupsSearchSubmitted) {
            companyGroupsList.empty();
            
            pageData.set("isLoading", true);

            companyGroupsList.load(companyGroupsSearchText, 1, companyGroupsPageSize, isGroup, memberOnly).then(function (){
                pageData.set("isLoading", false);

                companyGroupsSearchSubmitted = false;
            
                searchBar.dismissSoftInput();
            });
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex;

        if (selectedIndex === 0) {
            memberOnly = "Y";
        } else {
            memberOnly = "N";
        }

        companyGroupsList.empty();
        
        pageData.set("isLoading", true);

        companyGroupsList.load(companyGroupsSearchText, 1, companyGroupsPageSize, isGroup, memberOnly).then(function (){
            pageData.set("isLoading", false);

            companyGroupsSearchSubmitted = true;
        
            searchBar.dismissSoftInput();
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemLoading(args) {
    try {
        if (platform.isIOS) {
            var cell = args.ios;

            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;
                var model = view.bindingContext;

                model.isGroup = isGroup;

                const navigationEntry = {
                    moduleName: "companygroups/companygroup/companygroup-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var companyGroupsListCount = companyGroupsList.length;
        var companyGroupsPageNumber = Math.ceil(companyGroupsListCount / companyGroupsPageSize) + 1;
        var companyGroupsRemainder = companyGroupsListCount % companyGroupsPageSize;

        if (companyGroupsRemainder !== 0 && companyGroupsRemainder < companyGroupsPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        companyGroupsList.load(companyGroupsSearchText, companyGroupsPageNumber, companyGroupsPageSize, isGroup, memberOnly).then(function (){
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onRemarkClick(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
        }

        var view = args.view;
        var bindingContext = view.bindingContext;

        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark(bindingContext);
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark(bindingContext);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
        
                    swipeOpen = false;
                } else {
                    var view = args.view;
                    var model = view.bindingContext;

                    model.isGroup = isGroup;
        
                    const navigationEntry = {
                        moduleName: "companygroups/companygroup/companygroup-page",
                        context: model,
                        clearHistory: false
                    };
        
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var companyGroupsListView = page.getViewById("companyGroupsListView");

                if (platform.isAndroid) {
                    companyGroupsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    companyGroupsListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        companyGroupsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        companyGroupsListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

function addRemark(bindingContext) {
    var model = {
        remarksId: 0,
        companyId: bindingContext.companyId,
        companyName: bindingContext.companyName,
        companyId0: null,
        groupId: null,
        groupName: null,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null
    }

    const navigationEntry = {
        moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onRemarkClick = onRemarkClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CompanyGroupsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize, isGroup, memberOnly) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyfilter?filter=" + filter.replace(/ /g, "%20").replace(/‘/g, "'").replace(/’/g, "'") + "&isGroup=" + isGroup + "&page=" + page + "&pageSize=" + pageSize + "&memberOnly=" + memberOnly,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(group) {
                if (group.CompanyId !== null && group.CompanyId !== 0) {
                    var autoCoSelect;
                    var inclinProfile;

                    if (group.AutoCoSelect === "Y") {
                        autoCoSelect = "Yes";
                    } else {
                        autoCoSelect = "No";
                    }

                    if (group.InclinProfile === "Y") {
                        inclinProfile = "Yes";
                    } else {
                        inclinProfile = "No";
                    }

                    viewModel.push({
                        companyId: group.CompanyId,
                        companyName: group.CompanyName,
                        companyId0: group.CompanyId0,
                        groupId: group.GroupId,
                        groupName: group.GroupName,
                        holdCompanyId: group.HoldCompanyId,
                        holdCompany: group.HoldCompany,
                        mapCompanyId: group.MapCompanyId,
                        mapCompany: group.MapCompany,
                        autoCoSelect: autoCoSelect,
                        inclinProfile: inclinProfile,
                        compRemovedDate: group.CompRemovedDate,
                        numberedAmBest: group.NumberedAmBest,
                        numberedNaic: group.NumberedNaic.toUpperCase(),
                        numberedNaii: group.NumberedNaii,
                        statusCode: group.StatusCode,
                        status: group.Status,
                        companyFoundedDate: group.CompanyFoundedDate,
                        domiciledStateCode: group.DomiciledStateCode,
                        domiciledState: group.DomiciledState,
                        domiciledCountryCode: group.DomiciledCountryCode,
                        domiciledCountry: group.DomiciledCountry,
                        marketingType: group.MarketingType,
                        structure: group.Structure,
                        membershipTypeCode: group.MembershipTypeCode,
                        membershipType: group.MembershipType,
                        isMember: group.IsMember,
                        webAccessCode: group.WebAccessCode,
                        webAccess: group.WebAccess,
                        webAccessEndDate: group.WebAccessEndDate,
                        affiliations: group.Affiliations,
                        accountManagerId: group.AccountManagerId,
                        accountManager: group.AccountManager
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CompanyGroupsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\" />\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" visibility=\"{{ isGroup === 'Y' ? 'collapse' : 'visible' }}\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Member Companies\" />\n                    <SegmentedBarItem title=\"All Companies\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"companyGroupsListView\" items=\"{{ companyGroupsList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"*, 80\" android:rows=\"48\" ios:rows=\"55\" width=\"100%\">\n                            <Label col=\"0\" />\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onRemarkClick\" class=\"swipe-icons green\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf075;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Remark\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                                <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                    <Label text=\"{{ companyName }}\" class=\"list-view-item-main-top\" />\n                                    <Label text=\"{{ membershipType }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                </StackLayout>\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = __webpack_require__(224);

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
; 
if (false ) {} 

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomeViewModel;
; 
if (false ) {} 

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page class=\"page\"\n    navigatingTo=\"onNavigatingTo\"  \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\n\n    <ActionBar class=\"action-bar\">\n        <Label class=\"action-bar-title\" text=\"Home\"></Label>\n    </ActionBar>\n\n    <GridLayout>\n        <!-- Add your page content here -->\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

const LoginViewModel = __webpack_require__(227);
const platformModule = __webpack_require__(13);
const observableModule = __webpack_require__(5);
const appSettings = __webpack_require__(45);
const dialogs = __webpack_require__(8);
var utilsModule = __webpack_require__(228);
const fingerprintAuthPlugin = __webpack_require__(411);
var fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();
var orientation = __webpack_require__(229);
var page;
var loginViewModel;
var email;
var password;
var rememberMe;

function onNavigatingTo(args) {
    orientation.disableRotation();
}

function onLoaded(args)
{
    page = args.object;

    loginViewModel = new LoginViewModel();

    loginViewModel.email = appSettings.getString("email", "");
    loginViewModel.password = appSettings.getString("password", "");
    loginViewModel.rememberMe = appSettings.getBoolean("rememberMe", false);
    loginViewModel.useTouchId = appSettings.getBoolean("useTouchId", false);

    page.bindingContext = loginViewModel;
}

function onNavigatedTo(args)
{
    try {
        if (platformModule.isIOS) {
            if (loginViewModel.useTouchId)
            {
                fingerprintAuth.available().then(
                    fingerprintAuth.verifyFingerprint({
                        message: 'Log on to view Profile information' // optional, shown in the fingerprint dialog (default: 'Scan your finger').
                    }).then(
                        () => {
                            const bindingContext = page.bindingContext;

                            bindingContext.signIn(null);
                        },
                        error => {
                            // when error.code === -3, the user pressed the button labeled with your fallbackMessage
                            dialogs.alert("Fingerprint NOT OK. Error code: " + error.code + ". Error message: " + error.message);
                        }
                    )
                );
            }
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSigninButtonTap(args) {
    try {
        let button = args.object;

        email = button.page.getViewById("email");
        password = button.page.getViewById("password");
        rememberMe = button.page.getViewById("rememberMe");

        appSettings.setBoolean("rememberMe", rememberMe.checked);

        if (rememberMe.checked)
        {
            appSettings.setString("email", email.text);
            appSettings.setString("password", password.text);
        }
        else
        {
            appSettings.setBoolean("useTouchId", false);
            appSettings.setString("email", "");
            appSettings.setString("password", "");
        }

        var scanType;

        fingerprintAuth.available().then((result) => 
        {
            if (result.touch) {
                scanType = "touch";
            }
            else
            {
                scanType = "face"
            }

            loginViewModel.signIn(scanType);
        }).catch((e) =>
        {
            scanType = null;

            loginViewModel.signIn(scanType);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onForgotPasswordTap() {
   utilsModule.openUrl("https://www.apci.org/forgotpassword")
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
; 
if (false ) {} 

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platformModule = __webpack_require__(13);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var appSettings = __webpack_require__(45);
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",
        rememberMe: false,
        useTouchId: false,

        signIn: function(scanType) {
            const email = this.email;
            const password = this.password;

            // dialogs.alert(global.token + "\nisPci: " + global.isPci + "\nisCongressAdmin: " + global.isCongressAdmin + 
            //     "\nisCongressUser: " + global.isCongressUser + "\nisCongressExternalUser: " + global.isCongressExternalUser + 
            //     "\npersonId: " + global.personId + "\ncompanyId: " + global.companyId + "\ncurrentUser: " + global.currentUser);

            http.request({
                url: global.apiLoginUrl,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ EmailAddress: email, Password: password, Scope: global.scope })
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);

                if (data.AccessToken !== undefined && data.AccessToken !== null)
                {
                    global.token = data.AccessToken;
                    
                    var pciEveryonePosition = global.token.toLowerCase().indexOf("pci.everyone");

                    if (pciEveryonePosition > 0)
                    {
                        global.isPci = true;
                    }

                    var profileExecutivePosition = global.token.toLowerCase().indexOf("profile+executive");

                    if (profileExecutivePosition > 0)
                    {
                        global.isProfileExecutive = true;
                        global.isExecutive = "Y";
                    }

                    var profileManagerPosition = global.token.toLowerCase().indexOf("profile+manager");

                    if (profileManagerPosition > 0)
                    {
                        global.isProfileEngagement = true;
                        global.isProfileManager = true;
                        global.isExecutive = "Y";
                    }
    
                    var profilePoliticalEngagementPosition = global.token.toLowerCase().indexOf("profile+political+engagement");

                    if (profilePoliticalEngagementPosition > 0)
                    {
                        global.isProfileEngagement = true;
                    }
    
                    var profileFGRPosition = global.token.toLowerCase().indexOf("profile+fgr");

                    if (profileFGRPosition > 0)
                    {
                        global.isProfileEngagement = true;
                    }

                    var profileAccountingPosition = global.token.toLowerCase().indexOf("profile+accounting");

                    if (profileAccountingPosition > 0)
                    {
                        global.isProfileAccounting = true;
                    }
    
                    var profilePublicAffairsPosition = global.token.toLowerCase().indexOf("profile+public+affairs");

                    if (profilePublicAffairsPosition > 0)
                    {
                        global.isProfileMembership = true;
                    }
    
                    var profileMembershipPosition = global.token.toLowerCase().indexOf("profile+membership");
    
                    if (profileMembershipPosition > 0)
                    {
                        global.isProfileMembership = true;
                    }
    
                    var profileUserPosition = global.token.toLowerCase().indexOf("profile+user");
    
                    if (profileUserPosition > 0)
                    {
                        global.isProfileUser = true;
                    }
    
                    if (global.isProfileExecutive || global.isProfileManager || global.isProfileMembership || global.isProfileUser || global.isPci)
                    {
                        var personIdPosition = token.toLowerCase().indexOf("&personid=") + 10;
                        var firstNamePosition = token.toLowerCase().indexOf("&firstname=");

                        global.personId = token.slice(personIdPosition, firstNamePosition);

                        var fullNamePosition = token.toLowerCase().indexOf("&fullname=") + 10;
                        var streetAddress1Position = token.toLowerCase().indexOf("&streetaddress1=");

                        global.currentUser = decodeURIComponent(token.slice(fullNamePosition, streetAddress1Position)).replace("+", " ");

                        const navigationEntry = {
                            moduleName: "main-page",
                            clearHistory: true
                        };

                        var useTouchId = appSettings.getBoolean("useTouchId", false);
                        var rememberMe = appSettings.getBoolean("rememberMe", false);

                        if ((useTouchId === undefined || useTouchId === null || useTouchId === false) && scanType === "touch" && rememberMe && platformModule.isIOS)
                        {
                            dialogs.confirm(
                                {
                                    title: "Touch ID for \"ProMo\"",
                                    message: "Would you like to use the fingerprint scanner to log on in the future?",
                                    okButtonText: "Yes",
                                    cancelButtonText: "No"
                                }
                            ).then(function (result) {
                                if (result)
                                {
                                    appSettings.setBoolean("useTouchId", true);

                                    try
                                    {
                                        frameModule.topmost().navigate(navigationEntry);
                                    }
                                    catch(e)
                                    {
                                        dialogs.alert({
                                            title: "Error",
                                            message: e.toString(),
                                            okButtonText: "OK"
                                        });
                                    }
                                }
                                else
                                {
                                    appSettings.setBoolean("useTouchId", false);

                                    try
                                    {
                                        frameModule.topmost().navigate(navigationEntry);
                                    }
                                    catch(e)
                                    {
                                        dialogs.alert({
                                            title: "Error",
                                            message: e.toString(),
                                            okButtonText: "OK"
                                        });
                                    }
                                }
                            });
                        }
                        else if ((useTouchId === undefined || useTouchId === null || useTouchId === false) && scanType === "face" && rememberMe && platformModule.isIOS)
                        {
                            appSettings.setBoolean("useTouchId", true);
                        }
                        else
                        {
                            try
                            {
                                frameModule.topmost().navigate(navigationEntry);
                            }
                            catch(e)
                            {
                                dialogs.alert({
                                    title: "Error",
                                    message: e.toString(),
                                    okButtonText: "OK"
                                });
                            }
                        }
                    }
                    else
                    {
                        dialogs.alert("Unauthorized user account.");
                    }
                }
                else
                {
                    // undefined or null data.AccessToken returned.  
                    // Usually the result of invalid user name and password.
                    dialogs.alert("Invalid email address or password.")
                }
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page class=\"page\" navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" navigatedTo=\"onNavigatedTo\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" style=\"margin-top: 0;\">\n    <ScrollView class=\"login-background\">\n        <GridLayout columns=\"*\" rows=\"*, auto, auto, auto, auto, auto\" height=\"100%\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n                <Image src=\"res://login\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n            </StackLayout>\n            <StackLayout row=\"1\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"0 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field\">\n                    <StackLayout width=\"10%\" verticalAlignment=\"center\">\n                        <Image src=\"res://email\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n                    </StackLayout>\n                    <StackLayout width=\"90%\" verticalAlignment=\"center\">\n                        <TextField id=\"email\" hint=\"Email\" keyboardType=\"email\" autocorrect=\"false\" autocapitalization=\"none\"\n                            text=\"{{ email }}\" width=\"100%\" textAlignment=\"left\"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"2\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"5 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field\">\n                    <StackLayout width=\"10%\" verticalAlignment=\"center\">\n                        <Image src=\"res://password\" android:stretch=\"aspectFill\" ios:stretch=\"none\"></Image>\n                    </StackLayout>\n                    <StackLayout width=\"90%\" verticalAlignment=\"center\">\n                        <TextField id=\"password\" hint=\"Password\" secure=\"true\" autocorrect=\"false\" autocapitalization=\"none\"\n                            text=\"{{ password }}\" width=\"100%\" textAlignment=\"left\"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"3\" col=\"0\" orientation=\"vertical\" backgroundColor=\"#eee\" verticalAlignment=\"bottom\" margin=\"5 10 0 10\" borderRadius=\"5\">\n                <StackLayout orientation=\"horizontal\" class=\"login-field-switch\">\n                    <StackLayout width=\"40%\" verticalAlignment=\"center\">\n                        <Label text=\"Remember Me\" horizontalAlignment=\"left\" />\n                    </StackLayout>\n                    <StackLayout width=\"60%\" verticalAlignment=\"center\">\n                        <Switch id=\"rememberMe\" checked=\"{{ rememberMe }}\" horizontalAlignment=\"right\" class=\"switch\" />\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row=\"4\" col=\"0\" orientation=\"vertical\" verticalAlignment=\"top\" margin=\"0 10 0 10\">\n                <Button class=\"login-button\" text=\"Sign In\" tap=\"onSigninButtonTap\"></Button>\n            </StackLayout>\n            <StackLayout row=\"5\" col=\"0\" orientation=\"vertical\" verticalAlignment=\"top\" margin=\"5 10 30 10\">\n                <Button class=\"forgot-button\" text=\"Forgot Password?\" tap=\"onForgotPasswordTap\"></Button>\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>"; 
if (false ) {} 

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

const application = __webpack_require__(30);
var frame = __webpack_require__(12);
var gridLayout = __webpack_require__(97);
var stackLayout = __webpack_require__(65)
var Label = __webpack_require__(46).Label;
var orientation = __webpack_require__(229);

var page;

function onNavigatingTo(args) {
    orientation.enableRotation();
    page = args.object;
    page._tabs = [];

    page.tabItems = [
        { path: "companygroups/companygroups-page", iconCode: "\uf0e8", label: "Groups", isGroup: "Y" },
        { path: "companygroups/companygroups-page", iconCode: "\uf0b1", label: "Companies", isGroup: "N" },
        { path: "people/people-page", iconCode: "\uf007", label: "People", isGroup: "N" },
        { path: "committeetypes/committeetypes-page", iconCode: "\uf0c0", label: "Committees", isGroup: "N" }
    ];

    var numItems = page.tabItems.length;

    var newGrid = new gridLayout.GridLayout();

    newGrid.id = "tab-navigation";

    newGrid.addRow(new gridLayout.ItemSpec(1, "star"));
    newGrid.addRow(new gridLayout.ItemSpec(1, "auto"));
    
    for (var i = 0; i < numItems; i++) {
        newGrid.addColumn(new gridLayout.ItemSpec(1, "star"));
    }

    var frameHolder = new stackLayout.StackLayout();
    
    page.navFrame = new frame.Frame();

    page.navFrame.id = "navigation-frame";
    page.navFrame.className = "navigation-frame";

    frameHolder.addChild(page.navFrame);

    newGrid.addChild(frameHolder);

    gridLayout.GridLayout.setColumn(frameHolder, 0);
    gridLayout.GridLayout.setRow(frameHolder, 0);
    gridLayout.GridLayout.setColumnSpan(frameHolder, numItems);

    for (var i = 0; i < numItems; i++) {
        var currentItem = page.tabItems[i];
        var tab = new stackLayout.StackLayout();

        tab.direction = "vertical";

        if (i === 0) {
            tab.className = "tab tab-selected";
        } else {
            tab.className = "tab";
        }

        tab.id = "tab_" + i;
        
        tab.on("tap", function (args) {
            return onTabSelected(args, currentItem);
        })

        var icon = new Label();

        icon.className = 'tab-icon';

        //icon.text = String.fromCharCode(currentItem.iconCode)
        icon.text = currentItem.iconCode;
        tab.addChild(icon);

        var label = new Label();

        label.className = 'tab-label';
        label.text = currentItem.label;
        tab.addChild(label);

        page._tabs.push(tab);
        newGrid.addChild(tab);

        gridLayout.GridLayout.setRow(tab, 1);
        gridLayout.GridLayout.setColumn(tab, i);
    }

    page.content = newGrid;

    const dateConverter = (value, format) => {
        let result = format;

        if (value === undefined || value === null) {
            //result = "";
        } else {
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());
        }

        return result;
    };

    application.getResources().dateConverter = dateConverter;
    application.getResources().dateFormat = "MM/DD/YYYY";

    const currencyConverter = (value) => {
        var result;

        if (value === undefined || value === null) {
            result = null;
        } else {
            result = '$' + value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
        }

        return result;
    }

    application.getResources().currencyConverter = currencyConverter;

    var navigationEntry = {
        moduleName: page.tabItems[0].path,
        context: {
            reference: "tab",
            isGroup: page.tabItems[0].isGroup
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry);
}

function onTabSelected(args) {
    var selectedTab = args.object;
    var index = selectedTab.id.substring(selectedTab.id.indexOf("tab_") + 4);

    if (selectedTab.className.indexOf("tab-selected") > -1) {
        var currentFrame = page.getViewById("navigation-frame");
        
        if (page.tabItems[index].label === currentFrame.currentPage.actionBar.title) {
            return;
        }
    }

    page._tabs.forEach(function(tab) {
        tab.className = 'tab';
    });

    selectedTab.className = 'tab tab-selected';

    showTab(page.tabItems[index]);
}

function showTab(tabItem) {
    var navigationEntry = {
        moduleName: tabItem.path,
        context: {
            reference: "tab",
            isGroup: tabItem.isGroup
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry)
}

exports.onNavigatingTo = onNavigatingTo;
; 
if (false ) {} 

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" backgroundSpanUnderStatusBar=\"true\" actionBarHidden=\"true\" navigatingTo=\"onNavigatingTo\">\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const PeopleViewModel = __webpack_require__(234);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var gestures = __webpack_require__(69);
var frameModule = __webpack_require__(12);
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);
var email = __webpack_require__(235);
var phone = __webpack_require__(236);

const MIN_X = -80;
const MAX_X = 160;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;
var searchBar;
var peoplePageSize = 25;
var peopleSearchText = "";
var peopleSearchSubmitted = false;
var isGroup;
var companyId = 0;

var peopleList = new PeopleViewModel([]);

var pageData = new ObservableModule.fromObject({
    peopleList: peopleList,
    companyId: companyId,
    reference: "tab",
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "People";

        navigationContext = page.navigationContext;

        if (navigationContext.reference === "tab") {
            pageData.reference = "tab";
        } else {
            pageData.reference = "nav";
        }

        isGroup = navigationContext.isGroup;

        if (navigationContext.companyId !== undefined && navigationContext.companyId !== null && navigationContext.companyId !== 0) {
            companyId = navigationContext.companyId;
        } else {
            companyId = 0;
        }
        
        pageData.companyId = companyId;
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;
        
        if (navigationContext.reference === "tab") {
            peopleSearchText = global.peopleSearchText;
        } else {
            if (isGroup === "Y") {
                peopleSearchText = global.peopleSearchTextGroup;
            } else {
                peopleSearchText = global.peopleSearchTextCompany;
            }
        }

        if (peopleSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = peopleSearchText;

            peopleSearchSubmitted = true;
        }
        
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            peopleList.empty();

            pageData.set("isLoading", true);

            peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args) {
    searchBar = args.object;

    if (navigationContext.reference === "tab") {
        global.peopleSearchText = searchBar.text.trim();
    } else {
        if (isGroup === "Y") {
            global.peopleSearchTextGroup = searchBar.text.trim();
        } else {
            global.peopleSearchTextCompany = searchBar.text.trim();
        }
    }

    peopleSearchText = searchBar.text.trim();

    peopleList.empty();
    
    pageData.set("isLoading", true);

    peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function (){
        pageData.set("isLoading", false);

        peopleSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    peopleSearchText = "";

    if (navigationContext.reference === "tab") {
        global.peopleSearchText = "";
    } else {
        if (isGroup === "Y") {
            global.peopleSearchTextGroup = "";
        } else {
            global.peopleSearchTextCompany = "";
        }
    }

    if (peopleSearchSubmitted) {
        peopleList.empty();
        
        pageData.set("isLoading", true);

        peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function (){
            pageData.set("isLoading", false);

            peopleSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
}

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;
                var model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "people/person/person-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var peopleListCount = peopleList.length;
        var peoplePageNumber = Math.ceil(peopleListCount / peoplePageSize) + 1;
        var peopleRemainder = peopleListCount % peoplePageSize;

        if (peopleRemainder !== 0 && peopleRemainder < peoplePageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        peopleList.load(peopleSearchText, isGroup, peoplePageNumber, peoplePageSize, companyId).then(function (){
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onEmailClick(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
        }

        var view = args.view;
        var bindingContext = view.bindingContext;

        email.compose({
            to: [bindingContext.emailAddress]
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onPhoneClick(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
        }

        var view = args.view;
        var bindingContext = view.bindingContext;

        phone.dial(bindingContext.workPhone, false);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onRemarkClick(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
        }

        var view = args.view;
        var bindingContext = view.bindingContext;

        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark(bindingContext);
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark(bindingContext);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
        
                    swipeOpen = false;
                } else {
                    var view = args.view;
                    var model = view.bindingContext;
        
                    const navigationEntry = {
                        moduleName: "people/person/person-page",
                        context: model,
                        clearHistory: false
                    };
        
                    frameModule.topmost().navigate(navigationEntry);
                }
            }
            catch(e)
            {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            }
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var peopleListView = page.getViewById("peopleListView");

                if (platform.isAndroid) {
                    peopleListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    peopleListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        peopleListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        peopleListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

function addRemark(bindingContext) {
    var model = {
        remarksId: 0,
        personId: bindingContext.personId,
        fullName: bindingContext.fullName,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null,
        copyToCompanyFlag: "true"
    }

    const navigationEntry = {
        moduleName: "people/person/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onPhoneClick = onPhoneClick;
exports.onEmailClick = onEmailClick;
exports.onRemarkClick = onRemarkClick;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function PeopleViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, isGroup, page, pageSize, companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personfilter?filter=" + filter.replace(/ /g, "%20").replace(/‘/g, "'").replace(/’/g, "'") + "&isGroup=" + isGroup + "&page=" + page + "&pageSize=" + pageSize + "&companyId=" + companyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(person) {
                if (person.PersonId !== null && person.PersonId !== 0) {
                    var webAccessEndDate;
                    var bio;

                    if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                        webAccessEndDate = null;
                    } else {
                        var spaceIndex = person.WebAccessEndDate.indexOf(" ");
    
                        if (spaceIndex === -1)
                        {
                            webAccessEndDate = person.WebAccessEndDate;
                        }
                        else
                        {
                            webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                        }
                    }
                    
                    // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                    if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                        bio = "";
                    } else {
                        bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
                    }
                    
                    viewModel.push({
                        personId: person.PersonId,
                        prefix: person.Prefix,
                        firstName: person.FirstName,
                        middleName: person.MiddleName,
                        lastName: person.LastName,
                        suffix: person.Suffix,
                        fullName: person.FullName,
                        informalSalutation: person.InformalSalutation,
                        title: person.Title,
                        personCompany: person.PersonCompany,
                        companyId: person.CompanyId,
                        companyName: person.CompanyName,
                        companyId0: person.CompanyId0,
                        groupId: person.GroupId,
                        groupName: person.GroupName,
                        webAccessCode: person.WebAccessCode,
                        webAccessGroupType: person.WebAccessGroupType,
                        webAccessEndDate: webAccessEndDate, //person.WebAccessEndDate,
                        webAccessComment: person.WebAccessComment,
                        webAccess: person.WebAccess,
                        webRegistered: person.WebRegistered,
                        logonId: person.LogonId,
                        departmentId: person.DepartmentId,
                        department: person.Department,
                        supervisorId: person.SupervisorId,
                        supervisor: person.Supervisor,
                        ddScopeId: person.DdScopeId,
                        ddScope: person.DdScope,
                        ddFormatId: person.DdFormatId,
                        ddFormat: person.DdFormat,
                        profileReportStatusCode: person.ProfileReportStatusCode,
                        profileReportStatus: person.ProfileReportStatus,
                        profileChangesNeeded: person.ProfileChangesNeeded,
                        profileReportDate: person.ProfileReportDate,
                        lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                        lastPasswordChangeDate: person.LastPasswordChangeDate,
                        mainAddressesId: person.MainAddressesId,
                        streetAddress: person.StreetAddress,
                        address1: person.Address1,
                        address2: person.Address2,
                        city: person.City,
                        stateCode: person.StateCode,
                        state: person.State,
                        postalCode: person.PostalCode,
                        countryCode: person.CountryCode,
                        country: person.Country,
                        poBox: person.PoBox,
                        poBoxCity: person.PoBoxCity,
                        poBoxStateCode: person.PoBoxStateCode,
                        poBoxState: person.PoBoxState,
                        poBoxPostalCode: person.PoBoxPostalCode,
                        emailAddress: person.EmailAddress,
                        workPhone: person.WorkPhone,
                        extension: person.Extension,
                        cellPhone: person.CellPhone,
                        fax: person.Fax,
                        bio: bio,
                        secretaryId: person.SecretaryId,
                        secretary: person.Secretary,
                        secretaryTitle: person.SecretaryTitle,
                        secretaryEmailAddress: person.SecretaryEmailAddress,
                        secretaryWorkPhone: person.SecretaryWorkPhone,
                        secretaryExtension: person.SecretaryExtension,
                        secretaryFax: person.SecretaryFax
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = PeopleViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" visibility=\"{{ reference === 'tab' ? 'collapse' : 'visible' }}\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\" visibility=\"{{ companyId === 0 ? 'collapse' : 'visible' }}\">\n            <Label id=\"companyName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView id=\"peopleListView\" items=\"{{ peopleList }}\" itemLoading=\"onItemLoading\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <AbsoluteLayout>\n                        <!-- BACKGROUND: Swipe Actions -->\n                        <GridLayout columns=\"80, 80, *, 80\" rows=\"74\" width=\"100%\">\n                            <GridLayout col=\"0\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onPhoneClick\" class=\"swipe-icons orange\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf095;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Phone\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                            <GridLayout col=\"1\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onEmailClick\" class=\"swipe-icons blue\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf0e0;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Email\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                            <Label col=\"2\" />\n                            <GridLayout col=\"3\" columns=\"*\" rows=\"*, auto, auto, *\" tap=\"onRemarkClick\" class=\"swipe-icons green\">\n                                <Label row=\"0\" col=\"0\" text=\"\" />\n                                <Label row=\"1\" col=\"0\" text=\"&#xf075;\" class=\"tab-icon\" />\n                                <Label row=\"2\" col=\"0\" text=\"Remark\" class=\"tab-label\" />\n                                <Label row=\"3\" col=\"0\" text=\"\" />\n                            </GridLayout>\n                        </GridLayout>\n                        <!-- FOREGROUND: List View Item Details -->\n                        <StackLayout loaded=\"onLayoutLoaded\" backgroundColor=\"white\" width=\"100%\">\n                            <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\" height=\"74\">\n                                <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                    <Label text=\"{{ fullName }}\" class=\"list-view-item-main-top\" />\n                                    <Label text=\"{{ title }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                    <Label text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                                </StackLayout>\n                                <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                            </GridLayout>\n                        </StackLayout>\n                    </AbsoluteLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);
var email = __webpack_require__(235);
var phone = __webpack_require__(236);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Attributes";

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onPhoneTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onMobileTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onEmailTap(args) {
    try {
        var emailButton = args.object;
        var emailAddress = emailButton.text;

        email.compose({
            to: [emailAddress]
        });
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSecretaryPhoneTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSecretaryEmailTap(args) {
    try {
        var emailButton = args.object;
        var emailAddress = emailButton.text;

        email.compose({
            to: [emailAddress]
        });
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onPhoneTap = onPhoneTap;
exports.onMobileTap = onMobileTap;
exports.onEmailTap = onEmailTap;
exports.onSecretaryPhoneTap = onSecretaryPhoneTap;
exports.onSecretaryEmailTap = onSecretaryEmailTap;
; 
if (false ) {} 

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <ScrollView>\n        <GridLayout columns=\"*\" rows=\"auto, *\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n                <Label id=\"fullName\" text=\"{{ fullName }}\" horizontalAlignment=\"center\" />\n            </StackLayout>\n            <StackLayout row=\"1\" col=\"0\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Informal Name\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ informalSalutation }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Title\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ title }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Company\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ personCompany }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label text=\"ASSISTANT INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Name\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ secretary }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Title\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ secretaryTitle }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Phone\" class=\"list-view-item-left\" />\n                    <StackLayout row=\"0\" col=\"1\" orientation=\"horizontal\">\n                        <Label text=\"{{ secretaryWorkPhone }}\" tap=\"onSecretaryPhoneTap\" horizontalAlignment=\"right\" class=\"list-view-item-phone\" />\n                        <Label text=\"{{ ' x' + secretaryExtension }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" visibility=\"{{ secretaryExtension.length > 0 ? 'visible' : 'collapse' }}\" />\n                    </StackLayout>\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Fax\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ secretaryFax }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form-bottom\" visibility=\"{{ secretary.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Email\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ secretaryEmailAddress }}\" textWrap=\"true\" tap=\"onSecretaryEmailTap\" horizontalAlignment=\"right\" class=\"list-view-item-email\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"CONTACT INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Phone\" class=\"list-view-item-left\" />\n                    <StackLayout row=\"0\" col=\"1\" orientation=\"horizontal\">\n                        <Label text=\"{{ workPhone }}\" tap=\"onPhoneTap\" horizontalAlignment=\"right\" class=\"list-view-item-phone\" />\n                        <Label text=\"{{ ' x' + extension }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" visibility=\"{{ extension.length > 0 ? 'visible' : 'collapse' }}\" />\n                    </StackLayout>\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Mobile\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ cellPhone }}\" tap=\"onMobileTap\" horizontalAlignment=\"right\" class=\"list-view-item-phone\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Fax\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ fax }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Email\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ emailAddress }}\" textWrap=\"true\" tap=\"onEmailTap\" horizontalAlignment=\"right\" class=\"list-view-item-email\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                    <Label text=\"ADDRESS INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Street Address\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ streetAddress }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"City\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ city }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"State\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ state }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                    <Label row=\"0\" col=\"0\" text=\"Postal Code\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ postalCode }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\" visibility=\"{{ poBox.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label text=\"P.O. BOX INFORMATION\" verticalAlignment=\"bottom\" />\n                </StackLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ poBox.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"P.O. Box\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ poBox }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ poBox.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"City\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ poBoxCity }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ poBox.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"State\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ poBoxState }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form-bottom\" visibility=\"{{ poBox.length > 0 ? 'visible' : 'collapse' }}\">\n                    <Label row=\"0\" col=\"0\" text=\"Postal Code\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ poBoxPostalCode }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Bio";

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <ScrollView>\n        <GridLayout columns=\"*\" rows=\"auto, *\" width=\"100%\">\n            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title-space\">\n                <Label id=\"fullName\" text=\"{{ fullName }}\" horizontalAlignment=\"center\" />\n            </StackLayout>\n            <!-- <TextView row=\"1\" col=\"0\" text=\"{{ bio }}\" editable=\"false\" class=\"scroll-view-item\" /> -->\n            <StackLayout row=\"1\" col=\"0\">\n                <Label text=\"{{ bio }}\" editable=\"false\" class=\"scroll-view-item-bio\" textWrap=\"true\" />\n            </StackLayout>\n        </GridLayout>\n    </ScrollView>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

const CommitteesViewModel = __webpack_require__(243);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Committees";
        
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // committeesList.empty();
        
            // pageData.set("isLoading", true);
        
            // committeesList.load(navigationContext.companyId, isGroup, 1).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex + 1;

        committeesList.empty();
        
        pageData.set("isLoading", true);

        committeesList.load(navigationContext.personId, selectedIndex).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
; 
if (false ) {} 

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, committeeListCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personcommittees?personId=" + personId + "&committeeListCode=" + committeeListCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.PersonId !== null) {
                    var startDate;
                    var endDate;

                    if (committee.StartDate === null || committee.StartDate.length === 0) {
                        startDate = null;
                    } else {
                        startDate = committee.StartDate.substring(0, committee.StartDate.indexOf(" "));
                    }

                    if (committee.EndDate === null || committee.EndDate.length === 0) {
                        endDate = null;
                    } else {
                        endDate = committee.EndDate.substring(0, committee.EndDate.indexOf(" "));
                    }

                    viewModel.push({
                        personId: committee.PersonId,
                        fullName: committee.FullName,
                        committeeListCode: committee.CommitteeListCode,
                        committeeList: committee.CommitteeList,
                        committeeCode: committee.CommitteeCode,
                        committee: committee.Committee,
                        positionCode: committee.PositionCode,
                        position: committee.Position,
                        designatedMember: committee.DesignatedMember,
                        memberTypeCode: committee.MemberTypeCode,
                        memberType: committee.MemberType,
                        startDate: startDate,
                        endDate: endDate
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = CommitteesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <SegmentedBar class=\"segmented-bar\" selectedIndexChanged=\"onSelectedIndexChanged\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Committees\" />\n                    <SegmentedBarItem title=\"Contact Lists\" />\n                    <SegmentedBarItem title=\"Temporary Lists\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ committeesList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout class=\"list-view-item\">\n                        <StackLayout orientation=\"horizontal\">\n                            <Label text=\"{{ committee }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ memberTypeCode === 'M' ? 'visible' : 'collapse' }}\" />\n                        </StackLayout>\n                        <!-- <Label text=\"{{ committee }}\" textWrap=\"true\" class=\"list-view-item-main-top\" /> -->\n                        <Label text=\"{{ designatedMember === 'N' ? positionCode === 10 ? memberType : position : positionCode === 10 ? memberType : position }}\" class=\"list-view-item-sub\" visibility=\"{{ committeeListCode === 1 ? 'visible' : 'collapse' }}\" />\n                        <Label text=\"{{ endDate === null ? 'Since ' + startDate : startDate + ' to ' + endDate }}\" class=\"list-view-item-sub\" />\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

const ContactsViewModel = __webpack_require__(246);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var isGroup;

var contactsList = new ContactsViewModel([]);

var pageData = new ObservableModule.fromObject({
    contactsList: contactsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Contact for Companies";
    
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            contactsList.empty();

            pageData.set("isLoading", true);

            contactsList.load(navigationContext.personId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function ContactsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personcontacts?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            var prevContactType = "";

            data.forEach(function(contact) {
                var showContactHeader = false;

                if (prevContactType !== contact.ContactType && contact.ContactType !== null) {
                    showContactHeader = true;
                }

                viewModel.push({
                    personId: contact.PersonId,
                    fullName: contact.FullName,
                    companyId: contact.CompanyId,
                    companyName: contact.CompanyName,
                    companyId0: contact.CompanyId0,
                    groupId: contact.GroupId,
                    groupName: contact.GroupName,
                    contactCode: contact.ContactCode,
                    contactType: contact.ContactType,
                    primaryRep: contact.PrimaryRep,
                    sortOrder: contact.SortOrder,
                    showContactHeader: showContactHeader
                });

                prevContactType = contact.ContactType;
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = ContactsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ contactsList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <StackLayout class=\"list-view-item-header\" visibility=\"{{ showContactHeader ? 'visible' : 'collapse' }}\">\n                            <Label text=\"{{ contactType }}\" textWrap=\"true\" />\n                        </StackLayout>\n                        <StackLayout class=\"list-view-item-header-separator\" visibility=\"{{ showContactHeader ? 'collapse' : 'visible' }}\"></StackLayout>\n                        <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" orientation=\"horizontal\" verticalAlignment=\"middle\">\n                                <Label text=\"{{ companyName }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                <Label text=\"&#xf005;\" class=\"fn-list-view-item-small\" verticalAlignment=\"middle\" visibility=\"{{ primaryRep === '1' ? 'visible' : 'collapse' }}\" />\n                            </StackLayout>\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

const MeetingsViewModel = __webpack_require__(249);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var meetingsList = new MeetingsViewModel([]);

var pageData = new observableModule.fromObject({
    meetingsList: meetingsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Meetings";
        
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            meetingsList.empty();
        
            pageData.set("isLoading", true);

            meetingsList.load(navigationContext.personId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personmeetings?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                if (meeting.PersonId !== null) {
                    var startDate;
                    var endDate;

                    if (meeting.StartDate === null || meeting.StartDate.length === 0) {
                        startDate = null;
                    } else {
                        startDate = meeting.StartDate.substring(0, meeting.StartDate.indexOf(" "));
                    }

                    if (meeting.EndDate === null || meeting.EndDate.length === 0) {
                        endDate = null;
                    } else {
                        endDate = meeting.EndDate.substring(0, meeting.EndDate.indexOf(" "));
                    }

                    viewModel.push({
                        personId: meeting.PersonId,
                        fullName: meeting.FullName,
                        meetingCode: meeting.MeetingCode,
                        meeting: meeting.Meeting,
                        attendanceStatusCode: meeting.AttendanceStatusCode,
                        attendanceStatus: meeting.AttendanceStatus,
                        startDate: startDate,
                        endDate: endDate
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = MeetingsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ meetingsList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout class=\"list-view-item\">\n                        <Label text=\"{{ meeting }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

const PacAuthorizationViewModel = __webpack_require__(252);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var pacAuthorizationList = new PacAuthorizationViewModel([]);

var pageData = new observableModule.fromObject({
    pacAuthorizationList: pacAuthorizationList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        page.actionBar.title = "PAC Authorization";
                
        var fullName = page.getViewById("fullName");
    
        fullName.text = navigationContext.fullName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            pacAuthorizationList.empty();
        
            pageData.set("isLoading", true);
        
            pacAuthorizationList.load(navigationContext.personId).then(function () {
                pageData.set("isLoading", false);
            });
        
            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function PacAuthorizationViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personpaceligible?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(pacEligible) {
                viewModel.push({
                    personId: pacEligible.PersonId,
                    fullName: pacEligible.FullName,
                    year: pacEligible.Year,
                    eligible: pacEligible.Eligible,
                    pacEligibleId: pacEligible.pacEligibleId
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = PacAuthorizationViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ pacAuthorizationList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"auto, auto, *\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ year }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&nbsp;&nbsp;&nbsp;\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"2\" text=\"{{ eligible === 'Y' ? 'Authorized' : eligible === 'N' ? 'Not Authorized' : 'Not Reported' }}\" style=\"{{ eligible === 'Y' ? '' : eligible === 'N' ? '' : 'color: #666; font-style: italic;' }}\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

const PersonViewModel = __webpack_require__(255);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);
var page;
var navigationContext;
var isGroup;
var hasBio;

var personList = new PersonViewModel([]);

var pageData = new observableModule.fromObject({
    personList: personList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    page.actionBar.title = "Person";
    
    var fullName = page.getViewById("fullName");
    
    fullName.text = navigationContext.fullName;

    if (navigationContext.bio.length > 0)
    {
        hasBio = true;
    }
    else
    {
        hasBio = false;
    }

    if (args.isBackNavigation) {
        // Do Nothing on Back Navigation
    } else {
        personList.empty();
        personList.load(hasBio);

        page.bindingContext = pageData;
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args)
{
    try
    {
        var index = args.index;
        var item = personList.getItem(index);
        
        const navigationEntry = {
            moduleName: item.navigateTo,
            context: navigationContext,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var dialogs = __webpack_require__(8);

function PersonViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(hasBio) {
        var data;

        if (global.isProfileEngagement)
        {
            if (hasBio)
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Bio", "navigateTo": "people/person/bio/bio-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"},
                    {"title": "PAC Authorization", "navigateTo": "people/person/pacauthorization/pacauthorization-page"}
                ];
            }
            else
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"},
                    {"title": "PAC Authorization", "navigateTo": "people/person/pacauthorization/pacauthorization-page"}
                ];
            }
        }
        else
        {
            if (hasBio)
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Bio", "navigateTo": "people/person/bio/bio-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"}
                ];
            }
            else
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"}
                ];
            }
        } 

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = PersonViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" width=\"100%\">\n            <ListView items=\"{{ personList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ title }}\" verticalAlignment=\"middle\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" verticalAlignment=\"middle\" class=\"fn-list-view-item\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Remark";

    navigationContext.isProfileMembership = global.isProfileMembership;

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"{{ fullName }}\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Remark Level\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ publicPrivate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Remark Type\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ remarkType }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Creation Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ creationDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Completion Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ completionDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <!-- isProfileMembership ? 'visible' : 'collapse' - Previously applied to the below GridLayout to hide the Visit Date in certain instances. -->\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"{{ visitDate.length === 0 ? 'collapse' : 'visible' }}\">\n                <Label row=\"0\" col=\"0\" text=\"Visit Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ visitDate }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Created By\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ userName }}\" horizontalAlignment=\"right\"  class=\"list-view-item-right\" />\n            </GridLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Comment\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\">\n            <GridLayout columns=\"*\" rows=\"*\">\n                <TextView text=\"{{ comment }}\" editable=\"false\" class=\"scroll-view-item\" />\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
const appModule = __webpack_require__(30);
var http = __webpack_require__(18);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;

        if (platform.isIOS) {
            const controller = frameModule.topmost().ios.controller;
            // get the view controller navigation item
            const navigationItem = controller.visibleViewController.navigationItem;
            // hide back button
            navigationItem.setHidesBackButtonAnimated(true, false);
        }

        if (args.isBackNavigation) {
            var remarkLevelLabel = page.getViewById("remarkLevelLabel");
            var remarkTypeLabel = page.getViewById("remarkTypeLabel");
            var creationDateLabel = page.getViewById("creationDateLabel");
            var completionDateLabel = page.getViewById("completionDateLabel");
            var visitDateLabel = page.getViewById("visitDateLabel");

            remarkLevelLabel.text = pageData.publicPrivate;
            remarkTypeLabel.text = pageData.remarkType;

            var completionDateStackLayout = page.getViewById("completionDateStackLayout");

            if (pageData.remarkTypeCode === "8") {
                pageData.completionDate = null;

                completionDateStackLayout.visibility = "collapse";
            } else {
                pageData.completionDate = new Date();

                completionDateStackLayout.visibility = "visible";
            }

            creationDateLabel.text = dateConverter(pageData.creationDate, "MM/DD/YYYY");
            completionDateLabel.text = dateConverter(pageData.completionDate, "MM/DD/YYYY");
            visitDateLabel.text = dateConverter(pageData.visitDate, "MM/DD/YYYY");

        } else {
            navigationContext = page.navigationContext;

            navigationContext.isProfileMembership = global.isProfileMembership;
            
            pageData = navigationContext;

            page.actionBar.title = "Add Person Remark";

            navigationContext.isProfileMembership = global.isProfileMembership;

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var visitDateDatePicker = page.getViewById("visitDateDatePicker");
        
        visitDateDatePicker.on("dateChange", function(args) {
            var visitDateLabel = page.getViewById("visitDateLabel");

            visitDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutRemarkLevelTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "people/person/remarks/remarkadd/remarklevel/remarklevel-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutRemarkTypeTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "people/person/remarks/remarkadd/remarktype/remarktype-page",
            context: pageData,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCreationDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCompletionDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutVisitDateTap(args) {
    try {
        var visitDateGridLayout = page.getViewById("visitDateGridLayout");
        
        if (visitDateGridLayout.visibility === "collapse") {
            visitDateGridLayout.visibility = "visible";

            page.addCss("#visitDateLabel {color: #cc2d30;}");
        } else {
            visitDateGridLayout.visibility = "collapse";

            page.addCss("#visitDateLabel {color: #666;}");
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCreatedByTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onTextViewFocus(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onCancelTap(args) {
    try {
        if (platform.isAndroid) {
            dialogs.confirm({
                title: "Save",
                message: "Would you like to save the remark?",
                okButtonText: "Yes",
                cancelButtonText: "No"
            }).then(function (result) {
                if (result) {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        } else if (platform.isIOS) {
            dialogs.action({
                cancelButtonText: "Cancel",
                actions: ["Save Remark"]
            }).then(function (result) {
                if (result === "Save Remark") {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSaveTap(args) {
    try {
        collapseDates();

        saveRemark();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveRemark() {
    if (pageData.creationDate !== null) {
        pageData.creationDate = dateConverter(pageData.creationDate, "MM/DD/YYYY");
    }

    if (pageData.completionDate !== null) {
        pageData.completionDate = dateConverter(pageData.completionDate, "MM/DD/YYYY");
    }

    if (pageData.visitDate !== null) {
        pageData.visitDate = dateConverter(pageData.visitDate, "MM/DD/YYYY");
    }

    http.request({
        url: global.apiBaseServiceUrl + "person/insertpersonremark",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);

        if (data.RemarksId !== null)
        {
            global.refreshRemarks = true;

            pageData.remarksId = data.RemarksId;

            frameModule.topmost().goBack();
        } else {
            dialogs.alert("There was an error saving the remark.");
        }
        
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

function dateConverter(value, format) {
    let result = format;

    if (value != null)
    {
        const day = value.getDate();

        result = result.replace("DD", day < 10 ? `0${day}` : day);

        const month = value.getMonth() + 1;

        result = result.replace("MM", month < 10 ? `0${month}` : month);
        result = result.replace("YYYY", value.getFullYear());
    }

    return result;
};

function collapseDates() {
    var visitDateGridLayout = page.getViewById("visitDateGridLayout");

    visitDateGridLayout.visibility = "collapse";

    page.addCss("#visitDateLabel {color: #666;}");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onStackLayoutRemarkLevelTap = onStackLayoutRemarkLevelTap;
exports.onStackLayoutRemarkTypeTap = onStackLayoutRemarkTypeTap;
exports.onStackLayoutCreationDateTap = onStackLayoutCreationDateTap;
exports.onStackLayoutCompletionDateTap = onStackLayoutCompletionDateTap;
exports.onStackLayoutVisitDateTap = onStackLayoutVisitDateTap;
exports.onStackLayoutCreatedByTap = onStackLayoutCreatedByTap;
exports.onTextViewFocus = onTextViewFocus;
exports.onCancelTap = onCancelTap;
exports.onSaveTap = onSaveTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <ActionItem tap=\"onCancelTap\" android.systemIcon=\"ic_menu_close_clear_cancel\" ios.systemIcon=\"1\" ios.position=\"left\" />\n        <ActionItem tap=\"onSaveTap\" ios.systemIcon=\"3\" android.systemIcon=\"ic_menu_save\" ios.position=\"right\" />\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"*\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\">\n            <StackLayout verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n                <Label id=\"fullName\" text=\"{{ fullName }}\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutRemarkLevelTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Remark Level\" class=\"list-view-item-left\" />\n                    <Label id=\"remarkLevelLabel\" row=\"0\" col=\"1\" text=\"{{ publicPrivate }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutRemarkTypeTap\">\n                <GridLayout columns=\"auto, *, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Remark Type\" class=\"list-view-item-left\" />\n                    <Label id=\"remarkTypeLabel\" row=\"0\" col=\"1\" text=\"{{ remarkType }}\" class=\"list-view-item-right\" />\n                    <Label row=\"0\" col=\"2\" text=\"&#xf105;\" class=\"fn-list-view-item\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout tap=\"onStackLayoutCreationDateTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Creation Date\" class=\"list-view-item-left\" />\n                    <Label id=\"creationDateLabel\" row=\"0\" col=\"1\" text=\"{{ creationDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <StackLayout id=\"completionDateStackLayout\" tap=\"onStackLayoutCompletionDateTap\" visibility=\"{{ completionDate === null ? 'collapse' : 'visible' }}\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Completion Date\" class=\"list-view-item-left\" />\n                    <Label id=\"completionDateLabel\" row=\"0\" col=\"1\" text=\"{{ completionDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- visibility=\"{{ isProfileMembership ? 'visible' : 'collapse' }}\" - Previously applied to the below StackLayout to hide the Visit Date in certain instances. -->\n            <StackLayout tap=\"onStackLayoutVisitDateTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Visit Date\" class=\"list-view-item-left\" />\n                    <Label id=\"visitDateLabel\" row=\"0\" col=\"1\" text=\"{{ visitDate | dateConverter(dateFormat) }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <GridLayout id=\"visitDateGridLayout\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\" visibility=\"collapse\">\n                <DatePicker id=\"visitDateDatePicker\" row=\"0\" col=\"0\" date=\"{{ visitDate }}\" horizontalAlignment=\"center\" class=\"list-view-item-picker\"></DatePicker>\n            </GridLayout>\n            <StackLayout tap=\"onStackLayoutCreatedByTap\">\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                    <Label row=\"0\" col=\"0\" text=\"Created By\" class=\"list-view-item-left\" />\n                    <Label row=\"0\" col=\"1\" text=\"{{ userName }}\" class=\"list-view-item-right\" />\n                </GridLayout>\n            </StackLayout>\n            <!-- <GridLayout columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Comment\" class=\"list-view-item-left\" />\n            </GridLayout> -->\n            <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item-form\">\n                <TextView text=\"{{ comment }}\" focus=\"onTextViewFocus\" hint=\"Comment\" class=\"list-view-item-textview\" />\n            </GridLayout>\n        </StackLayout>\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarkLevelViewModel = __webpack_require__(262);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var remarkLevelList = new RemarkLevelViewModel([]);

var remarkLevelIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkLevelIndex: remarkLevelIndex,
    remarkLevelList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkLevelList === undefined) {
            pageData.set("isLoading", true);

            remarkLevelList.load(global.isProfileExecutive).then(function () {
                global.remarkLevelList = remarkLevelList;

                pageData.remarkLevelList = global.remarkLevelList;

                remarkLevelIndex = 0;

                if (pageData.boundData.publicPrivate !== null && pageData.boundData.publicPrivate.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                        if (pageData.remarkLevelList.List.getItem(i).remarkLevelCode === pageData.boundData.publicPrivate) {
                            remarkLevelIndex = i;
                        }
                    }
                }

                pageData.remarkLevelIndex = remarkLevelIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkLevelList = global.remarkLevelList;
            
            remarkLevelIndex = 0;

            if (pageData.boundData.publicPrivate !== null && pageData.boundData.publicPrivate.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                    if (pageData.remarkLevelList.List.getItem(i).remarkLevelCode === pageData.boundData.publicPrivate) {
                        remarkLevelIndex = i;
                    }
                }
            }

            pageData.remarkLevelIndex = remarkLevelIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var remarkLevelListPicker = page.getViewById("remarkLevelListPicker");
        
        remarkLevelListPicker.on("selectedIndexChange", function(args) {
            var remarkLevelItem = pageData.remarkLevelList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkLevelItem.remarkLevelCode + ": " + remarkLevelItem.remarkLevel);
            pageData.boundData.publicPrivate = remarkLevelItem.remarkLevel;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5).Observable;
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarkLevelViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function(isExecutive) {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarklevels?isExecutive=" + isExecutive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkLevel) {
                viewModel.Items.push(
                    remarkLevel.RemarkLevelDescription
                );

                viewModel.List.push({
                    remarkLevelCode: remarkLevel.RemarkLevelDescription,
                    remarkLevel: remarkLevel.RemarkLevelDescription
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkLevelViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"remarkLevelListPicker\" row=\"0\" col=\"0\" items=\"{{ remarkLevelList.Items }}\" selectedIndex=\"{{ remarkLevelIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarkTypeViewModel = __webpack_require__(265);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var remarkTypeList = new RemarkTypeViewModel([]);

var remarkTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkTypeIndex: remarkTypeIndex,
    remarkTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkTypeList === undefined) {
            pageData.set("isLoading", true);

            remarkTypeList.load().then(function () {
                global.remarkTypeList = remarkTypeList;

                pageData.remarkTypeList = global.remarkTypeList;

                remarkTypeIndex = 0;

                if (pageData.boundData.remarkTypeCode !== null && pageData.boundData.remarkTypeCode.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                        if (pageData.remarkTypeList.List.getItem(i).remarkTypeCode === pageData.boundData.remarkTypeCode) {
                            remarkTypeIndex = i;
                        }
                    }
                }

                pageData.remarkTypeIndex = remarkTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkTypeList = global.remarkTypeList;
            
            remarkTypeIndex = 0;

            if (pageData.boundData.remarkTypeCode !== null && pageData.boundData.remarkTypeCode.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                    if (pageData.remarkTypeList.List.getItem(i).remarkTypeCode === pageData.boundData.remarkTypeCode) {
                        remarkTypeIndex = i;
                    }
                }
            }

            pageData.remarkTypeIndex = remarkTypeIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var remarkTypeListPicker = page.getViewById("remarkTypeListPicker");
        
        remarkTypeListPicker.on("selectedIndexChange", function(args) {
            var remarkTypeItem = pageData.remarkTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkTypeItem.remarkTypeCode + ": " + remarkTypeItem.remarkType);
            pageData.boundData.remarkTypeCode = remarkTypeItem.remarkTypeCode;
            pageData.boundData.remarkType = remarkTypeItem.remarkType;
        });

    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5).Observable;
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarkTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarktypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                viewModel.Items.push(
                    remarkType.RemarkTypeDescription
                );

                viewModel.List.push({
                    remarkTypeCode: remarkType.RemarkTypeCode,
                    remarkType: remarkType.RemarkTypeDescription
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkTypeViewModel;; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" loaded=\"onLoaded\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\">\n        <StackLayout row=\"0\" col=\"0\" class=\"list-view-section-header\"></StackLayout>\n        <GridLayout row=\"1\" col=\"0\" columns=\"*\" rows=\"auto\" class=\"list-view-item-form\">\n            <ListPicker id=\"remarkTypeListPicker\" row=\"0\" col=\"0\" items=\"{{ remarkTypeList.Items }}\" selectedIndex=\"{{ remarkTypeIndex }}\" \n                horizontalAlignment=\"center\" class=\"list-view-item-picker\"></ListPicker>\n        </GridLayout>\n        <StackLayout row=\"2\" col=\"0\" height=\"100%\" class=\"list-view-section-header\"></StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const RemarksViewModel = __webpack_require__(268);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var http = __webpack_require__(18);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;
var searchBar;
var remarksPageSize = 25;
var remarksSearchText = "";
var remarksSearchSubmitted = false;
var personId;

var remarksList = new RemarksViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarksList: remarksList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        personId = navigationContext.personId;

        page.actionBar.title = "Remarks";

        remarksSearchText = global.remarksSearchText;
        
        if (remarksSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = remarksSearchText;

            remarksSearchSubmitted = true;
        }

        if (args.isBackNavigation) {
            if (global.refreshRemarks) {
                remarksList.empty();

                pageData.set("isLoading", true);

                remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
                    pageData.set("isLoading", false);
                });

                page.bindingContext = pageData;
            }
        } else {
            global.refreshRemarks = false;

            remarksList.empty();

            pageData.set("isLoading", true);

            remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAddTap(args) {
    try
    {
        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark();
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark();
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args) {
    searchBar = args.object;

    global.remarksSearchText = searchBar.text.trim();

    remarksSearchText = searchBar.text.trim();

    remarksList.empty();
    
    pageData.set("isLoading", true);

    remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function (){
        pageData.set("isLoading", false);

        remarksSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    remarksSearchText = "";

    global.remarksSearchText = "";

    if (remarksSearchSubmitted) {
        remarksList.empty();
        
        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
            pageData.set("isLoading", false);

            remarksSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "people/person/remarks/remark/remark-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoadMoreItems(args) {
    try {
        var remarksListCount = remarksList.length;
        var remarksPageNumber = Math.ceil(remarksListCount / remarksPageSize) + 1;
        var remarksRemainder = remarksListCount % remarksPageSize;

        if (remarksRemainder !== 0 && remarksRemainder < remarksPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, personId, global.isProfileExecutive, remarksPageNumber, remarksPageSize, global.personId).then(function () {
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function addRemark() {
    var model = {
        remarksId: 0,
        personId: navigationContext.personId,
        fullName: navigationContext.fullName,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null,
        copyToCompanyFlag: "true"
    }

    const navigationEntry = {
        moduleName: "people/person/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function RemarksViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, personId, isExecutive, page, pageSize, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personremarksfilter?filter=" + filter.replace(/ /g, "%20") + "&personId=" + personId + 
                "&isExecutive" + isExecutive + "&page=" + page + "&pageSize=" + pageSize + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remark) {
                if (remark.PersonId !== null) {
                    viewModel.push({
                        remarksId: remark.RemarksId,
                        personId: remark.PersonId,
                        fullName: remark.FullName,
                        creationDate: remark.CreationDate.substring(0, remark.CreationDate.indexOf(" ")),
                        completionDate: remark.CompletionDate.substring(0, remark.CompletionDate.indexOf(" ")),
                        remarkTypeCode: remark.RemarkTypeCode,
                        remarkType: remark.RemarkType,
                        commentAbbreviated: remark.CommentAbbreviated,
                        comment: remark.Comment,
                        userName: remark.UserName,
                        publicPrivate: remark.PublicPrivate,
                        visitDate: remark.VisitDate.substring(0, remark.VisitDate.indexOf(" ")),
                        copyToCompany: remark.CopyToCompany
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarksViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n        <ActionItem tap=\"onAddTap\" ios.systemIcon=\"4\" android.systemIcon=\"ic_menu_add\" ios.position=\"right\" />\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" direction=\"horizontal\">\n            <SearchBar id=\"searchBar\" hint=\"Search\" text=\"\" loaded=\"onSearchBarLoaded\" submit=\"onSubmit\" clear=\"onClear\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ remarksList }}\" itemTap=\"onItemTap\" loadMoreItems=\"onLoadMoreItems\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"middle\">\n                                <GridLayout columns=\"*, auto\" rows=\"*\">\n                                    <Label row=\"0\" col=\"0\" text=\"{{ remarkType }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                                    <Label row=\"0\" col=\"1\" text=\"{{ creationDate }}\" class=\"list-view-item-main-top\" />\n                                </GridLayout>\n                                <Label text=\"{{ commentAbbreviated }}\" textWrap=\"true\" class=\"list-view-item-sub\" />\n                            </StackLayout>\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

const StatesViewModel = __webpack_require__(271);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var statesList = new StatesViewModel([]);

var pageData = new ObservableModule.fromObject({
    statesList: statesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Subscription States";

        var fullName = page.getViewById("fullName");
        var publication = page.getViewById("publication");
        
        fullName.text = navigationContext.fullName;
        publication.text = navigationContext.publication;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            statesList.empty();

            pageData.set("isLoading", true);

            statesList.load(navigationContext.personId, navigationContext.publicationCode).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function StatesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, publicationCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personsubscriptionstates?personId=" + personId + "&publicationCode=" + publicationCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);
            
            data.forEach(function(subscription) {
                var state;

                if (subscription.State.length === 0) {
                    state = "All States";
                } else {
                    state = subscription.State;
                }

                viewModel.push({
                    personId: subscription.PersonId,
                    fullName: subscription.FullName,
                    subscriptionTypeId: subscription.SubscriptionTypeId,
                    subscriptionType: subscription.SubscriptionType,
                    publicationCode: subscription.PublicationCode,
                    publication: subscription.Publication,
                    stateCode: subscription.StateCode,
                    state: state
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = StatesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"publication\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ statesList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ state }}\" class=\"list-view-item-main-top\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

const SubscriptionsViewModel = __webpack_require__(274);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var subscriptionsList = new SubscriptionsViewModel([]);

var pageData = new ObservableModule.fromObject({
    subscriptionsList: subscriptionsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Subscriptions";

        var fullName = page.getViewById("fullName");
        var subscriptionType = page.getViewById("subscriptionType");
        
        fullName.text = navigationContext.fullName;
        subscriptionType.text = navigationContext.subscriptionType;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            subscriptionsList.empty();

            pageData.set("isLoading", true);

            subscriptionsList.load(navigationContext.personId, navigationContext.subscriptionTypeId).then(function () {
                pageData.set("isLoading", false);
            });

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        if (model.subscriptionTypeId === 2) {
            const navigationEntry = {
                moduleName: "people/person/subscriptiontypes/subscriptions/states/states-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function SubscriptionsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, subscriptionTypeId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personsubscriptions?personId=" + personId + "&subscriptionTypeId=" + subscriptionTypeId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(subscription) {
                viewModel.push({
                    personId: subscription.PersonId,
                    fullName: subscription.FullName,
                    subscriptionTypeId: subscription.SubscriptionTypeId,
                    subscriptionType: subscription.SubscriptionType,
                    publicationCode: subscription.PublicationCode,
                    publication: subscription.Publication
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SubscriptionsViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" class=\"view-subtitle\">\n            <Label id=\"subscriptionType\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ subscriptionsList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout>\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ publication }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\"\n                                visibility=\"{{ subscriptionTypeId === 2 ? 'visible' : 'collapse' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

const SubscriptionTypesViewModel = __webpack_require__(277);
const platform = __webpack_require__(13);
const ObservableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var subscriptionTypesList = new SubscriptionTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    subscriptionTypesList: subscriptionTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
 
        page.actionBar.title = "Subscription Types";
    
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        subscriptionTypesList.empty();

        pageData.set("isLoading", true);

        subscriptionTypesList.load(navigationContext.personId).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        if (model.subscriptionTypeId !== 0) {
            const navigationEntry = {
                moduleName: "people/person/subscriptiontypes/subscriptions/subscriptions-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
; 
if (false ) {} 

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function SubscriptionTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personsubscriptiontypes?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(subscriptionType) {
                viewModel.push({
                    personId: subscriptionType.PersonId,
                    fullName: subscriptionType.FullName,
                    subscriptionTypeId: subscriptionType.SubscriptionTypeId,
                    subscriptionType: subscriptionType.SubscriptionType
                });
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = SubscriptionTypesViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n    \n    <GridLayout columns=\"*\" rows=\"auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ subscriptionTypesList }}\" itemTap=\"onItemTap\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout backgroundColor=\"white\" width=\"100%\">\n                        <GridLayout columns=\"*, auto\" rows=\"*\" class=\"list-view-item\">\n                            <Label row=\"0\" col=\"0\" text=\"{{ subscriptionType }}\" class=\"list-view-item-main-top\" />\n                            <Label row=\"0\" col=\"1\" text=\"&#xf105;\" class=\"fn-list-view-item\" verticalAlignment=\"middle\" \n                                visibility=\"{{ subscriptionTypeId === 0 ? 'collapse' : 'visible' }}\" />\n                        </GridLayout>\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"2\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

const WebAccessViewModel = __webpack_require__(280);
const observableModule = __webpack_require__(5);
var frameModule = __webpack_require__(12);
var dialogs = __webpack_require__(8);

var page;
var navigationContext;

var webAccessList = new WebAccessViewModel([]);

var pageData = new observableModule.fromObject({
    details: null,
    webAccessList: webAccessList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Web Access";
        
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            webAccessList.empty();
        
            pageData.set("isLoading", true);

            webAccessList.load(navigationContext.personId).then(function () {
                pageData.set("isLoading", false);
            });

            pageData.details = navigationContext;

            page.bindingContext = pageData;
        }
    }
    catch(e)
    {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
; 
if (false ) {} 

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const ObservableModule = __webpack_require__(5);
var ObservableArray = __webpack_require__(14).ObservableArray;
var http = __webpack_require__(18);
var dialogs = __webpack_require__(8);

function WebAccessViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personwebaccess?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(webAccess) {
                if (webAccess.PersonId !== null) {
                    viewModel.push({
                        personId: webAccess.PersonId,
                        fullName: webAccess.FullName,
                        webAccessCode: webAccess.WebAccessCode,
                        webAccess: webAccess.WebAccess,
                        description: webAccess.Description,
                        sortOrder: webAccess.SortOrder
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = WebAccessViewModel;
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns=\"http://schemas.nativescript.org/tns.xsd\" >\n    <ActionBar class=\"action-bar\">\n        <android>\n            <NavigationButton android.systemIcon=\"ic_menu_back\" tap=\"onBackTap\" />\n        </android>\n    </ActionBar>\n\n    <GridLayout columns=\"*\" rows=\"auto, auto, *\" height=\"100%\" width=\"100%\">\n        <StackLayout row=\"0\" col=\"0\" verticalAlignment=\"top\" horizontalAlignment=\"center\" class=\"view-title\">\n            <Label id=\"fullName\" text=\"\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n        </StackLayout>\n        <StackLayout row=\"1\" col=\"0\" verticalAlignment=\"top\">\n            <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Web Access?\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ details.webAccess === 'Y' ? 'Yes' : 'No' }}\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form\">\n                <Label row=\"0\" col=\"0\" text=\"Web Access End Date\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ details.webAccessEndDate }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <GridLayout columns=\"auto, *\" rows=\"auto\" class=\"list-view-item-form-bottom\">\n                <Label row=\"0\" col=\"0\" text=\"Registered for Website?\" class=\"list-view-item-left\" />\n                <Label row=\"0\" col=\"1\" text=\"{{ details.webRegistered === 'Y' ? 'Yes' : 'No' }}\" textWrap=\"true\" horizontalAlignment=\"right\" class=\"list-view-item-right\" />\n            </GridLayout>\n            <StackLayout verticalAlignment=\"bottom\" class=\"list-view-section-header\">\n                <Label text=\"WEB ACCESS SECURITY ROLES\" verticalAlignment=\"bottom\" />\n            </StackLayout>\n        </StackLayout>\n        <StackLayout row=\"2\" col=\"0\" verticalAlignment=\"top\">\n            <ListView items=\"{{ webAccessList }}\" height=\"100%\">\n                <ListView.itemTemplate>\n                    <StackLayout class=\"list-view-item\">\n                        <Label text=\"{{ webAccess }}\" textWrap=\"true\" class=\"list-view-item-main-top\" />\n                    </StackLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n        <ActivityIndicator busy=\"{{ isLoading }}\" android:height=\"25%\" android:width=\"25%\" ios.activityIndicatorViewStyle=\"whiteLarge\" rowSpan=\"3\" colSpan=\"1\" />\n    </GridLayout>\n</Page>\n"; 
if (false ) {} 

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// There is a bug in angular: https://github.com/angular/angular-cli/pull/8589/files
// Legendary stuff, its webpack plugin pretty much doesn't work with empty TypeScript files in v1.8.3
void 0;
; 
if (false ) {} 

/***/ }),
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": 122,
	"./app.css": 121,
	"./app.js": 107,
	"./bundle-config.js": 123,
	"./committeetypes/committees/committee/committee-page.js": 124,
	"./committeetypes/committees/committee/committee-page.xml": 126,
	"./committeetypes/committees/committee/committee-view-model.js": 125,
	"./committeetypes/committees/committees-page.js": 127,
	"./committeetypes/committees/committees-page.xml": 129,
	"./committeetypes/committees/committees-view-model.js": 128,
	"./committeetypes/committeetypes-page.js": 130,
	"./committeetypes/committeetypes-page.xml": 132,
	"./committeetypes/committeetypes-view-model.js": 131,
	"./companygroups/companygroup/attributes/attributes-page.js": 133,
	"./companygroups/companygroup/attributes/attributes-page.xml": 134,
	"./companygroups/companygroup/committees/committeemembers/committeemembers-page.js": 135,
	"./companygroups/companygroup/committees/committeemembers/committeemembers-page.xml": 137,
	"./companygroups/companygroup/committees/committeemembers/committeemembers-view-model.js": 136,
	"./companygroups/companygroup/committees/committees-page.js": 138,
	"./companygroups/companygroup/committees/committees-page.xml": 140,
	"./companygroups/companygroup/committees/committees-view-model.js": 139,
	"./companygroups/companygroup/companies/addresses/addresses-page.js": 141,
	"./companygroups/companygroup/companies/addresses/addresses-page.xml": 143,
	"./companygroups/companygroup/companies/addresses/addresses-view-model.js": 142,
	"./companygroups/companygroup/companies/companies-page.js": 144,
	"./companygroups/companygroup/companies/companies-page.xml": 146,
	"./companygroups/companygroup/companies/companies-view-model.js": 145,
	"./companygroups/companygroup/companies/pacauthorization/pacauthorization-page.js": 147,
	"./companygroups/companygroup/companies/pacauthorization/pacauthorization-page.xml": 149,
	"./companygroups/companygroup/companies/pacauthorization/pacauthorization-view-model.js": 148,
	"./companygroups/companygroup/companygroup-page.js": 150,
	"./companygroups/companygroup/companygroup-page.xml": 152,
	"./companygroups/companygroup/companygroup-view-model.js": 151,
	"./companygroups/companygroup/contacttypes/contacts/contacts-page.js": 153,
	"./companygroups/companygroup/contacttypes/contacts/contacts-page.xml": 155,
	"./companygroups/companygroup/contacttypes/contacts/contacts-view-model.js": 154,
	"./companygroups/companygroup/contacttypes/contacttypes-page.js": 156,
	"./companygroups/companygroup/contacttypes/contacttypes-page.xml": 158,
	"./companygroups/companygroup/contacttypes/contacttypes-view-model.js": 157,
	"./companygroups/companygroup/hierarchy/hierarchy-page.js": 159,
	"./companygroups/companygroup/hierarchy/hierarchy-page.xml": 161,
	"./companygroups/companygroup/hierarchy/hierarchy-view-model.js": 160,
	"./companygroups/companygroup/meetings/meetingattendees/meetingattendees-page.js": 162,
	"./companygroups/companygroup/meetings/meetingattendees/meetingattendees-page.xml": 164,
	"./companygroups/companygroup/meetings/meetingattendees/meetingattendees-view-model.js": 163,
	"./companygroups/companygroup/meetings/meetings-page.js": 165,
	"./companygroups/companygroup/meetings/meetings-page.xml": 167,
	"./companygroups/companygroup/meetings/meetings-view-model.js": 166,
	"./companygroups/companygroup/metrics/committeemembership/committeemembership-page.js": 168,
	"./companygroups/companygroup/metrics/committeemembership/committeemembership-page.xml": 170,
	"./companygroups/companygroup/metrics/committeemembership/committeemembership-view-model.js": 169,
	"./companygroups/companygroup/metrics/meetingattendance/meetingattendance-page.js": 171,
	"./companygroups/companygroup/metrics/meetingattendance/meetingattendance-page.xml": 173,
	"./companygroups/companygroup/metrics/meetingattendance/meetingattendance-view-model.js": 172,
	"./companygroups/companygroup/metrics/metrics-page.js": 174,
	"./companygroups/companygroup/metrics/metrics-page.xml": 176,
	"./companygroups/companygroup/metrics/metrics-view-model.js": 175,
	"./companygroups/companygroup/premiums/invoice/adjustments/adjustments-page.js": 177,
	"./companygroups/companygroup/premiums/invoice/adjustments/adjustments-page.xml": 179,
	"./companygroups/companygroup/premiums/invoice/adjustments/adjustments-view-model.js": 178,
	"./companygroups/companygroup/premiums/invoice/affiliates/affiliates-page.js": 180,
	"./companygroups/companygroup/premiums/invoice/affiliates/affiliates-page.xml": 182,
	"./companygroups/companygroup/premiums/invoice/affiliates/affiliates-view-model.js": 181,
	"./companygroups/companygroup/premiums/invoice/breakdown/breakdown-page.js": 183,
	"./companygroups/companygroup/premiums/invoice/breakdown/breakdown-page.xml": 185,
	"./companygroups/companygroup/premiums/invoice/breakdown/breakdown-view-model.js": 184,
	"./companygroups/companygroup/premiums/invoice/invoice-page.js": 186,
	"./companygroups/companygroup/premiums/invoice/invoice-page.xml": 187,
	"./companygroups/companygroup/premiums/invoices-view-model.js": 196,
	"./companygroups/companygroup/premiums/lines/lines-page.js": 188,
	"./companygroups/companygroup/premiums/lines/lines-page.xml": 190,
	"./companygroups/companygroup/premiums/lines/lines-view-model.js": 189,
	"./companygroups/companygroup/premiums/lines/written/written-page.js": 191,
	"./companygroups/companygroup/premiums/lines/written/written-page.xml": 193,
	"./companygroups/companygroup/premiums/lines/written/written-view-model.js": 192,
	"./companygroups/companygroup/premiums/premiums-page.js": 194,
	"./companygroups/companygroup/premiums/premiums-page.xml": 197,
	"./companygroups/companygroup/premiums/premiums-view-model.js": 195,
	"./companygroups/companygroup/premiums/states/states-page.js": 198,
	"./companygroups/companygroup/premiums/states/states-page.xml": 200,
	"./companygroups/companygroup/premiums/states/states-view-model.js": 199,
	"./companygroups/companygroup/premiums/states/written/written-page.js": 201,
	"./companygroups/companygroup/premiums/states/written/written-page.xml": 203,
	"./companygroups/companygroup/premiums/states/written/written-view-model.js": 202,
	"./companygroups/companygroup/remarktypes/remarks/remark/remark-page.js": 204,
	"./companygroups/companygroup/remarktypes/remarks/remark/remark-page.xml": 205,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page.js": 206,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page.xml": 207,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-page.js": 208,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-page.xml": 210,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-view-model.js": 209,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-page.js": 211,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-page.xml": 213,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-view-model.js": 212,
	"./companygroups/companygroup/remarktypes/remarks/remarks-page.js": 214,
	"./companygroups/companygroup/remarktypes/remarks/remarks-page.xml": 216,
	"./companygroups/companygroup/remarktypes/remarks/remarks-view-model.js": 215,
	"./companygroups/companygroup/remarktypes/remarktypes-page.js": 217,
	"./companygroups/companygroup/remarktypes/remarktypes-page.xml": 219,
	"./companygroups/companygroup/remarktypes/remarktypes-view-model.js": 218,
	"./companygroups/companygroups-page.js": 220,
	"./companygroups/companygroups-page.xml": 222,
	"./companygroups/companygroups-view-model.js": 221,
	"./home/home-page.js": 223,
	"./home/home-page.xml": 225,
	"./home/home-view-model.js": 224,
	"./login/login-page.js": 226,
	"./login/login-page.xml": 230,
	"./login/login-view-model.js": 227,
	"./main-page.js": 231,
	"./main-page.xml": 232,
	"./people/people-page.js": 233,
	"./people/people-page.xml": 237,
	"./people/people-view-model.js": 234,
	"./people/person/attributes/attributes-page.js": 238,
	"./people/person/attributes/attributes-page.xml": 239,
	"./people/person/bio/bio-page.js": 240,
	"./people/person/bio/bio-page.xml": 241,
	"./people/person/committees/committees-page.js": 242,
	"./people/person/committees/committees-page.xml": 244,
	"./people/person/committees/committees-view-model.js": 243,
	"./people/person/contacts/contacts-page.js": 245,
	"./people/person/contacts/contacts-page.xml": 247,
	"./people/person/contacts/contacts-view-model.js": 246,
	"./people/person/meetings/meetings-page.js": 248,
	"./people/person/meetings/meetings-page.xml": 250,
	"./people/person/meetings/meetings-view-model.js": 249,
	"./people/person/pacauthorization/pacauthorization-page.js": 251,
	"./people/person/pacauthorization/pacauthorization-page.xml": 253,
	"./people/person/pacauthorization/pacauthorization-view-model.js": 252,
	"./people/person/person-page.js": 254,
	"./people/person/person-page.xml": 256,
	"./people/person/person-view-model.js": 255,
	"./people/person/remarks/remark/remark-page.js": 257,
	"./people/person/remarks/remark/remark-page.xml": 258,
	"./people/person/remarks/remarkadd/remarkadd-page.js": 259,
	"./people/person/remarks/remarkadd/remarkadd-page.xml": 260,
	"./people/person/remarks/remarkadd/remarklevel/remarklevel-page.js": 261,
	"./people/person/remarks/remarkadd/remarklevel/remarklevel-page.xml": 263,
	"./people/person/remarks/remarkadd/remarklevel/remarklevel-view-model.js": 262,
	"./people/person/remarks/remarkadd/remarktype/remarktype-page.js": 264,
	"./people/person/remarks/remarkadd/remarktype/remarktype-page.xml": 266,
	"./people/person/remarks/remarkadd/remarktype/remarktype-view-model.js": 265,
	"./people/person/remarks/remarks-page.js": 267,
	"./people/person/remarks/remarks-page.xml": 269,
	"./people/person/remarks/remarks-view-model.js": 268,
	"./people/person/subscriptiontypes/subscriptions/states/states-page.js": 270,
	"./people/person/subscriptiontypes/subscriptions/states/states-page.xml": 272,
	"./people/person/subscriptiontypes/subscriptions/states/states-view-model.js": 271,
	"./people/person/subscriptiontypes/subscriptions/subscriptions-page.js": 273,
	"./people/person/subscriptiontypes/subscriptions/subscriptions-page.xml": 275,
	"./people/person/subscriptiontypes/subscriptions/subscriptions-view-model.js": 274,
	"./people/person/subscriptiontypes/subscriptiontypes-page.js": 276,
	"./people/person/subscriptiontypes/subscriptiontypes-page.xml": 278,
	"./people/person/subscriptiontypes/subscriptiontypes-view-model.js": 277,
	"./people/person/webaccess/webaccess-page.js": 279,
	"./people/person/webaccess/webaccess-page.xml": 281,
	"./people/person/webaccess/webaccess-view-model.js": 280,
	"./vendor-platform.js": 282,
	"./vendor.js": 413
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 409;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": 122,
	"./committeetypes/committees/committee/committee-page.js": 124,
	"./committeetypes/committees/committee/committee-page.xml": 126,
	"./committeetypes/committees/committees-page.js": 127,
	"./committeetypes/committees/committees-page.xml": 129,
	"./committeetypes/committeetypes-page.js": 130,
	"./committeetypes/committeetypes-page.xml": 132,
	"./companygroups/companygroup/attributes/attributes-page.js": 133,
	"./companygroups/companygroup/attributes/attributes-page.xml": 134,
	"./companygroups/companygroup/committees/committeemembers/committeemembers-page.js": 135,
	"./companygroups/companygroup/committees/committeemembers/committeemembers-page.xml": 137,
	"./companygroups/companygroup/committees/committees-page.js": 138,
	"./companygroups/companygroup/committees/committees-page.xml": 140,
	"./companygroups/companygroup/companies/addresses/addresses-page.js": 141,
	"./companygroups/companygroup/companies/addresses/addresses-page.xml": 143,
	"./companygroups/companygroup/companies/companies-page.js": 144,
	"./companygroups/companygroup/companies/companies-page.xml": 146,
	"./companygroups/companygroup/companies/pacauthorization/pacauthorization-page.js": 147,
	"./companygroups/companygroup/companies/pacauthorization/pacauthorization-page.xml": 149,
	"./companygroups/companygroup/companygroup-page.js": 150,
	"./companygroups/companygroup/companygroup-page.xml": 152,
	"./companygroups/companygroup/contacttypes/contacts/contacts-page.js": 153,
	"./companygroups/companygroup/contacttypes/contacts/contacts-page.xml": 155,
	"./companygroups/companygroup/contacttypes/contacttypes-page.js": 156,
	"./companygroups/companygroup/contacttypes/contacttypes-page.xml": 158,
	"./companygroups/companygroup/hierarchy/hierarchy-page.js": 159,
	"./companygroups/companygroup/hierarchy/hierarchy-page.xml": 161,
	"./companygroups/companygroup/meetings/meetingattendees/meetingattendees-page.js": 162,
	"./companygroups/companygroup/meetings/meetingattendees/meetingattendees-page.xml": 164,
	"./companygroups/companygroup/meetings/meetings-page.js": 165,
	"./companygroups/companygroup/meetings/meetings-page.xml": 167,
	"./companygroups/companygroup/metrics/committeemembership/committeemembership-page.js": 168,
	"./companygroups/companygroup/metrics/committeemembership/committeemembership-page.xml": 170,
	"./companygroups/companygroup/metrics/meetingattendance/meetingattendance-page.js": 171,
	"./companygroups/companygroup/metrics/meetingattendance/meetingattendance-page.xml": 173,
	"./companygroups/companygroup/metrics/metrics-page.js": 174,
	"./companygroups/companygroup/metrics/metrics-page.xml": 176,
	"./companygroups/companygroup/premiums/invoice/adjustments/adjustments-page.js": 177,
	"./companygroups/companygroup/premiums/invoice/adjustments/adjustments-page.xml": 179,
	"./companygroups/companygroup/premiums/invoice/affiliates/affiliates-page.js": 180,
	"./companygroups/companygroup/premiums/invoice/affiliates/affiliates-page.xml": 182,
	"./companygroups/companygroup/premiums/invoice/breakdown/breakdown-page.js": 183,
	"./companygroups/companygroup/premiums/invoice/breakdown/breakdown-page.xml": 185,
	"./companygroups/companygroup/premiums/invoice/invoice-page.js": 186,
	"./companygroups/companygroup/premiums/invoice/invoice-page.xml": 187,
	"./companygroups/companygroup/premiums/lines/lines-page.js": 188,
	"./companygroups/companygroup/premiums/lines/lines-page.xml": 190,
	"./companygroups/companygroup/premiums/lines/written/written-page.js": 191,
	"./companygroups/companygroup/premiums/lines/written/written-page.xml": 193,
	"./companygroups/companygroup/premiums/premiums-page.js": 194,
	"./companygroups/companygroup/premiums/premiums-page.xml": 197,
	"./companygroups/companygroup/premiums/states/states-page.js": 198,
	"./companygroups/companygroup/premiums/states/states-page.xml": 200,
	"./companygroups/companygroup/premiums/states/written/written-page.js": 201,
	"./companygroups/companygroup/premiums/states/written/written-page.xml": 203,
	"./companygroups/companygroup/remarktypes/remarks/remark/remark-page.js": 204,
	"./companygroups/companygroup/remarktypes/remarks/remark/remark-page.xml": 205,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page.js": 206,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page.xml": 207,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-page.js": 208,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarklevel/remarklevel-page.xml": 210,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-page.js": 211,
	"./companygroups/companygroup/remarktypes/remarks/remarkadd/remarktype/remarktype-page.xml": 213,
	"./companygroups/companygroup/remarktypes/remarks/remarks-page.js": 214,
	"./companygroups/companygroup/remarktypes/remarks/remarks-page.xml": 216,
	"./companygroups/companygroup/remarktypes/remarktypes-page.js": 217,
	"./companygroups/companygroup/remarktypes/remarktypes-page.xml": 219,
	"./companygroups/companygroups-page.js": 220,
	"./companygroups/companygroups-page.xml": 222,
	"./home/home-page.js": 223,
	"./home/home-page.xml": 225,
	"./login/login-page.js": 226,
	"./login/login-page.xml": 230,
	"./main-page.js": 231,
	"./main-page.xml": 232,
	"./people/people-page.js": 233,
	"./people/people-page.xml": 237,
	"./people/person/attributes/attributes-page.js": 238,
	"./people/person/attributes/attributes-page.xml": 239,
	"./people/person/bio/bio-page.js": 240,
	"./people/person/bio/bio-page.xml": 241,
	"./people/person/committees/committees-page.js": 242,
	"./people/person/committees/committees-page.xml": 244,
	"./people/person/contacts/contacts-page.js": 245,
	"./people/person/contacts/contacts-page.xml": 247,
	"./people/person/meetings/meetings-page.js": 248,
	"./people/person/meetings/meetings-page.xml": 250,
	"./people/person/pacauthorization/pacauthorization-page.js": 251,
	"./people/person/pacauthorization/pacauthorization-page.xml": 253,
	"./people/person/person-page.js": 254,
	"./people/person/person-page.xml": 256,
	"./people/person/remarks/remark/remark-page.js": 257,
	"./people/person/remarks/remark/remark-page.xml": 258,
	"./people/person/remarks/remarkadd/remarkadd-page.js": 259,
	"./people/person/remarks/remarkadd/remarkadd-page.xml": 260,
	"./people/person/remarks/remarkadd/remarklevel/remarklevel-page.js": 261,
	"./people/person/remarks/remarkadd/remarklevel/remarklevel-page.xml": 263,
	"./people/person/remarks/remarkadd/remarktype/remarktype-page.js": 264,
	"./people/person/remarks/remarkadd/remarktype/remarktype-page.xml": 266,
	"./people/person/remarks/remarks-page.js": 267,
	"./people/person/remarks/remarks-page.xml": 269,
	"./people/person/subscriptiontypes/subscriptions/states/states-page.js": 270,
	"./people/person/subscriptiontypes/subscriptions/states/states-page.xml": 272,
	"./people/person/subscriptiontypes/subscriptions/subscriptions-page.js": 273,
	"./people/person/subscriptiontypes/subscriptions/subscriptions-page.xml": 275,
	"./people/person/subscriptiontypes/subscriptiontypes-page.js": 276,
	"./people/person/subscriptiontypes/subscriptiontypes-page.xml": 278,
	"./people/person/webaccess/webaccess-page.js": 279,
	"./people/person/webaccess/webaccess-page.xml": 281
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 410;

/***/ }),
/* 411 */,
/* 412 */,
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Snapshot the ~/app.css and the theme
const application = __webpack_require__(30);
__webpack_require__(50);
const appCssContext = __webpack_require__(120);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

__webpack_require__(282);

__webpack_require__(98);
; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ })
]),[[107,0,1]]]);