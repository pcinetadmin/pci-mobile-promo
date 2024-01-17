const ObservableModule = require("@nativescript/core/data/observable");
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function PremiumsViewModel() {
    const viewModel = ObservableModule.fromObject({
        companyId: null,
        companyName: "",
        companyId0: null,
        groupId: null,
        groupName: "",
        leadCompanyId: null,
        leadCompanyName: "",
        assessmentYear: "",
        dwpYear: "",
        totalDwp: null,
        excludedDwp: "",
        assessedDwp: null,
        totalAssessment: "",
        stateCount: "",
        lineCount: "",
    
        load: function(companyId, isGroup) {
            return http.request({
                url: global.apiBaseServiceUrl + "companyassessments?companyId=" + companyId + "&isGroup=" + isGroup,
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
            }).then(function (response) {
                var result = response.content.toString();
                var data = JSON.parse(result);

                if (data[0].CompanyId !== undefined && data[0].CompanyId !== null)
                {
                    viewModel.companyId = data[0].CompanyId;
                    viewModel.companyName = data[0].CompanyName;
                    viewModel.companyId0 = data[0].CompanyId0;
                    viewModel.groupId = data[0].GroupId;
                    viewModel.groupName = data[0].GroupName;
                    viewModel.leadCompanyId = data[0].LeadCompanyId;
                    viewModel.leadCompanyName = data[0].LeadCompanyName;
                    viewModel.assessmentYear = data[0].AssessmentYear;
                    viewModel.dwpYear = data[0].DwpYear;
                    viewModel.totalDwp = data[0].TotalDwp;
                    viewModel.excludedDwp = data[0].ExcludedDwp;
                    viewModel.assessedDwp = data[0].AssessedDwp;
                    viewModel.totalAssessment = data[0].TotalAssessment;
                    viewModel.stateCount = data[0].StateCount;
                    viewModel.lineCount = data[0].LineCount;
                }
                else
                {
                    // undefined or null data.CompanyId returned.
                    viewModel.companyId = null;
                    viewModel.companyName = "";
                    viewModel.companyId0 = null;
                    viewModel.groupId = null;
                    viewModel.groupName = "";
                    viewModel.leadCompanyId = null;
                    viewModel.leadCompanyName = "";
                    viewModel.assessmentYear = "";
                    viewModel.dwpYear = "";
                    viewModel.totalDwp = null;
                    viewModel.excludedDwp = "";
                    viewModel.assessedDwp = null;
                    viewModel.totalAssessment = "";
                    viewModel.stateCount = "";
                    viewModel.lineCount = "";

                    // dialogs.alert("Company assessment information not available at this time.")
                }
            }, function (e) {
                dialogs.alert({
                    title: "Error",
                    message: e.toString(),
                    okButtonText: "OK"
                });
            });
        }, 

        empty: function() {
            viewModel.companyId = null;
            viewModel.companyName = "";
            viewModel.companyId0 = null;
            viewModel.groupId = null;
            viewModel.groupName = "";
            viewModel.leadCompanyId = null;
            viewModel.leadCompanyName = "";
            viewModel.assessmentYear = "";
            viewModel.dwpYear = "";
            viewModel.totalDwp = null;
            viewModel.excludedDwp = "";
            viewModel.assessedDwp = null;
            viewModel.totalAssessment = "";
            viewModel.stateCount = "";
            viewModel.lineCount = "";
        }
    });

    return viewModel;
}

module.exports = PremiumsViewModel;
