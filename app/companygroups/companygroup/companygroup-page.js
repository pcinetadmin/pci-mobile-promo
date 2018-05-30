const CompanyGroupViewModel = require("./companygroup-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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

    companyGroupList.empty();
    companyGroupList.load();

    page.bindingContext = pageData;
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
