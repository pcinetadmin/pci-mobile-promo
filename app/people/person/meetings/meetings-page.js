const MeetingsViewModel = require("./meetings-view-model");
const observableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;

var meetingsList = new MeetingsViewModel([]);

var pageData = new observableModule.fromObject({
    meetingsList: meetingsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Meetings";
        
        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            meetingsList.empty();
        
            pageData.set("isLoading", true);

            meetingsList.load(navigationContext.personId).then(function () {
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
