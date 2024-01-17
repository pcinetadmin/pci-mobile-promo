const CompaniesViewModel = require("./companies-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var isGroup;
var loadData;

var companiesList = new CompaniesViewModel([]);

var pageData = new observableModule.fromObject({
    companiesList: companiesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        isGroup = navigationContext.isGroup;
        loadData = navigationContext.loadData;

        switch (loadData) {
            case "pacauthorization":
                // page.actionBar.title = "PAC Authorization";

                if (isGroup === "Y") {
                    page.actionBar.title = "Group PAC";
                } else {
                    page.actionBar.title = "Company PAC";
                }
                
                break;

            case "addresses":
                if (isGroup === "Y") {
                    page.actionBar.title = "Group Addresses";
                } else {
                    page.actionBar.title = "Company Addresses";
                }
                
                break;

            default:
                // page.actionBar.title = "PAC Authorization";

                if (isGroup === "Y") {
                    page.actionBar.title = "Group PAC";
                } else {
                    page.actionBar.title = "Company PAC";
                }
                
                break;

        }
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            companiesList.empty();
        
            pageData.set("isLoading", true);
        
            companiesList.load(loadData, navigationContext.companyId, isGroup).then(function () {
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
        var moduleName;

        model.isGroup = isGroup;

        switch (loadData) {
            case "pacauthorization":
                moduleName = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
                
                break;

            case "addresses":
                moduleName = "companygroups/companygroup/companies/addresses/addresses-page";
                
                break;

            default:
                moduleName = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
                
                break;

        }

        const navigationEntry = {
            moduleName: moduleName,
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
