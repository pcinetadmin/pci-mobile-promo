const GroupsViewModel = require("./groups-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

const MIN_X = -80;
const MAX_X = 0;
const THRESHOLD = 0.25;

var swipeOpen = false;
var swipedItem;

var isScrolling = false;
var isSwiping = false;

var page;
var searchBar;
var groupsPageSize = 25;
var groupsSearchText = "";
var groupsSearchSubmitted = false;

var groupsList = new GroupsViewModel([]);

var pageData = new ObservableModule.fromObject({
    groupsList: groupsList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        
        page.actionBar.title = "Groups";

        if (groupsSearchText !== "") {
            var searchBar = page.getViewById("searchBar");

            searchBar.text = groupsSearchText;
        }
        
        if (groupsList.length === 0) {
            pageData.set("isLoading", true);

            groupsList.load(groupsSearchText, 1, groupsPageSize).then(function () {
                pageData.set("isLoading", false);
            });
        }

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

        groupsSearchText = searchBar.text.trim();

        groupsList.empty();
        
        pageData.set("isLoading", true);

        groupsList.load(groupsSearchText, 1, groupsPageSize).then(function (){
            pageData.set("isLoading", false);

            groupsSearchSubmitted = true;
        
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
        groupsSearchText = "";

        if (groupsSearchSubmitted) {
            groupsList.empty();
            
            pageData.set("isLoading", true);

            groupsList.load(groupsSearchText, 1, groupsPageSize).then(function (){
                pageData.set("isLoading", false);

                groupsSearchSubmitted = false;
            
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
                    moduleName: "groups/group/group-page",
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
        var groupsListCount = groupsList.length;
        var groupsPageNumber = Math.ceil(groupsListCount / groupsPageSize) + 1;
        var groupsRemainder = groupsListCount % groupsPageSize;

        if (groupsRemainder !== 0 && groupsRemainder < groupsPageSize)
        {
            return;
        }

        pageData.set("isLoading", true);

        groupsList.load(groupsSearchText, groupsPageNumber, groupsPageSize).then(function (){
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
        var view = args.object;
        var model = view.bindingContext;

        model.reference = "nav";
        model.relationalType = "group";
        model.relationalId = view.bindingContext.groupId;

        const navigationEntry = {
            moduleName: "meetings/meetings-page",
            context: model,
            clearHistory: false
        };

        frameModule.topmost().navigate(navigationEntry);

        if (swipeOpen) {
            swipedItem.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });

            swipeOpen = false;
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
                        moduleName: "groups/group/group-page",
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
                var groupsListView = page.getViewById("groupsListView");

                if (platform.isAndroid) {
                    groupsListView.nativeView.requestDisallowInterceptTouchEvent(true);
                } else if (platform.isIOS) {
                    groupsListView.ios.scrollEnabled = false;
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
                        groupsListView.nativeView.requestDisallowInterceptTouchEvent(false);
                    } else if (platform.isIOS) {
                        groupsListView.ios.scrollEnabled = true;
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

exports.onNavigatingTo = onNavigatingTo;
exports.onSearchBarLoaded = onSearchBarLoaded;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
exports.onItemLoading = onItemLoading;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;
exports.onLayoutLoaded = onLayoutLoaded;
exports.onRemarkClick = onRemarkClick;
