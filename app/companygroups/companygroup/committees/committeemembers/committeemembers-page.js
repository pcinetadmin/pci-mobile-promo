const CommitteeMembersViewModel = require("./committeemembers-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var isGroup;

var committeeMembersList = new CommitteeMembersViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeeMembersList: committeeMembersList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        page.actionBar.title = "Committee";

        var companyName = page.getViewById("companyName");
        var committee = page.getViewById("committee");
        
        companyName.text = navigationContext.companyName;
        committee.text = navigationContext.committee;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            committeeMembersList.empty();

            pageData.set("isLoading", true);

            committeeMembersList.load(navigationContext.companyId, isGroup, navigationContext.committeeCode).then(function () {
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

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        if (!model.isDeleted) {
            const navigationEntry = {
                moduleName: "people/person/person-page",
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
exports.onItemTap = onItemTap;
