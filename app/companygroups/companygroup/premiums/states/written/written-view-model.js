const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function WrittenViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, stateId) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyassessmentstateswritten?companyId=" + companyId + "&isGroup=" + isGroup + "&stateId=" + stateId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(state) {
                viewModel.push({
                    companyId: state.CompanyId,
                    companyName: state.CompanyName,
                    companyId0: state.CompanyId0,
                    groupId: state.GroupId,
                    groupName: state.GroupName,
                    stateId: state.StateId,
                    state: state.State,
                    assessedDwp: state.AssessedDwp
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

module.exports = WrittenViewModel;
