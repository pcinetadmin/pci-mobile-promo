const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function RemarkTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, isExecutive) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyremarktypes?companyId=" + companyId + "&isGroup=" + isGroup + "&isExecutive=" + isExecutive,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                viewModel.push({
                    companyId: remarkType.CompanyId,
                    companyName: remarkType.CompanyName,
                    remarkTypeCode: remarkType.RemarkTypeCode,
                    remarkType: remarkType.RemarkType,
                    sortOrder: remarkType.SortOrder
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
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    
    return viewModel;
}

module.exports = RemarkTypesViewModel;
