const observableModule = require("data/observable");
var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    if (navigationContext.isGroup === "Y")
    {
        page.actionBar.title = "Group Remark";
    } else {
        page.actionBar.title = "Company Remark";
    }

    navigationContext.isProfileMembership = global.isProfileMembership;

    page.bindingContext = navigationContext;
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
