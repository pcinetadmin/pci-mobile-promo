const LinesViewModel = require("./lines-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var isGroup;

var linesList = new LinesViewModel([]);

var pageData = new observableModule.fromObject({
    linesList: linesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        if (isGroup === "Y") {
            page.actionBar.title = "Group Lines";
        } else {
            page.actionBar.title = "Company Lines";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.
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

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex;
        var sort;

        if (selectedIndex === 0) {
            sort = "dwp";
        } else {
            sort = "alpha";
        }

        linesList.empty();
        
        pageData.set("isLoading", true);

        linesList.load(navigationContext.companyId, isGroup, sort).then(function () {
            pageData.set("isLoading", false);
        });

        page.bindingContext = pageData;
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

function onItemTap(args) {
    try {
        if (isGroup === "Y") {
            var view = args.view;
            var model = view.bindingContext;

            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/lines/written/written-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
