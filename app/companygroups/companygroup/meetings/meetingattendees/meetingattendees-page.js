const MeetingAttendeesViewModel = require("./meetingattendees-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var isGroup;

var meetingAttendeesList = new MeetingAttendeesViewModel([]);

var pageData = new ObservableModule.fromObject({
    meetingAttendeesList: meetingAttendeesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Attendees";

        var companyName = page.getViewById("companyName");
        var meeting = page.getViewById("meeting");
        
        companyName.text = navigationContext.companyName;
        meeting.text = navigationContext.meeting;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            meetingAttendeesList.empty();

            pageData.set("isLoading", true);

            meetingAttendeesList.load(navigationContext.companyId, isGroup, navigationContext.meetingCode).then(function () {
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

        if (!model.isDeleted) {
            const navigationEntry = {
                moduleName: "people/person/person-page",
                context: model,
                clearHistory: false
            };

            frameModule.topmost().navigate(navigationEntry);
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onItemTap = onItemTap;
