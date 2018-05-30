const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function ContactTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycontacttypes?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(contactType) {
                viewModel.push({
                    companyId: contactType.CompanyId,
                    companyName: contactType.CompanyName,
                    contactCode: contactType.ContactCode,
                    contactType: contactType.ContactType,
                    sortOrder: contactType.SortOrder
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

module.exports = ContactTypesViewModel;
