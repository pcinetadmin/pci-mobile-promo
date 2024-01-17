const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function AffiliatesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyassessmentinvoiceaffiliates?invoiceId=" + invoiceId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(affiliate) {
                viewModel.push({
                    invoiceId: affiliate.InvoiceId,
                    companyNumber: affiliate.CompanyNumber,
                    companyName: affiliate.CompanyName,
                    affiliateDwp: affiliate.AffiliateDwp
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

module.exports = AffiliatesViewModel;
