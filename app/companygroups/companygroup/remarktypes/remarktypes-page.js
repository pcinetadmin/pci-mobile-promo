const RemarkTypesViewModel = require("./remarktypes-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var remarkTypesList = new RemarkTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarkTypesList: remarkTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
            
        if (isGroup === "Y") {
            page.actionBar.title = "Group Remarks";
        } else {
            page.actionBar.title = "Company Remarks";
        }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        remarkTypesList.empty();

        pageData.set("isLoading", true);

        remarkTypesList.load(navigationContext.companyId, isGroup).then(function () {
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

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remarks-page",
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
