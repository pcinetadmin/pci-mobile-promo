const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Bio";

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
