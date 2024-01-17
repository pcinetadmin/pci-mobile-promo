/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
require("@proplugins/nativescript-platform-css");
const application = require("@nativescript/core/application");

// Dev, test, prod urls
const auth0ClientIDDev = "QOlSmmDcgTcX6avB2xIq5rBE7MmC0aR6";
const auth0ClientIDPreprod = "TPrMc2bWH45E2vxMlBkpSp5mD2x0y0uV";
const auth0ClientIDProd = "daCV2GFeu7I5VUgifaepdraVSX4z9oEf";
const auth0DomainDev = "https://dev-login.apci.org/";
const auth0DomainPreprod = "https://preprod-login.apci.org/";
const auth0DomainProd = "https://login.apci.org/";
const apiBaseServiceUrlDev = "https://api-dev.apci.org/";
const apiBaseServiceUrlPreprod = "https://api-preprod.apci.org/";
const apiBaseServiceUrlProd = "https://api.apci.org/";

// Define all global variables used throughout the entire solution.
global.auth0ClientID = auth0ClientIDProd;
global.auth0Domain = auth0DomainProd;
global.auth0RoleIdentifier = "https://apcia.org/roles";
global.apiAudienceUrl = apiBaseServiceUrlProd;
global.apiBaseServiceUrl = apiAudienceUrl + "api/promo/";
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
global.groupsSearchText = "";
global.companiesSearchTextCompany = "";
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
