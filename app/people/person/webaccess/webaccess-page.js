const WebAccessViewModel = require("./webaccess-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

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
