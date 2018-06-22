const SubscriptionsViewModel = require("./subscriptions-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var subscriptionsList = new SubscriptionsViewModel([]);

var pageData = new ObservableModule.fromObject({
    subscriptionsList: subscriptionsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Subscriptions";

        var fullName = page.getViewById("fullName");
        var subscriptionType = page.getViewById("subscriptionType");
        
        fullName.text = navigationContext.fullName;
        subscriptionType.text = navigationContext.subscriptionType;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            subscriptionsList.empty();

            pageData.set("isLoading", true);

            subscriptionsList.load(navigationContext.personId, navigationContext.subscriptionTypeId).then(function () {
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

        if (model.subscriptionTypeId === 2) {
            const navigationEntry = {
                moduleName: "people/person/subscriptiontypes/subscriptions/states/states-page",
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
