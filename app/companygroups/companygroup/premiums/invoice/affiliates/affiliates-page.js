const AffiliatesViewModel = require("./affiliates-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

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
