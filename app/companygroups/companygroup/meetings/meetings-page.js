const MeetingsViewModel = require("./meetings-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var meetingsList = new MeetingsViewModel([]);

var pageData = new observableModule.fromObject({
    meetingsList: meetingsList,
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
        
        companyName.text = navigationContext.companyName;

        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            // Since the Page contains a SegmentedBar,
            // the selectedIndexChanged event will perform the initial load of the ListView.

            // meetingsList.empty();
        
            // pageData.set("isLoading", true);
        
            // meetingsList.load(navigationContext.companyId, isGroup, 1).then(function () {
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

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex + 1;

        // An index of 4 is for None and we do NOT display this type in the application.
        if (selectedIndex === 4) {
            selectedIndex += 1;
        }

        meetingsList.empty();
        
        pageData.set("isLoading", true);

        meetingsList.load(navigationContext.companyId, isGroup, selectedIndex).then(function () {
            pageData.set("isLoading", false);
        });

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

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/meetings/meetingattendees/meetingattendees-page",
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
exports.onBackTap = onBackTap;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemTap = onItemTap;
