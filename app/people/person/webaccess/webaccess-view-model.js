const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function WebAccessViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personwebaccess?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(webAccess) {
                if (webAccess.PersonId !== null) {
                    viewModel.push({
                        personId: webAccess.PersonId,
                        fullName: webAccess.FullName,
                        webAccessCode: webAccess.WebAccessCode,
                        webAccess: webAccess.WebAccess,
                        description: webAccess.Description,
                        sortOrder: webAccess.SortOrder
                    });
                }
            });
        }, function (e) {
            dialogs.alert({
                title: "Error",
                message: e.toString(),
                okButtonText: "OK"
            });
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = WebAccessViewModel;
