const RemarksViewModel = require("./remarks-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

var page;
var navigationContext;
var searchBar;
var remarksPageSize = 25;
var remarksSearchText = "";
var remarksSearchSubmitted = false;
var isGroup;
var companyId;
var remarkTypeCode;

var remarksList = new RemarksViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarksList: remarksList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        isGroup = navigationContext.isGroup;
        companyId = navigationContext.companyId;
        remarkTypeCode = navigationContext.remarkTypeCode;

        page.actionBar.title = "Remarks";

        if (isGroup === "Y") {
            // page.actionBar.title = "Group Remarks";

            remarksSearchText = global.remarksSearchTextGroup;
        } else {
            // page.actionBar.title = "Company Remarks";

            remarksSearchText = global.remarksSearchTextCompany;
        }
    
        if (remarksSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = remarksSearchText;

            remarksSearchSubmitted = true;
        }

        if (args.isBackNavigation) {
            if (global.refreshRemarks) {
                remarksList.empty();

                pageData.set("isLoading", true);

                remarksList.load(remarksSearchText, companyId, isGroup, global.isExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function () {
                    pageData.set("isLoading", false);
                });

                page.bindingContext = pageData;
            }
        } else {
            global.refreshRemarks = false;

            remarksList.empty();

            pageData.set("isLoading", true);

            remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function () {
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

function onAddTap(args) {
    try
    {
        if (global.logonId === null) {
            return http.request({
                url: global.apiBaseServiceUrl + "personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);
    
                data.forEach(function(person) {
                    global.logonId = person.LogonId
                });

                addRemark();
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark();
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

function onSearchBarLoaded(args) {
    searchBar = args.object;

    if (platform.isAndroid) {
        searchBar.android.clearFocus();
    } else if (platform.isIOS) {
        // iOS Styling
        searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
        searchBar.ios.showsCancelButton = true;
    }
}

function onSubmit(args) {
    searchBar = args.object;

    if (isGroup === "Y") {
        global.remarksSearchTextGroup = searchBar.text.trim();
    } else {
        global.remarksSearchTextCompany = searchBar.text.trim();
    }

    remarksSearchText = searchBar.text.trim();

    remarksList.empty();
    
    pageData.set("isLoading", true);

    remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function (){
        pageData.set("isLoading", false);

        remarksSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    remarksSearchText = "";

    if (isGroup === "Y") {
        global.remarksSearchTextGroup = "";
    } else {
        global.remarksSearchTextCompany = "";
    }

    if (remarksSearchSubmitted) {
        remarksList.empty();
        
        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function (){
            pageData.set("isLoading", false);

            remarksSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;

        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remark/remark-page",
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

function onLoadMoreItems(args) {
    try {
        var remarksListCount = remarksList.length;
        var remarksPageNumber = Math.ceil(remarksListCount / remarksPageSize) + 1;
        var remarksRemainder = remarksListCount % remarksPageSize;

        if (remarksRemainder !== 0 && remarksRemainder < remarksPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, remarksPageNumber, remarksPageSize, remarkTypeCode, global.personId).then(function () {
            pageData.set("isLoading", false);
        });
    } catch(e) {
        dialogs.alert({
            title: "Error",
            message: e.toString(),
            okButtonText: "OK"
        });
    }
}

function addRemark() {
    var completionDate = null;

    if (navigationContext.remarkTypeCode !== "8") {
        completionDate = new Date();
    }

    var model = {
        remarksId: 0,
        companyId: navigationContext.companyId,
        companyName: navigationContext.companyName,
        companyId0: null,
        groupId: null,
        groupName: null,
        publicPrivate: "Public",
        remarkTypeCode: navigationContext.remarkTypeCode,
        remarkType: navigationContext.remarkType,
        creationDate: new Date(),
        completionDate: completionDate,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null
    }

    const navigationEntry = {
        moduleName: "companygroups/companygroup/remarktypes/remarks/remarkadd/remarkadd-page",
        context: model,
        clearHistory: false
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
