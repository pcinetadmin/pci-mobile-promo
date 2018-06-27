const RemarkTypesViewModel = require("./remarktypes-view-model");
const platform = require("platform");
const ObservableModule = require("data/observable");
var http = require("http");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;
var isGroup;

var remarkTypesList = new RemarkTypesViewModel([]);

var pageData = new ObservableModule.fromObject({
    remarkTypesList: remarkTypesList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;

        isGroup = navigationContext.isGroup;

        page.actionBar.title = "Remark Types";
            
        // if (isGroup === "Y") {
        //     page.actionBar.title = "Group Remarks";
        // } else {
        //     page.actionBar.title = "Company Remarks";
        // }
    
        var companyName = page.getViewById("companyName");
        
        companyName.text = navigationContext.companyName;

        remarkTypesList.empty();

        pageData.set("isLoading", true);

        remarkTypesList.load(navigationContext.companyId, isGroup, global.isExecutive, global.personId).then(function () {
            pageData.set("isLoading", false);
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
                url: global.apiBaseServiceUrl + "person/personinfo?personId=" + global.personId,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": global.token }
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

function onItemTap(args) {
    try {
        var view = args.view;
        var model = view.bindingContext;

        model.isGroup = isGroup;
        
        const navigationEntry = {
            moduleName: "companygroups/companygroup/remarktypes/remarks/remarks-page",
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
exports.onBackTap = onBackTap;
exports.onAddTap = onAddTap;
exports.onItemTap = onItemTap;
