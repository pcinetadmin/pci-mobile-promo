const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function InvoicesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyassessmentinvoices?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(invoice) {
                viewModel.push({
                    invoiceId: invoice.InvoiceId,
                    invoiceDate: invoice.InvoiceDate,
                    leadCompanyId: invoice.LeadCompanyId,
                    leadCompanyName: invoice.LeadCompanyName,
                    companyNumber: invoice.CompanyNumber,
                    assessmentPeriodId: invoice.AssessmentPeriodId,
                    assessmentPeriod: invoice.AssessmentPeriod,
                    finalAssessment: invoice.FinalAssessment,
                    fixedAssessment: invoice.FixedAssessment,
                    totalPayments: invoice.TotalPayments,
                    previousBalance: invoice.PreviousBalance,
                    balanceDue: invoice.BalanceDue,
                    reinsurerCalcTypeId: invoice.ReinsurerCalcTypeId,
                    adjustedDwp: invoice.AdjustedDwp,
                    stateCount: invoice.StateCount,
                    stateCountRate: invoice.StateCountRate,
                    stateAssessment: invoice.StateAssessment,
                    totalBreakdowns: invoice.TotalBreakdowns,
                    annualAssessment: invoice.AnnualAssessment,
                    semiAnnualAssessment: invoice.SemiAnnualAssessment,
                    totalAdjustments: invoice.TotalAdjustments,
                    semiAnnualAdjustedAssessment: invoice.SemiAnnualAdjustedAssessment,
                    totalManualAdjustments: invoice.TotalManualAdjustments
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

module.exports = InvoicesViewModel;
