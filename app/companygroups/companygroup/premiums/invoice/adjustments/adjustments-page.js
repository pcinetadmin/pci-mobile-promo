const AdjustmentsViewModel = require("./adjustments-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

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
