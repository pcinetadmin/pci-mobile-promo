const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(committeeListCode, committeeTypeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "committees?committeeListCode=" + committeeListCode + "&committeeTypeCode=" + committeeTypeCode + "&isExecutive=Y",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.CommitteeCode !== null && committee.CommitteeCode !== 0) {
                    viewModel.push({
                        committeeListCode: committee.CommitteeListCode,
                        committeeList: committee.CommitteeList,
                        committeeTypeCode: committee.CommitteeTypeCode,
                        committeeType: committee.CommitteeType,
                        committeeStateListCode: committee.CommitteeStateListCode,
                        committeeStateList: committee.CommitteeStateList,
                        parentCommitteeCode: committee.ParentCommitteeCode,
                        parentCommittee: committee.ParentCommittee,
                        parentCommitteeTypeCode: committee.ParentCommitteeTypeCode,
                        committeeCode: committee.CommitteeCode,
                        committeeName: committee.CommitteeName,
                        dateFormed: committee.DateFormed,
                        stateCode: committee.StateCode,
                        stateName: committee.StateName,
                        memberCount: committee.MemberCount,
                        personId: committee.PersonId,
                        fullName: committee.FullName,
                        internalReportFlag: committee.InternalReportFlag,
                        annualReportFlag: committee.AnnualReportFlag,
                        restricted: committee.Restricted,
                        includeOnWebsite: committee.IncludeOnWebsite,
                        websiteName: committee.WebsiteName,
                        websiteText: committee.WebsiteText,
                        subCommitteeFlag: committee.SubCommitteeFlag
                    });
                }
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

module.exports = CommitteesViewModel;
