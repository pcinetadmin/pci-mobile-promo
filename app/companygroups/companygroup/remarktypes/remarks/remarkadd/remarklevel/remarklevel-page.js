const RemarkLevelViewModel = require("./remarklevel-view-model");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var remarkLevelList = new RemarkLevelViewModel([]);

var remarkLevelIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkLevelIndex: remarkLevelIndex,
    remarkLevelList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkLevelList === undefined) {
            pageData.set("isLoading", true);

            remarkLevelList.load(global.isProfileExecutive).then(function () {
                global.remarkLevelList = remarkLevelList;

                pageData.remarkLevelList = global.remarkLevelList;

                remarkLevelIndex = 0;

                if (pageData.boundData.remarkLevelId !== null && pageData.boundData.remarkLevelId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                        if (pageData.remarkLevelList.List.getItem(i).remarkLevelId === pageData.boundData.remarkLevelId) {
                            remarkLevelIndex = i;
                        }
                    }
                }

                pageData.remarkLevelIndex = remarkLevelIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkLevelList = global.remarkLevelList;
            
            remarkLevelIndex = 0;

            if (pageData.boundData.remarkLevelId !== null && pageData.boundData.remarkLevelId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkLevelList.List.length; i++) {
                    if (pageData.remarkLevelList.List.getItem(i).remarkLevelId === pageData.boundData.remarkLevelId) {
                        remarkLevelIndex = i;
                    }
                }
            }

            pageData.remarkLevelIndex = remarkLevelIndex;

            page.bindingContext = pageData;
        }
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function onLoaded(args) {
    try {
        var remarkLevelListPicker = page.getViewById("remarkLevelListPicker");
        
        remarkLevelListPicker.on("selectedIndexChange", function(args) {
            var remarkLevelItem = pageData.remarkLevelList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkLevelItem.remarkLevelId + ": " + remarkLevelItem.remarkLevel);
            pageData.boundData.remarkLevelId = remarkLevelItem.remarkLevelId;
            pageData.boundData.location = remarkLevelItem.remarkLevel;
        });

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
