const PacAuthorizationViewModel = require("./pacauthorization-view-model");
const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

var page;
var navigationContext;

var pacAuthorizationList = new PacAuthorizationViewModel([]);

var pageData = new observableModule.fromObject({
    pacAuthorizationList: pacAuthorizationList,
    isLoading: false
});

function onNavigatingTo(args) {
    try {
        page = args.object;
        navigationContext = page.navigationContext;
        
        page.actionBar.title = "PAC Authorization";
                
        var fullName = page.getViewById("fullName");
    
        fullName.text = navigationContext.fullName;
    
        if (args.isBackNavigation) {
            // Do Nothing on Back Navigation
        } else {
            pacAuthorizationList.empty();
        
            pageData.set("isLoading", true);
        
            pacAuthorizationList.load(navigationContext.personId).then(function () {
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

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
