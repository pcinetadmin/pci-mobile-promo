const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function GroupsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, page, pageSize) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyfilter?filter=" + filter.replace(/ /g, "%20").replace(/‘/g, "'").replace(/’/g, "'") + "&isGroup=Y&page=" + page + "&pageSize=" + pageSize + "&memberOnly=Y",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(group) {
                if (group.CompanyId !== null && group.CompanyId !== 0) {
                    var autoCoSelect;
                    var inclinProfile;

                    if (group.AutoCoSelect === "Y") {
                        autoCoSelect = "Yes";
                    } else {
                        autoCoSelect = "No";
                    }

                    if (group.InclinProfile === "Y") {
                        inclinProfile = "Yes";
                    } else {
                        inclinProfile = "No";
                    }

                    viewModel.push({
                        companyId: group.CompanyId,
                        companyName: group.CompanyName,
                        companyId0: group.CompanyId0,
                        groupId: group.GroupId,
                        groupName: group.GroupName,
                        holdCompanyId: group.HoldCompanyId,
                        holdCompany: group.HoldCompany,
                        mapCompanyId: group.MapCompanyId,
                        mapCompany: group.MapCompany,
                        autoCoSelect: autoCoSelect,
                        inclinProfile: inclinProfile,
                        compRemovedDate: group.CompRemovedDate,
                        numberedAmBest: group.NumberedAmBest,
                        numberedNaic: group.NumberedNaic.toUpperCase(),
                        numberedNaii: group.NumberedNaii,
                        statusCode: group.StatusCode,
                        status: group.Status,
                        companyFoundedDate: group.CompanyFoundedDate,
                        domiciledStateCode: group.DomiciledStateCode,
                        domiciledState: group.DomiciledState,
                        domiciledCountryCode: group.DomiciledCountryCode,
                        domiciledCountry: group.DomiciledCountry,
                        marketingType: group.MarketingType,
                        structure: group.Structure,
                        membershipTypeCode: group.MembershipTypeCode,
                        membershipType: group.MembershipType,
                        isMember: group.IsMember,
                        webAccessCode: group.WebAccessCode,
                        webAccess: group.WebAccess,
                        webAccessEndDate: group.WebAccessEndDate,
                        affiliations: group.Affiliations,
                        accountManagerId: group.AccountManagerId,
                        accountManager: group.AccountManager
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

module.exports = GroupsViewModel;
