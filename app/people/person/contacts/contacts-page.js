const ContactsViewModel = require("./contacts-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var contactsList = new ContactsViewModel([]);

var pageData = new ObservableModule.fromObject({
    contactsList: contactsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Contact for Companies";
    
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            contactsList.empty();

            pageData.set("isLoading", true);

            contactsList.load(navigationContext.personId).then(function () {
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
