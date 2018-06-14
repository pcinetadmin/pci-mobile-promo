const observableModule = require("data/observable");
var frameModule = require("ui/frame");

var page;
var navigationContext;

function onNavigatingTo(args) {
    page = args.object;
    navigationContext = page.navigationContext;

    page.actionBar.title = "Invoice";
    
    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onBreakdownTap(args) {
    try {
        try {
            const navigationEntry = {
                moduleName: "companygroups/companygroup/premiums/invoice/breakdown/breakdown-page",
                context: navigationContext,
                clearHistory: false
            };
    
            frameModule.topmost().navigate(navigationEntry);
        } catch(e) {
            dialogs.alert(e);
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAdjustmentsTap(args) {
    try {
        
    } catch(e) {
        dialogs.alert(e);
    }
}

function onOtherAdjustmentsTap(args) {
    try {
        
    } catch(e) {
        dialogs.alert(e);
    }
}

function onAffiliatesTap(args) {
    try {
        
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onBreakdownTap = onBreakdownTap;
exports.onAdjustmentsTap = onAdjustmentsTap;
exports.onOtherAdjustmentsTap = onOtherAdjustmentsTap;
exports.onAffiliatesTap = onAffiliatesTap;
