const MeetingAttendanceViewModel = require("./meetingattendance-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var meetingAttendanceList = new MeetingAttendanceViewModel([]);

var pageData = new observableModule.fromObject({
    meetingAttendanceList: meetingAttendanceList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;
        
        page.actionBar.title = "Meeting Attendance";
        
        var companyName = page.getViewById("companyName");
    
        companyName.text = navigationContext.companyName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // meetingAttendanceList.empty();
        
            // pageData.set("isLoading", true);
        
            // meetingAttendanceList.load(navigationContext.companyId, isGroup).then(function () {
            //     pageData.set("isLoading", false);
            // });
        
            // page.bindingContext = pageData;
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
        meetingAttendanceList.empty();
        
        pageData.set("isLoading", true);
    
        meetingAttendanceList.load(navigationContext.companyId, isGroup).then(function () {
            pageData.set("isLoading", false);
        });
    
        page.bindingContext = pageData;
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

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onBackTap = onBackTap;
