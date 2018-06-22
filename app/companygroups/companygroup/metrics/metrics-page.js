const MetricsViewModel = require("./metrics-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var metricsList = new MetricsViewModel([]);

var pageData = new observableModule.fromObject({
    metricsList: metricsList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    isGroup = navigationContext.isGroup;

    page.actionBar.title = "Metrics";
        
    // if (isGroup === "Y") {
    //     page.actionBar.title = "Group Metrics";
    // } else {
    //     page.actionBar.title = "Company Metrics";
    // }
    
    var companyName = page.getViewById("companyName");
    
    companyName.text = navigationContext.companyName;

    if (args.isBackNavigation) {
        // Do Nothing on Back Navigation
    } else {
        metricsList.empty();

        metricsList.load();

        page.bindingContext = pageData;
    }
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
        var item = metricsList.getItem(index);

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
