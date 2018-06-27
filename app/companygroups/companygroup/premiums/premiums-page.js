const PremiumsViewModel = require("./premiums-view-model");
const InvoicesViewModel = require("./invoices-view-model");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var premiums = new PremiumsViewModel([]);
var invoicesList = new InvoicesViewModel([]);

var pageData = new ObservableModule.fromObject({
    premiums: premiums,
    invoicesList: invoicesList,
    isProfileAccounting: global.isProfileAccounting,
    isGroup: isGroup,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        if (global.isProfileAccounting) {
            page.actionBar.title = "Premiums & Assessents";
        } else {
            page.actionBar.title = "Premiums";
        }
    
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            premiums.empty();
            invoicesList.empty();
        
            pageData.set("isLoading", true);

            // if (navigationContext.companyId === navigationContext.groupId && navigationContext.companyId === navigationContext.companyId0) {
            //     isGroup = "Y";
            // }

            premiums.load(navigationContext.companyId, isGroup).then(function () {
                if (premiums.companyId !== null) {
                    invoicesList.load(navigationContext.companyId, isGroup).then(function () {
                        pageData.set("isLoading", false);
                    });
                } else {
                    pageData.set("isLoading", false);
                }
                
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

function onLoaded(args) {
    try {
        
    } catch(e) {
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
            moduleName: "companygroups/companygroup/premiums/invoice/invoice-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onStatesTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext.premiums;

        if (model.companyId !== null) {
            model.isGroup = isGroup;
            
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/states/states-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onLinesTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext.premiums;

        if (model.companyId !== null) {
            model.isGroup = isGroup;
            
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/lines/lines-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
exports.onStatesTap = onStatesTap;
exports.onLinesTap = onLinesTap;
