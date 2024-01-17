const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, committeeListCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "companycommittees?companyId=" + companyId + "&isGroup=" + isGroup + "&committeeListCode=" + committeeListCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                viewModel.push({
                    companyId: committee.CompanyId,
                    companyName: committee.CompanyName,
                    committeeCode: committee.CommitteeCode,
                    committee: committee.Committee
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

module.exports = CommitteesViewModel;
