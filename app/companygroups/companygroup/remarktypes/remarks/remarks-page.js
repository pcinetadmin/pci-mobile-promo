const RemarksViewModel = require("./remarks-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

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

        if (isGroup === "Y") {
            page.actionBar.title = "Group Remarks";

            remarksSearchText = global.remarksSearchTextGroup;
        } else {
            page.actionBar.title = "Company Remarks";

            remarksSearchText = global.remarksSearchTextCompany;
        }
    
        if (remarksSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = remarksSearchText;

            remarksSearchSubmitted = true;
        }
        
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
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

        remarksList.load(remarksSearchText, companyId, isGroup, global.isProfileExecutive, 1, remarksPageSize, remarkTypeCode, global.personId).then(function () {
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
