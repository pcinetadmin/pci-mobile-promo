const SubscriptionTypesViewModel = require("./subscriptiontypes-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var subscriptionTypesList = new SubscriptionTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    subscriptionTypesList: subscriptionTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
 
        page.actionBar.title = "Subscription Types";
    
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        subscriptionTypesList.empty();

        pageData.set("isLoading", true);

        subscriptionTypesList.load(navigationContext.personId).then(function () {
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

        if (model.subscriptionTypeId !== 0) {
            const navigationEntry = {
                moduleName: "people/person/subscriptiontypes/subscriptions/subscriptions-page",
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
