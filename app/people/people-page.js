const PeopleViewModel = require("./people-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");
var http = require("http");
var dialogs = require("ui/dialogs");
var email = require("nativescript-email");
var phone = require("nativescript-phone");

const MIN_X = -80;
const MAX_X = 160;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var navigationContext;
var searchBar;
var peoplePageSize = 25;
var peopleSearchText = "";
var peopleSearchSubmitted = false;
var isGroup;
var companyId = 0;

var peopleList = new PeopleViewModel([]);

var pageData = new ObservableModule.fromObject({
    peopleList: peopleList,
    companyId: companyId,
    reference: "tab",
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "People";

        navigationContext = page.navigationContext;

        if (navigationContext.reference === "tab") {
            pageData.reference = "tab";
        } else {
            pageData.reference = "nav";
        }

        isGroup = navigationContext.isGroup;

        if (navigationContext.companyId !== undefined && navigationContext.companyId !== null && navigationContext.companyId !== 0) {
            companyId = navigationContext.companyId;
        } else {
            companyId = 0;
        }
        
        pageData.companyId = companyId;
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;
        
        if (navigationContext.reference === "tab") {
            peopleSearchText = global.peopleSearchText;
        } else {
            if (isGroup === "Y") {
                peopleSearchText = global.peopleSearchTextGroup;
            } else {
                peopleSearchText = global.peopleSearchTextCompany;
            }
        }

        if (peopleSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = peopleSearchText;

            peopleSearchSubmitted = true;
        }
        
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            peopleList.empty();

            pageData.set("isLoading", true);

            peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function () {
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

    if (navigationContext.reference === "tab") {
        global.peopleSearchText = searchBar.text.trim();
    } else {
        if (isGroup === "Y") {
            global.peopleSearchTextGroup = searchBar.text.trim();
        } else {
            global.peopleSearchTextCompany = searchBar.text.trim();
        }
    }

    peopleSearchText = searchBar.text.trim();

    peopleList.empty();
    
    pageData.set("isLoading", true);

    peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function (){
        pageData.set("isLoading", false);

        peopleSearchSubmitted = true;
    
        searchBar.dismissSoftInput();
    });
}

function onClear(args) {
    searchBar.text = "";
    peopleSearchText = "";

    if (navigationContext.reference === "tab") {
        global.peopleSearchText = "";
    } else {
        if (isGroup === "Y") {
            global.peopleSearchTextGroup = "";
        } else {
            global.peopleSearchTextCompany = "";
        }
    }

    if (peopleSearchSubmitted) {
        peopleList.empty();
        
        pageData.set("isLoading", true);

        peopleList.load(peopleSearchText, isGroup, 1, peoplePageSize, companyId).then(function (){
            pageData.set("isLoading", false);

            peopleSearchSubmitted = false;
        
            searchBar.dismissSoftInput();
        });
    }
}

function onItemLoading(args) {
    if (platform.isIOS) {
        var cell = args.ios;

        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
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
                    moduleName: "people/person/person-page",
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
        var peopleListCount = peopleList.length;
        var peoplePageNumber = Math.ceil(peopleListCount / peoplePageSize) + 1;
        var peopleRemainder = peopleListCount % peoplePageSize;

        if (peopleRemainder !== 0 && peopleRemainder < peoplePageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        peopleList.load(peopleSearchText, isGroup, peoplePageNumber, peoplePageSize, companyId).then(function (){
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

function onEmailClick(args) {
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

        email.compose({
            to: [bindingContext.emailAddress]
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

function onPhoneClick(args) {
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

        phone.dial(bindingContext.workPhone, false);
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
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
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
                        moduleName: "people/person/person-page",
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
                var peopleListView = page.getViewById("peopleListView");

                if (platform.isAndroid) {
                    peopleListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    peopleListView.ios.scrollEnabled = false;
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
                        peopleListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        peopleListView.ios.scrollEnabled = true;
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
        personId: bindingContext.personId,
        fullName: bindingContext.fullName,
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
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onPhoneClick = onPhoneClick;
exports.onEmailClick = onEmailClick;
exports.onRemarkClick = onRemarkClick;
