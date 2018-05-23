const GroupViewModel = require("./group-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var navigationContext;

var groupList = new GroupViewModel([]);

var pageData = new observableModule.fromObject({
    groupList: groupList,
    isLoading: false
});

function onNavigatingTo(args) {
    page = args.object;

    page.actionBar.title = "Group";

    navigationContext = page.navigationContext;
    var companyName = page.getViewById("companyName");
    
    companyName.text = navigationContext.companyName;

    groupList.empty();
    groupList.load();

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
        var item = groupList.getItem(index);

        navigationContext.referer = "group";

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
