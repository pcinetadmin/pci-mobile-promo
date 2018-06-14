const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function BreakdownViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(invoiceId, isReinsurer) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoicebreakdown?invoiceId=" + invoiceId + "&isReinsurer=" + isReinsurer,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(breakdown) {
                var upperLimitPremVol;

                if (isReinsurer === "Y") {
                    upperLimitPremVol = breakdown.UpperLimitPremVol;
                } else {
                    if (breakdown.UpperLimitPremVol === 10000000000000000 || (breakdown.Dwp > breakdown.LowerLimitPremVol && breakdown.Dwp < breakdown.UpperLimitPremVol)) {
                        upperLimitPremVol = breakdown.Dwp;
                    } else {
                        upperLimitPremVol = breakdown.UpperLimitPremVol;
                    }
                }

                viewModel.push({
                    invoiceId: breakdown.InvoiceId,
                    ratePerPremVol: Number(breakdown.RatePerPremVol).toFixed(2),
                    lowerLimitPremVol: breakdown.LowerLimitPremVol,
                    upperLimitPremVol: upperLimitPremVol,
                    assessmentPremVol: breakdown.AssessmentPremVol,
                    dwp: breakdown.Dwp
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

module.exports = BreakdownViewModel;
