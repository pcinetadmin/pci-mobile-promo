const CommitteeMembershipViewModel = require("./committeemembership-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

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
