const ObservableModule = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function RemarkTypeViewModel() {
    const viewModel = new ObservableModule();
    viewModel.Items = new ObservableArray();
    viewModel.List = new ObservableArray();

    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "remark/remarktypes",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                viewModel.Items.push(
                    remarkType.RemarkTypeDescription
                );

                viewModel.List.push({
                    remarkTypeCode: remarkType.RemarkTypeCode,
                    remarkTypeDescription: remarkType.RemarkTypeDescription
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

module.exports = RemarkTypeViewModel;