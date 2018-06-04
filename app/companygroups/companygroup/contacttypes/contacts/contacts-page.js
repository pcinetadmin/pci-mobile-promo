const ContactsViewModel = require("./contacts-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var contactsList = new ContactsViewModel([]);

var pageData = new ObservableModule.fromObject({
    contactsList: contactsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = navigationContext.contactType;
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            contactsList.empty();

            pageData.set("isLoading", true);

            contactsList.load(navigationContext.companyId, isGroup, navigationContext.contactCode).then(function () {
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

        const navigationEntry = {
            moduleName: "people/person/person-page",
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
exports.onItemTap = onItemTap;
