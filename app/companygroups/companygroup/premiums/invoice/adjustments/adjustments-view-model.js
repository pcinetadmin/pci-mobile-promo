const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function AdjustmentsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId, isManual) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyassessmentinvoiceadjustments?invoiceId=" + invoiceId + "&isManual=" + isManual,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(adjustment) {
                viewModel.push({
                    invoiceId: adjustment.InvoiceId,
                    adjustmentDescription: adjustment.AdjustmentDescription,
                    adjustmentAmount: adjustment.AdjustmentAmount,
                    adjTypeMasterId: adjustment.AdjTypeMasterId
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

module.exports = AdjustmentsViewModel;
