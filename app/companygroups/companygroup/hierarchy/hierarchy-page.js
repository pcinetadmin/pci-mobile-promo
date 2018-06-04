const HiearchyViewModel = require("./hierarchy-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
