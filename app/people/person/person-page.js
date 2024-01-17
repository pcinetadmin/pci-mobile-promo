const PersonViewModel = require("./person-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");
var page;
var navigationContext;
var hasBio;

var personList = new PersonViewModel([]);

var pageData = new observableModule.fromObject({
    personList: personList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    page.actionBar.title = "Person";
    
    var fullName = page.getViewById("fullName");
    
    fullName.text = navigationContext.fullName;

    if (navigationContext.bio.length > 0)
    {
        hasBio = true;
    }
    else
    {
        hasBio = false;
    }

    if (args.isBackNavigation) {
        // Do Nothing on Back Navigation
    } else {
        personList.empty();
        personList.load(hasBio);

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
        var item = personList.getItem(index);
        
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
