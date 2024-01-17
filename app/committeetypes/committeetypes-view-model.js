const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteeTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function() {
        return http.request({
            url: global.apiBaseServiceUrl + "committeetypes?committeeListCode=1&isExecutive=Y",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committeeType) {
                if (committeeType.CommitteeTypeCode !== null && committeeType.CommitteeTypeCode !== 0) {
                    viewModel.push({
                        committeeListCode: committeeType.CommitteeListCode,
                        committeeList: committeeType.CommitteeList,
                        committeeTypeCode: committeeType.CommitteeTypeCode,
                        committeeType: committeeType.CommitteeType
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

module.exports = CommitteeTypesViewModel;
