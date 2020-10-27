const platform = require("platform");
const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
const appModule = require("application");
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var pageData = new ObservableModule.Observable();

function onNavigatingTo(args) {
    try {
        page = args.object;

        if (platform.isIOS) {
            const controller = frameModule.topmost().ios.controller;
            // get the view controller navigation item
            const navigationItem = controller.visibleViewController.navigationItem;
            // hide back button
            navigationItem.setHidesBackButtonAnimated(true, false);
        }

        if (args.isBackNavigation) {
            var remarkLevelLabel = page.getViewById("remarkLevelLabel");
            var remarkTypeLabel = page.getViewById("remarkTypeLabel");
            var creationDateLabel = page.getViewById("creationDateLabel");
            var completionDateLabel = page.getViewById("completionDateLabel");
            var visitDateLabel = page.getViewById("visitDateLabel");

            remarkLevelLabel.text = pageData.publicPrivate;
            remarkTypeLabel.text = pageData.remarkType;

            var completionDateStackLayout = page.getViewById("completionDateStackLayout");

            if (pageData.remarkTypeCode === "8") {
                pageData.completionDate = null;

                completionDateStackLayout.visibility = "collapse";
            } else {
                pageData.completionDate = new Date();

                completionDateStackLayout.visibility = "visible";
            }

            creationDateLabel.text = dateConverter(pageData.creationDate, "MM/DD/YYYY");
            completionDateLabel.text = dateConverter(pageData.completionDate, "MM/DD/YYYY");
            visitDateLabel.text = dateConverter(pageData.visitDate, "MM/DD/YYYY");

        } else {
            navigationContext = page.navigationContext;

            navigationContext.isProfileMembership = global.isProfileMembership;
            
            pageData = navigationContext;

            page.actionBar.title = "Add Person Remark";

            navigationContext.isProfileMembership = global.isProfileMembership;

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

function onLoaded(args) {
    try {
        var visitDateDatePicker = page.getViewById("visitDateDatePicker");
        
        visitDateDatePicker.on("dateChange", function(args) {
            var visitDateLabel = page.getViewById("visitDateLabel");

            visitDateLabel.text = dateConverter(args.value, "MM/DD/YYYY");
        });
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

function onStackLayoutRemarkLevelTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "people/person/remarks/remarkadd/remarklevel/remarklevel-page",
            context: pageData,
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

function onStackLayoutRemarkTypeTap(args) {
    try {
        collapseDates();

        const navigationEntry = {
            moduleName: "people/person/remarks/remarkadd/remarktype/remarktype-page",
            context: pageData,
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

function onStackLayoutCreationDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCompletionDateTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutVisitDateTap(args) {
    try {
        var visitDateGridLayout = page.getViewById("visitDateGridLayout");
        
        if (visitDateGridLayout.visibility === "collapse") {
            visitDateGridLayout.visibility = "visible";

            page.addCss("#visitDateLabel {color: #cc2d30;}");
        } else {
            visitDateGridLayout.visibility = "collapse";

            page.addCss("#visitDateLabel {color: #666;}");
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onStackLayoutCreatedByTap(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onTextViewFocus(args) {
    try {
        collapseDates();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onCancelTap(args) {
    try {
        if (platform.isAndroid) {
            dialogs.confirm({
                title: "Save",
                message: "Would you like to save the remark?",
                okButtonText: "Yes",
                cancelButtonText: "No"
            }).then(function (result) {
                if (result) {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        } else if (platform.isIOS) {
            dialogs.action({
                cancelButtonText: "Cancel",
                actions: ["Save Remark"]
            }).then(function (result) {
                if (result === "Save Remark") {
                    saveRemark();
                } else {
                    frameModule.topmost().goBack();
                }
            });
        }
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSaveTap(args) {
    try {
        collapseDates();

        saveRemark();
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function saveRemark() {
    if (pageData.creationDate !== null) {
        pageData.creationDate = dateConverter(pageData.creationDate, "MM/DD/YYYY");
    }

    if (pageData.completionDate !== null) {
        pageData.completionDate = dateConverter(pageData.completionDate, "MM/DD/YYYY");
    }

    if (pageData.visitDate !== null) {
        pageData.visitDate = dateConverter(pageData.visitDate, "MM/DD/YYYY");
    }

    http.request({
        url: global.apiBaseServiceUrl + "person/insertpersonremark",
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": global.token },
        content: JSON.stringify(pageData)
    }).then(function (response) {
        var result = response.content.toString();
        var data = JSON.parse(result);

        if (data.RemarksId !== null)
        {
            global.refreshRemarks = true;

            pageData.remarksId = data.RemarksId;

            frameModule.topmost().goBack();
        } else {
            dialogs.alert("There was an error saving the remark.");
        }
        
    }, function (e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    });
}

function dateConverter(value, format) {
    let result = format;

    if (value != null)
    {
        const day = value.getDate();

        result = result.replace("DD", day < 10 ? `0${day}` : day);

        const month = value.getMonth() + 1;

        result = result.replace("MM", month < 10 ? `0${month}` : month);
        result = result.replace("YYYY", value.getFullYear());
    }

    return result;
};

function collapseDates() {
    var visitDateGridLayout = page.getViewById("visitDateGridLayout");

    visitDateGridLayout.visibility = "collapse";

    page.addCss("#visitDateLabel {color: #666;}");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;
exports.onStackLayoutRemarkLevelTap = onStackLayoutRemarkLevelTap;
exports.onStackLayoutRemarkTypeTap = onStackLayoutRemarkTypeTap;
exports.onStackLayoutCreationDateTap = onStackLayoutCreationDateTap;
exports.onStackLayoutCompletionDateTap = onStackLayoutCompletionDateTap;
exports.onStackLayoutVisitDateTap = onStackLayoutVisitDateTap;
exports.onStackLayoutCreatedByTap = onStackLayoutCreatedByTap;
exports.onTextViewFocus = onTextViewFocus;
exports.onCancelTap = onCancelTap;
exports.onSaveTap = onSaveTap;
