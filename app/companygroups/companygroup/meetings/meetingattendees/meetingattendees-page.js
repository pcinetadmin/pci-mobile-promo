const MeetingAttendeesViewModel = require("./meetingattendees-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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

        if (isGroup === "Y") {
            page.actionBar.title = "Group Meetings";
        } else {
            page.actionBar.title = "Company Meetings";
        }
    
        var companyName = page.getViewById("companyName");
        var meeting = page.getViewById("meeting");
        
        companyName.text = navigationContext.companyName;
        meeting.text = navigationContext.meeting; // + "(" + navigationContext.companyId + " : " + isGroup + " : " + navigationContext.meetingCode + ")";

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
