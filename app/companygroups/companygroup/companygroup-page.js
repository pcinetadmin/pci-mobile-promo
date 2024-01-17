const CompanyGroupViewModel = require("./companygroup-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

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
    
    if (navigationContext.companyName === navigationContext.groupName) {
        isGroup = "Y";
    } else {
        isGroup = "N";
    }
    
    if (isGroup === "Y") {
        page.actionBar.title = "Group";
    } else {
        page.actionBar.title = "Company";
    }
    
    var companyName = page.getViewById("companyName");
    
    companyName.text = navigationContext.companyName;

    // if (args.isBackNavigation) {
    //     // Do Nothing on Back Navigation
    // } else {
        companyGroupList.empty();

        companyGroupList.load(isGroup);

        page.bindingContext = pageData;
    // }
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

        navigationContext.loadData = item.loadData;
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
