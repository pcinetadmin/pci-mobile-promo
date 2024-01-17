const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function RemarkTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, isExecutive, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyremarktypes?companyId=" + companyId + "&isGroup=" + isGroup + "&isExecutive=" + isExecutive + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remarkType) {
                if (data[0].CompanyId !== undefined && data[0].CompanyId !== null)
                {
                    viewModel.push({
                        companyId: remarkType.CompanyId,
                        companyName: remarkType.CompanyName,
                        remarkTypeCode: remarkType.RemarkTypeCode,
                        remarkType: remarkType.RemarkType,
                        sortOrder: remarkType.SortOrder
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

module.exports = RemarkTypesViewModel;
