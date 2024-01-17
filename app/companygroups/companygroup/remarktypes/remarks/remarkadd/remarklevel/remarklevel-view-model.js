const ObservableModule = require("@nativescript/core/data/observable").Observable;
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function RemarkLevelViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function(isExecutive) {
        return http.request({
            url: global.apiBaseServiceUrl + "remarklevels?isExecutive=" + isExecutive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkLevel) {
                viewModel.Items.push(
                    remarkLevel.RemarkLevelDescription
                );

                viewModel.List.push({
                    remarkLevelCode: remarkLevel.RemarkLevelDescription,
                    remarkLevel: remarkLevel.RemarkLevelDescription
                });
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
        while (viewModel.Items.length) {
            viewModel.Items.pop();
        }

        while (viewModel.List.length) {
            viewModel.List.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkLevelViewModel;