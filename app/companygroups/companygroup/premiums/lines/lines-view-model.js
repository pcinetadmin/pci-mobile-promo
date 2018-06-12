const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function LinesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, sort) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentlines?companyId=" + companyId + "&isGroup=" + isGroup + "&sort=" + sort + "&rank=51",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(line) {
                viewModel.push({
                    companyId: line.CompanyId,
                    companyName: line.CompanyName,
                    lineOfBusinessId: line.LineOfBusinessId,
                    lineOfBusiness: line.LineOfBusiness,
                    assessedDwp: line.AssessedDwp,
                    isGroup: isGroup
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

module.exports = LinesViewModel;
