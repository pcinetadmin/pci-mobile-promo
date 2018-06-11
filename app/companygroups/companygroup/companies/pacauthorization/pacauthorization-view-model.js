const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function PacAuthorizationViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companypaceligible?companyId=" + companyId + "&isGroup=N",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(pacEligible) {
                viewModel.push({
                    companyId: pacEligible.CompanyId,
                    companyName: pacEligible.CompanyName,
                    companyId0: pacEligible.CompanyId0,
                    groupId: pacEligible.GroupId,
                    groupName: pacEligible.GroupName,
                    year: pacEligible.Year,
                    eligible: pacEligible.Eligible,
                    pacGoal: pacEligible.PacGoal,
                    pacStartDate: pacEligible.PacStartDate,
                    fullName: pacEligible.FullName,
                    companyPacEligibleId: pacEligible.CompanyPacEligibleId
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

module.exports = PacAuthorizationViewModel;
