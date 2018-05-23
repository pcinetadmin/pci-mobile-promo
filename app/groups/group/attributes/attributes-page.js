const observableModule = require("data/observable");
var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Attributes";

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
