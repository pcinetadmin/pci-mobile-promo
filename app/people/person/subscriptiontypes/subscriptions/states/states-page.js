const StatesViewModel = require("./states-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var statesList = new StatesViewModel([]);

var pageData = new ObservableModule.fromObject({
    statesList: statesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Subscription States";

        var fullName = page.getViewById("fullName");
        var publication = page.getViewById("publication");
        
        fullName.text = navigationContext.fullName;
        publication.text = navigationContext.publication;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            statesList.empty();

            pageData.set("isLoading", true);

            statesList.load(navigationContext.personId, navigationContext.publicationCode).then(function () {
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
