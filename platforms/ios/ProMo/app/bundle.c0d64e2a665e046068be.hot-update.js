webpackHotUpdate("bundle",{

/***/ "./people/person/remarks/remarkadd/remarkadd-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const platform = __webpack_require__("../node_modules/@nativescript/core/platform/index.js");
const ObservableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/index.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/index.js").ObservableArray;
const appModule = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
var http = __webpack_require__("../node_modules/@nativescript/core/http/index.js");
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/index.js");

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

    const day = value.getDate();

    result = result.replace("DD", day < 10 ? `0${day}` : day);

    const month = value.getMonth() + 1;

    result = result.replace("MM", month < 10 ? `0${month}` : month);
    result = result.replace("YYYY", value.getFullYear());

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
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./people/person/remarks/remarkadd/remarkadd-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./people/person/remarks/remarkadd/remarkadd-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wZW9wbGUvcGVyc29uL3JlbWFya3MvcmVtYXJrYWRkL3JlbWFya2FkZC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQWlCLG1CQUFPLENBQUMsc0RBQVU7QUFDbkMseUJBQXlCLG1CQUFPLENBQUMsNkRBQWlCO0FBQ2xELHNCQUFzQixtQkFBTyxDQUFDLG1FQUF1QjtBQUNyRCxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBYTtBQUN2QyxXQUFXLG1CQUFPLENBQUMsa0RBQU07QUFDekIsa0JBQWtCLG1CQUFPLENBQUMsc0RBQVU7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLHdEQUFZOztBQUVsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRCxTQUFTO0FBQ1Q7O0FBRUEsMENBQTBDLGFBQWE7QUFDdkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQW9FO0FBQ3RGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlEQUFpRCxJQUFJOztBQUVyRDs7QUFFQSxtREFBbUQsTUFBTTtBQUN6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWtDLGFBQWE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4RUFBOEU7QUFDekcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmMwZDY0ZTJhNjY1ZTA0NjA2OGJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGF0Zm9ybSA9IHJlcXVpcmUoXCJwbGF0Zm9ybVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuY29uc3QgYXBwTW9kdWxlID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5cbnZhciBwYWdlO1xudmFyIG5hdmlnYXRpb25Db250ZXh0O1xuXG52YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZU1vZHVsZS5PYnNlcnZhYmxlKCk7XG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBwYWdlID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzSU9TKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpLmlvcy5jb250cm9sbGVyO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSB2aWV3IGNvbnRyb2xsZXIgbmF2aWdhdGlvbiBpdGVtXG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IGNvbnRyb2xsZXIudmlzaWJsZVZpZXdDb250cm9sbGVyLm5hdmlnYXRpb25JdGVtO1xuICAgICAgICAgICAgLy8gaGlkZSBiYWNrIGJ1dHRvblxuICAgICAgICAgICAgbmF2aWdhdGlvbkl0ZW0uc2V0SGlkZXNCYWNrQnV0dG9uQW5pbWF0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xuICAgICAgICAgICAgdmFyIHJlbWFya0xldmVsTGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKFwicmVtYXJrTGV2ZWxMYWJlbFwiKTtcbiAgICAgICAgICAgIHZhciByZW1hcmtUeXBlTGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKFwicmVtYXJrVHlwZUxhYmVsXCIpO1xuICAgICAgICAgICAgdmFyIGNyZWF0aW9uRGF0ZUxhYmVsID0gcGFnZS5nZXRWaWV3QnlJZChcImNyZWF0aW9uRGF0ZUxhYmVsXCIpO1xuICAgICAgICAgICAgdmFyIGNvbXBsZXRpb25EYXRlTGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKFwiY29tcGxldGlvbkRhdGVMYWJlbFwiKTtcbiAgICAgICAgICAgIHZhciB2aXNpdERhdGVMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aXNpdERhdGVMYWJlbFwiKTtcblxuICAgICAgICAgICAgcmVtYXJrTGV2ZWxMYWJlbC50ZXh0ID0gcGFnZURhdGEucHVibGljUHJpdmF0ZTtcbiAgICAgICAgICAgIHJlbWFya1R5cGVMYWJlbC50ZXh0ID0gcGFnZURhdGEucmVtYXJrVHlwZTtcblxuICAgICAgICAgICAgdmFyIGNvbXBsZXRpb25EYXRlU3RhY2tMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwiY29tcGxldGlvbkRhdGVTdGFja0xheW91dFwiKTtcblxuICAgICAgICAgICAgaWYgKHBhZ2VEYXRhLnJlbWFya1R5cGVDb2RlID09PSBcIjhcIikge1xuICAgICAgICAgICAgICAgIHBhZ2VEYXRhLmNvbXBsZXRpb25EYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25EYXRlU3RhY2tMYXlvdXQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFnZURhdGEuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29tcGxldGlvbkRhdGVTdGFja0xheW91dC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLnRleHQgPSBkYXRlQ29udmVydGVyKHBhZ2VEYXRhLmNyZWF0aW9uRGF0ZSwgXCJNTS9ERC9ZWVlZXCIpO1xuICAgICAgICAgICAgY29tcGxldGlvbkRhdGVMYWJlbC50ZXh0ID0gZGF0ZUNvbnZlcnRlcihwYWdlRGF0YS5jb21wbGV0aW9uRGF0ZSwgXCJNTS9ERC9ZWVlZXCIpO1xuICAgICAgICAgICAgdmlzaXREYXRlTGFiZWwudGV4dCA9IGRhdGVDb252ZXJ0ZXIocGFnZURhdGEudmlzaXREYXRlLCBcIk1NL0REL1lZWVlcIik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25Db250ZXh0ID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgbmF2aWdhdGlvbkNvbnRleHQuaXNQcm9maWxlTWVtYmVyc2hpcCA9IGdsb2JhbC5pc1Byb2ZpbGVNZW1iZXJzaGlwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWdlRGF0YSA9IG5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiQWRkIFBlcnNvbiBSZW1hcmtcIjtcblxuICAgICAgICAgICAgbmF2aWdhdGlvbkNvbnRleHQuaXNQcm9maWxlTWVtYmVyc2hpcCA9IGdsb2JhbC5pc1Byb2ZpbGVNZW1iZXJzaGlwO1xuXG4gICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25Mb2FkZWQoYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciB2aXNpdERhdGVEYXRlUGlja2VyID0gcGFnZS5nZXRWaWV3QnlJZChcInZpc2l0RGF0ZURhdGVQaWNrZXJcIik7XG4gICAgICAgIFxuICAgICAgICB2aXNpdERhdGVEYXRlUGlja2VyLm9uKFwiZGF0ZUNoYW5nZVwiLCBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgdmlzaXREYXRlTGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKFwidmlzaXREYXRlTGFiZWxcIik7XG5cbiAgICAgICAgICAgIHZpc2l0RGF0ZUxhYmVsLnRleHQgPSBkYXRlQ29udmVydGVyKGFyZ3MudmFsdWUsIFwiTU0vREQvWVlZWVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGUpXG4gICAge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uU3RhY2tMYXlvdXRSZW1hcmtMZXZlbFRhcChhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29sbGFwc2VEYXRlcygpO1xuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGVvcGxlL3BlcnNvbi9yZW1hcmtzL3JlbWFya2FkZC9yZW1hcmtsZXZlbC9yZW1hcmtsZXZlbC1wYWdlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBwYWdlRGF0YSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbiAgICB9XG4gICAgY2F0Y2goZSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25TdGFja0xheW91dFJlbWFya1R5cGVUYXAoYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbGxhcHNlRGF0ZXMoKTtcblxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInBlb3BsZS9wZXJzb24vcmVtYXJrcy9yZW1hcmthZGQvcmVtYXJrdHlwZS9yZW1hcmt0eXBlLXBhZ2VcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHBhZ2VEYXRhLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuICAgIH1cbiAgICBjYXRjaChlKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblN0YWNrTGF5b3V0Q3JlYXRpb25EYXRlVGFwKGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBjb2xsYXBzZURhdGVzKCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25TdGFja0xheW91dENvbXBsZXRpb25EYXRlVGFwKGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBjb2xsYXBzZURhdGVzKCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25TdGFja0xheW91dFZpc2l0RGF0ZVRhcChhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHZpc2l0RGF0ZUdyaWRMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwidmlzaXREYXRlR3JpZExheW91dFwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh2aXNpdERhdGVHcmlkTGF5b3V0LnZpc2liaWxpdHkgPT09IFwiY29sbGFwc2VcIikge1xuICAgICAgICAgICAgdmlzaXREYXRlR3JpZExheW91dC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgICAgICAgIHBhZ2UuYWRkQ3NzKFwiI3Zpc2l0RGF0ZUxhYmVsIHtjb2xvcjogI2NjMmQzMDt9XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaXREYXRlR3JpZExheW91dC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuXG4gICAgICAgICAgICBwYWdlLmFkZENzcyhcIiN2aXNpdERhdGVMYWJlbCB7Y29sb3I6ICM2NjY7fVwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uU3RhY2tMYXlvdXRDcmVhdGVkQnlUYXAoYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbGxhcHNlRGF0ZXMoKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblRleHRWaWV3Rm9jdXMoYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbGxhcHNlRGF0ZXMoKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkNhbmNlbFRhcChhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzQW5kcm9pZCkge1xuICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTYXZlXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJXb3VsZCB5b3UgbGlrZSB0byBzYXZlIHRoZSByZW1hcms/XCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIlxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBzYXZlUmVtYXJrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXRmb3JtLmlzSU9TKSB7XG4gICAgICAgICAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXCJTYXZlIFJlbWFya1wiXVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJTYXZlIFJlbWFya1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVSZW1hcmsoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uU2F2ZVRhcChhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29sbGFwc2VEYXRlcygpO1xuXG4gICAgICAgIHNhdmVSZW1hcmsoKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzYXZlUmVtYXJrKCkge1xuICAgIGlmIChwYWdlRGF0YS5jcmVhdGlvbkRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFnZURhdGEuY3JlYXRpb25EYXRlID0gZGF0ZUNvbnZlcnRlcihwYWdlRGF0YS5jcmVhdGlvbkRhdGUsIFwiTU0vREQvWVlZWVwiKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZURhdGEuY29tcGxldGlvbkRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFnZURhdGEuY29tcGxldGlvbkRhdGUgPSBkYXRlQ29udmVydGVyKHBhZ2VEYXRhLmNvbXBsZXRpb25EYXRlLCBcIk1NL0REL1lZWVlcIik7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VEYXRhLnZpc2l0RGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBwYWdlRGF0YS52aXNpdERhdGUgPSBkYXRlQ29udmVydGVyKHBhZ2VEYXRhLnZpc2l0RGF0ZSwgXCJNTS9ERC9ZWVlZXCIpO1xuICAgIH1cblxuICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogZ2xvYmFsLmFwaUJhc2VTZXJ2aWNlVXJsICsgXCJwZXJzb24vaW5zZXJ0cGVyc29ucmVtYXJrXCIsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwiQXV0aG9yaXphdGlvblwiOiBnbG9iYWwudG9rZW4gfSxcbiAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkocGFnZURhdGEpXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKGRhdGEuUmVtYXJrc0lkICE9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbG9iYWwucmVmcmVzaFJlbWFya3MgPSB0cnVlO1xuXG4gICAgICAgICAgICBwYWdlRGF0YS5yZW1hcmtzSWQgPSBkYXRhLlJlbWFya3NJZDtcblxuICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIHdhcyBhbiBlcnJvciBzYXZpbmcgdGhlIHJlbWFyay5cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50b1N0cmluZygpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRhdGVDb252ZXJ0ZXIodmFsdWUsIGZvcm1hdCkge1xuICAgIGxldCByZXN1bHQgPSBmb3JtYXQ7XG5cbiAgICBjb25zdCBkYXkgPSB2YWx1ZS5nZXREYXRlKCk7XG5cbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIkREXCIsIGRheSA8IDEwID8gYDAke2RheX1gIDogZGF5KTtcblxuICAgIGNvbnN0IG1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKSArIDE7XG5cbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIk1NXCIsIG1vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IG1vbnRoKTtcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIllZWVlcIiwgdmFsdWUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gY29sbGFwc2VEYXRlcygpIHtcbiAgICB2YXIgdmlzaXREYXRlR3JpZExheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aXNpdERhdGVHcmlkTGF5b3V0XCIpO1xuXG4gICAgdmlzaXREYXRlR3JpZExheW91dC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuXG4gICAgcGFnZS5hZGRDc3MoXCIjdmlzaXREYXRlTGFiZWwge2NvbG9yOiAjNjY2O31cIik7XG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbmV4cG9ydHMub25Mb2FkZWQgPSBvbkxvYWRlZDtcbmV4cG9ydHMub25TdGFja0xheW91dFJlbWFya0xldmVsVGFwID0gb25TdGFja0xheW91dFJlbWFya0xldmVsVGFwO1xuZXhwb3J0cy5vblN0YWNrTGF5b3V0UmVtYXJrVHlwZVRhcCA9IG9uU3RhY2tMYXlvdXRSZW1hcmtUeXBlVGFwO1xuZXhwb3J0cy5vblN0YWNrTGF5b3V0Q3JlYXRpb25EYXRlVGFwID0gb25TdGFja0xheW91dENyZWF0aW9uRGF0ZVRhcDtcbmV4cG9ydHMub25TdGFja0xheW91dENvbXBsZXRpb25EYXRlVGFwID0gb25TdGFja0xheW91dENvbXBsZXRpb25EYXRlVGFwO1xuZXhwb3J0cy5vblN0YWNrTGF5b3V0VmlzaXREYXRlVGFwID0gb25TdGFja0xheW91dFZpc2l0RGF0ZVRhcDtcbmV4cG9ydHMub25TdGFja0xheW91dENyZWF0ZWRCeVRhcCA9IG9uU3RhY2tMYXlvdXRDcmVhdGVkQnlUYXA7XG5leHBvcnRzLm9uVGV4dFZpZXdGb2N1cyA9IG9uVGV4dFZpZXdGb2N1cztcbmV4cG9ydHMub25DYW5jZWxUYXAgPSBvbkNhbmNlbFRhcDtcbmV4cG9ydHMub25TYXZlVGFwID0gb25TYXZlVGFwO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Blb3BsZS9wZXJzb24vcmVtYXJrcy9yZW1hcmthZGQvcmVtYXJrYWRkLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wZW9wbGUvcGVyc29uL3JlbWFya3MvcmVtYXJrYWRkL3JlbWFya2FkZC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=