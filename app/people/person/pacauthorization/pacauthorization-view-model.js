const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function PacAuthorizationViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personpaceligible?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(pacEligible) {
                viewModel.push({
                    personId: pacEligible.PersonId,
                    fullName: pacEligible.FullName,
                    year: pacEligible.Year,
                    eligible: pacEligible.Eligible,
                    pacEligibleId: pacEligible.pacEligibleId
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
