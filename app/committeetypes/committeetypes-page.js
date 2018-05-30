const CommitteeTypesViewModel = require("./committeetypes-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;

var committeeTypesList = new CommitteeTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    committeeTypesList: committeeTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Committees";

        if (committeeTypesList.length === 0) {
            pageData.set("isLoading", true);

            committeeTypesList.load().then(function () {
                pageData.set("isLoading", false);
            });
        }

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

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        const navigationEntry = {
            moduleName: "committeetypes/committees/committees-page",
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
exports.onItemTap = onItemTap;
