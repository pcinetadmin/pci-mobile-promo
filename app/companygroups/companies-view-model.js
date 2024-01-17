const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function CompaniesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize, memberOnly) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyfilter?filter=" + filter.replace(/ /g, "%20").replace(/‘/g, "'").replace(/’/g, "'") + "&isGroup=N&page=" + page + "&pageSize=" + pageSize + "&memberOnly=" + memberOnly,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                if (company.CompanyId !== null && company.CompanyId !== 0) {
                    var autoCoSelect;
                    var inclinProfile;

                    if (company.AutoCoSelect === "Y") {
                        autoCoSelect = "Yes";
                    } else {
                        autoCoSelect = "No";
                    }

                    if (company.InclinProfile === "Y") {
                        inclinProfile = "Yes";
                    } else {
                        inclinProfile = "No";
                    }

                    viewModel.push({
                        companyId: company.CompanyId,
                        companyName: company.CompanyName,
                        companyId0: company.CompanyId0,
                        groupId: company.GroupId,
                        groupName: company.GroupName,
                        holdCompanyId: company.HoldCompanyId,
                        holdCompany: company.HoldCompany,
                        mapCompanyId: company.MapCompanyId,
                        mapCompany: company.MapCompany,
                        autoCoSelect: autoCoSelect,
                        inclinProfile: inclinProfile,
                        compRemovedDate: company.CompRemovedDate,
                        numberedAmBest: company.NumberedAmBest,
                        numberedNaic: company.NumberedNaic.toUpperCase(),
                        numberedNaii: company.NumberedNaii,
                        statusCode: company.StatusCode,
                        status: company.Status,
                        companyFoundedDate: company.CompanyFoundedDate,
                        domiciledStateCode: company.DomiciledStateCode,
                        domiciledState: company.DomiciledState,
                        domiciledCountryCode: company.DomiciledCountryCode,
                        domiciledCountry: company.DomiciledCountry,
                        marketingType: company.MarketingType,
                        structure: company.Structure,
                        membershipTypeCode: company.MembershipTypeCode,
                        membershipType: company.MembershipType,
                        isMember: company.IsMember,
                        webAccessCode: company.WebAccessCode,
                        webAccess: company.WebAccess,
                        webAccessEndDate: company.WebAccessEndDate,
                        affiliations: company.Affiliations,
                        accountManagerId: company.AccountManagerId,
                        accountManager: company.AccountManager
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

module.exports = CompaniesViewModel;
