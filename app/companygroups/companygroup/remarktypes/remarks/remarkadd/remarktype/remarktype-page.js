const RemarkTypeViewModel = require("./remarktype-view-model");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var remarkTypeList = new RemarkTypeViewModel([]);

var remarkTypeIndex = 0;

var pageData = new ObservableModule.fromObject({
    boundData: null,
    remarkTypeIndex: remarkTypeIndex,
    remarkTypeList: null,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        page.actionBar.title = "Type";

        navigationContext = page.navigationContext;

        pageData.boundData = navigationContext;

        if (global.remarkTypeList === undefined) {
            pageData.set("isLoading", true);

            remarkTypeList.load().then(function () {
                global.remarkTypeList = remarkTypeList;

                pageData.remarkTypeList = global.remarkTypeList;

                remarkTypeIndex = 0;

                if (pageData.boundData.remarkTypeId !== null && pageData.boundData.remarkTypeId.toString().length > 0) {
                    var i;

                    for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                        if (pageData.remarkTypeList.List.getItem(i).remarkTypeId === pageData.boundData.remarkTypeId) {
                            remarkTypeIndex = i;
                        }
                    }
                }

                pageData.remarkTypeIndex = remarkTypeIndex;

                pageData.set("isLoading", false);

                page.bindingContext = pageData;
            });
        } else {
            pageData.remarkTypeList = global.remarkTypeList;
            
            remarkTypeIndex = 0;

            if (pageData.boundData.remarkTypeId !== null && pageData.boundData.remarkTypeId.toString().length > 0) {
                var i;

                for (i = 0; i < pageData.remarkTypeList.List.length; i++) {
                    if (pageData.remarkTypeList.List.getItem(i).remarkTypeId === pageData.boundData.remarkTypeId) {
                        remarkTypeIndex = i;
                    }
                }
            }

            pageData.remarkTypeIndex = remarkTypeIndex;

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
        var remarkTypeListPicker = page.getViewById("remarkTypeListPicker");
        
        remarkTypeListPicker.on("selectedIndexChange", function(args) {
            var remarkTypeItem = pageData.remarkTypeList.List.getItem(args.object.selectedIndex);
            //dialogs.alert(remarkTypeItem.remarkTypeId + ": " + remarkTypeItem.remarkType);
            pageData.boundData.remarkTypeId = remarkTypeItem.remarkTypeId;
            pageData.boundData.location = remarkTypeItem.remarkType;
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
