const WrittenViewModel = require("./written-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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
            page.actionBar.title = "Group Line";
        } else {
            page.actionBar.title = "Company Line";
        }
    
        var companyName = page.getViewById("companyName");
        var lineOfBusiness = page.getViewById("lineOfBusiness");
        
        companyName.text = navigationContext.companyName;
        lineOfBusiness.text = navigationContext.lineOfBusiness;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            
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

function onLoaded(args) {
    try {
        writtenList.empty();

        pageData.set("isLoading", true);

        writtenList.load(navigationContext.companyId, isGroup, navigationContext.lineOfBusinessId).then(function () {
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

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
