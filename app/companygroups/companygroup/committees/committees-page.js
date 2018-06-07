const CommitteesViewModel = require("./committees-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var committeesList = new CommitteesViewModel([]);

var pageData = new observableModule.fromObject({
    committeesList: committeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
            
        if (isGroup === "Y") {
            page.actionBar.title = "Group Committees";
        } else {
            page.actionBar.title = "Company Committees";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // committeesList.empty();
        
            // pageData.set("isLoading", true);
        
            // committeesList.load(navigationContext.companyId, isGroup, 1).then(function () {
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

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex + 1;

        committeesList.empty();
        
        pageData.set("isLoading", true);

        committeesList.load(navigationContext.companyId, isGroup, selectedIndex).then(function () {
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
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/committees/committeemembers/committeemembers-page",
            context: model,
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
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
