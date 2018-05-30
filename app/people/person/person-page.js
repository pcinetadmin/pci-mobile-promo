const PersonViewModel = require("./person-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;
var isGroup;

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

    personList.empty();
    personList.load();

    page.bindingContext = pageData;
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
