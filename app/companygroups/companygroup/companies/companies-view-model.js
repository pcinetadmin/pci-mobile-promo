const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function CompaniesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(loadData, companyId, isGroup) {
        var requestUrl;

        switch (loadData) {
            case "pacauthorization":
                requestUrl = global.apiBaseServiceUrl + "company/companypaceligiblecompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

            case "addresses":
                requestUrl = global.apiBaseServiceUrl + "company/companyaddresscompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

            default:
                requestUrl = global.apiBaseServiceUrl + "company/companypaceligiblecompanies?companyId=" + companyId + "&isGroup=" + isGroup;
                
                break;

        }

        return http.request({
            url: requestUrl,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    companyId0: company.CompanyId0,
                    groupId: company.GroupId,
                    groupName: company.GroupName
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

module.exports = CompaniesViewModel;
