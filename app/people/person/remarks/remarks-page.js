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
var personId;

var remarksList = new RemarksViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarksList: remarksList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        var fullName = page.getViewById("fullName");
        
        fullName.text = navigationContext.fullName;

        personId = navigationContext.personId;

        page.actionBar.title = "Remarks";

        remarksSearchText = global.remarksSearchText;
        
        if (remarksSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = remarksSearchText;

            remarksSearchSubmitted = true;
        }

        if (args.isBackNavigation) {
            if (global.refreshRemarks) {
                remarksList.empty();

                pageData.set("isLoading", true);

                remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
                    pageData.set("isLoading", false);
                });

                page.bindingContext = pageData;
            }
        } else {
            global.refreshRemarks = false;

            remarksList.empty();

            pageData.set("isLoading", true);

            remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
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

    global.remarksSearchText = searchBar.text.trim();

    remarksSearchText = searchBar.text.trim();

    remarksList.empty();
    
    pageData.set("isLoading", true);

    remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function (){
        pageData.set("isLoading", false);

        remarksSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    remarksSearchText = "";

    global.remarksSearchText = "";

    if (remarksSearchSubmitted) {
        remarksList.empty();
        
        pageData.set("isLoading", true);

        remarksList.load(remarksSearchText, personId, global.isProfileExecutive, 1, remarksPageSize, global.personId).then(function () {
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

        const navigationEntry = {
            moduleName: "people/person/remarks/remark/remark-page",
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

        remarksList.load(remarksSearchText, personId, global.isProfileExecutive, remarksPageNumber, remarksPageSize, global.personId).then(function () {
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
    var model = {
        remarksId: 0,
        personId: navigationContext.personId,
        fullName: navigationContext.fullName,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
        visitDate: null,
        userName: global.logonId,
        commentAbbreviated: null,
        comment: null,
        copyToCompanyFlag: "true"
    }

    const navigationEntry = {
        moduleName: "people/person/remarks/remarkadd/remarkadd-page",
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
