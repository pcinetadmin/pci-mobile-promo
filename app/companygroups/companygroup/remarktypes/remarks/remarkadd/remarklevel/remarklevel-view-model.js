const ObservableModule = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function RemarkLevelViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function(isExecutive) {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarklevels?isExecutive=" + isExecutive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkLevel) {
                viewModel.Items.push(
                    remarkLevel.RemarkLevelDescription
                );

                viewModel.List.push({
                    remarkLevelDescriptionId: remarkLevel.RemarkLevelDescription,
                    remarkLevelDescription: remarkLevel.remarkLevelDescription
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