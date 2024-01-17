const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteeMembershipViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "companymetriccommittees?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    year: company.Year,
                    committeeCount: company.CommitteeCount,
                    attendeeCount: company.AttendeeCount
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

module.exports = CommitteeMembershipViewModel;
