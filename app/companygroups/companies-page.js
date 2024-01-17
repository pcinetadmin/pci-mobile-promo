const CompaniesViewModel = require("./companies-view-model");
const platform = require("@nativescript/core/platform");
const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var gestures = require("@nativescript/core/ui/gestures");
var frameModule = require("@nativescript/core/ui/frame");
var dialogs = require("@nativescript/core/ui/dialogs");

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;
var searchBar;
var companiesPageSize = 25;
var companiesSearchText = "";
var companiesSearchSubmitted = false;
var memberOnly = "Y";

var companiesList = new CompaniesViewModel([]);

var pageData = new ObservableModule.fromObject({
    companiesList: companiesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        page.actionBar.title = "Companies";

        companiesSearchText = global.companiesSearchTextCompany;
        
        if (companiesSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = companiesSearchText;

            companiesSearchSubmitted = true;
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
    try {
        searchBar = args.object;

        if (platform.isAndroid) {
            searchBar.android.clearFocus();
        } else if (platform.isIOS) {
            // iOS Styling
            searchBar.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
            searchBar.ios.showsCancelButton = true;
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

function onSubmit(args) {
    try {
        searchBar = args.object;

        global.companiesSearchTextCompany = searchBar.text.trim();

        companiesSearchText = searchBar.text.trim();

        companiesList.empty();
        
        pageData.set("isLoading", true);

        companiesList.load(companiesSearchText, 1, companiesPageSize, memberOnly).then(function (){
            pageData.set("isLoading", false);

            companiesSearchSubmitted = true;
        
            searchBar.dismissSoftInput();
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

function onClear(args) {
    try {
        searchBar.text = "";
        companiesSearchText = "";

        global.companiesSearchTextCompany = "";

        if (companiesSearchSubmitted) {
            companiesList.empty();
            
            pageData.set("isLoading", true);

            companiesList.load(companiesSearchText, 1, companiesPageSize, memberOnly).then(function (){
                pageData.set("isLoading", false);

                companiesSearchSubmitted = false;
            
                searchBar.dismissSoftInput();
            });
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

function onSelectedIndexChanged(args) {
    try {
        var selectedIndex = args.newIndex;

        if (selectedIndex === 0) {
            memberOnly = "Y";
        } else {
            memberOnly = "N";
        }

        companiesList.empty();
        
        pageData.set("isLoading", true);

        companiesList.load(companiesSearchText, 1, companiesPageSize, memberOnly).then(function (){
            pageData.set("isLoading", false);

            companiesSearchSubmitted = true;
        
            searchBar.dismissSoftInput();
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

function onItemLoading(args) {
    try {
        if (platform.isIOS) {
            var cell = args.ios;

            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
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

function onItemTap(args) {
    try {
        if (platform.isIOS) {
            if (swipeOpen) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 200
                });

                swipeOpen = false;
            } else {
                var view = args.view;
                var model = view.bindingContext;

                const navigationEntry = {
                    moduleName: "companygroups/companygroup/companygroup-page",
                    context: model,
                    clearHistory: false
                };

                frameModule.topmost().navigate(navigationEntry);
            }
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

function onLoadMoreItems(args) {
    try {
        var companiesListCount = companiesList.length;
        var companiesPageNumber = Math.ceil(companiesListCount / companiesPageSize) + 1;
        var companiesRemainder = companiesListCount % companiesPageSize;

        if (companiesRemainder !== 0 && companiesRemainder < companiesPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        companiesList.load(companiesSearchText, companiesPageNumber, companiesPageSize, memberOnly).then(function (){
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

function onRemarkClick(args) {
    try {
        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
        }

        var view = args.view;
        var bindingContext = view.bindingContext;

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

                addRemark(bindingContext);
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        } else {
            addRemark(bindingContext);
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

function onLayoutLoaded(args) {
    var layout = args.object;

    if (platform.isAndroid) {
        layout.on(gestures.GestureTypes.tap, function(args) {
            try {
                if (swipeOpen) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 200
                    });
        
                    swipeOpen = false;
                } else {
                    var view = args.view;
                    var model = view.bindingContext;

                    const navigationEntry = {
                        moduleName: "companygroups/companygroup/companygroup-page",
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
        });
    }

    layout.on(gestures.GestureTypes.pan, function(args) {
        try {
            var layout = args.object;
            var view = args.view;

            if (swipeOpen && swipedItem !== undefined && swipedItem != layout) {
                swipedItem.animate({
                    translate: { x: 0, y: 0 },
                    duration: 50
                });
            }

            if (!isScrolling && !isSwiping) {
                if (Math.abs(args.deltaY) > Math.abs(args.deltaX)) {
                    isScrolling = true;
                    isSwiping = false;
                } else if (Math.abs(args.deltaX) > Math.abs(args.deltaY)) {
                    isScrolling = false;
                    isSwiping = true;
                }
            }

            if (isScrolling) {
                if (swipeOpen && swipedItem !== undefined) {
                    swipedItem.animate({
                        translate: { x: 0, y: 0 },
                        duration: 50
                    });
                }

                if (args.state === gestures.GestureStateTypes.ended) {
                    isScrolling = false;
                }
            } else if (isSwiping) {
                var companiesListView = page.getViewById("companiesListView");

                if (platform.isAndroid) {
                    companiesListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    companiesListView.ios.scrollEnabled = false;
                }

                swipeOpen = true;
                swipedItem = layout;

                var newX = layout.translateX + args.deltaX;

                if (newX >= MIN_X && newX <= MAX_X) {
                    layout.translateX = newX;
                }
                
                if (args.state === gestures.GestureStateTypes.ended && !(newX === MIN_X || newX === MAX_X)) {
                    // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
                    let destX = 0;
                    
                    // if user hit or crossed the THESHOLD either way, let's finish in that direction
                    if (newX <= MIN_X * THRESHOLD) {
                        destX = MIN_X;
                    } else if (newX >= MAX_X * THRESHOLD) {
                        destX = MAX_X;
                    }
                    
                    layout.animate({
                        translate: { x: destX, y: 0 },
                        duration: 200
                    });

                    if (platform.isAndroid) {
                        companiesListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        companiesListView.ios.scrollEnabled = true;
                    }

                    isSwiping = false;
                }
            }
        } catch(e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        }
    });
}

function addRemark(bindingContext) {
    var model = {
        remarksId: 0,
        companyId: bindingContext.companyId,
        companyName: bindingContext.companyName,
        companyId0: null,
        groupId: null,
        groupName: null,
        publicPrivate: "Public",
        remarkTypeCode: "8",
        remarkType: "System Update",
        creationDate: new Date(),
        completionDate: null,
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
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onRemarkClick = onRemarkClick;
