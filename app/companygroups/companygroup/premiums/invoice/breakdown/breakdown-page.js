const BreakdownViewModel = require("./breakdown-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

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
