const BreakdownViewModel = require("./breakdown-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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
        
        companyName.text = navigationContext.leadCompanyName;

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
