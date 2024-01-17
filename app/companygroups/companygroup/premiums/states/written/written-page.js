const WrittenViewModel = require("./written-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var isGroup;

var writtenList = new WrittenViewModel([]);

var pageData = new ObservableModule.fromObject({
    writtenList: writtenList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        if (isGroup === "Y") {
            page.actionBar.title = "Group State";
        } else {
            page.actionBar.title = "Company State";
        }
    
        var companyName = page.getViewById("companyName");
        var state = page.getViewById("state");
        
        companyName.text = navigationContext.companyName;
        state.text = navigationContext.state;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            writtenList.empty();

            pageData.set("isLoading", true);

            writtenList.load(navigationContext.companyId, isGroup, navigationContext.stateId).then(function () {
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
