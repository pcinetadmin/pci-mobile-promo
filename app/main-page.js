const application = require("application");
var frame = require("ui/frame");
var gridLayout = require("ui/layouts/grid-layout");
var stackLayout = require("ui/layouts/stack-layout")
var Label = require("ui/label").Label;
var orientation = require('@proplugins/nativescript-orientation');

var page;

function onNavigatingTo(args) {
    orientation.enableRotation();
    page = args.object;
    page._tabs = [];

    page.tabItems = [
        { path: "companygroups/companygroups-page", iconCode: "\uf0e8", label: "Groups", isGroup: "Y" },
        { path: "companygroups/companygroups-page", iconCode: "\uf0b1", label: "Companies", isGroup: "N" },
        { path: "people/people-page", iconCode: "\uf007", label: "People", isGroup: "N" },
        { path: "committeetypes/committeetypes-page", iconCode: "\uf0c0", label: "Committees", isGroup: "N" }
    ];

    var numItems = page.tabItems.length;

    var newGrid = new gridLayout.GridLayout();

    newGrid.id = "tab-navigation";

    newGrid.addRow(new gridLayout.ItemSpec(1, "star"));
    newGrid.addRow(new gridLayout.ItemSpec(1, "auto"));
    
    for (var i = 0; i < numItems; i++) {
        newGrid.addColumn(new gridLayout.ItemSpec(1, "star"));
    }

    var frameHolder = new stackLayout.StackLayout();
    
    page.navFrame = new frame.Frame();

    page.navFrame.id = "navigation-frame";
    page.navFrame.className = "navigation-frame";

    frameHolder.addChild(page.navFrame);

    newGrid.addChild(frameHolder);

    gridLayout.GridLayout.setColumn(frameHolder, 0);
    gridLayout.GridLayout.setRow(frameHolder, 0);
    gridLayout.GridLayout.setColumnSpan(frameHolder, numItems);

    for (var i = 0; i < numItems; i++) {
        var currentItem = page.tabItems[i];
        var tab = new stackLayout.StackLayout();

        tab.direction = "vertical";

        if (i === 0) {
            tab.className = "tab tab-selected";
        } else {
            tab.className = "tab";
        }

        tab.id = "tab_" + i;
        
        tab.on("tap", function (args) {
            return onTabSelected(args, currentItem);
        })

        var icon = new Label();

        icon.className = 'tab-icon';

        //icon.text = String.fromCharCode(currentItem.iconCode)
        icon.text = currentItem.iconCode;
        tab.addChild(icon);

        var label = new Label();

        label.className = 'tab-label';
        label.text = currentItem.label;
        tab.addChild(label);

        page._tabs.push(tab);
        newGrid.addChild(tab);

        gridLayout.GridLayout.setRow(tab, 1);
        gridLayout.GridLayout.setColumn(tab, i);
    }

    page.content = newGrid;

    const dateConverter = (value, format) => {
        let result = format;

        if (value === undefined || value === null) {
            //result = "";
        } else {
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());
        }

        return result;
    };

    application.getResources().dateConverter = dateConverter;
    application.getResources().dateFormat = "MM/DD/YYYY";

    const currencyConverter = (value) => {
        var result;

        if (value === undefined || value === null) {
            result = null;
        } else {
            result = '$' + value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
        }

        return result;
    }

    application.getResources().currencyConverter = currencyConverter;

    var navigationEntry = {
        moduleName: page.tabItems[0].path,
        context: {
            reference: "tab",
            isGroup: page.tabItems[0].isGroup
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry);
}

function onTabSelected(args) {
    var selectedTab = args.object;
    var index = selectedTab.id.substring(selectedTab.id.indexOf("tab_") + 4);

    if (selectedTab.className.indexOf("tab-selected") > -1) {
        var currentFrame = page.getViewById("navigation-frame");
        
        if (page.tabItems[index].label === currentFrame.currentPage.actionBar.title) {
            return;
        }
    }

    page._tabs.forEach(function(tab) {
        tab.className = 'tab';
    });

    selectedTab.className = 'tab tab-selected';

    showTab(page.tabItems[index]);
}

function showTab(tabItem) {
    var navigationEntry = {
        moduleName: tabItem.path,
        context: {
            reference: "tab",
            isGroup: tabItem.isGroup
        },
        clearHistory: true
    }

    page.navFrame.navigate(navigationEntry)
}

exports.onNavigatingTo = onNavigatingTo;
