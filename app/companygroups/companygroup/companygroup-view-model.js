var ObservableArray = require("data/observable-array").ObservableArray;

function CompanyGroupViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(isGroup) {
        var data;

        var premiumsTitle;
        var pacAuthorizationNavigateTo;
        var addressesNavigateTo;

        if (global.isProfileAccounting) {
            premiumsTitle = "Premiums & Assessments";
        } else {
            premiumsTitle = "Premiums";
        }

        if (isGroup === "Y") {
            pacAuthorizationNavigateTo = "companygroups/companygroup/companies/companies-page";
            addressesNavigateTo = "companygroups/companygroup/companies/companies-page"; 
        } else {
            pacAuthorizationNavigateTo = "companygroups/companygroup/companies/pacauthorization/pacauthorization-page";
            addressesNavigateTo = "companygroups/companygroup/companies/addresses/addresses-page";
        }

        if (global.isProfileEngagement)
        {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page", "loadData" : ""},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page", "loadData" : ""},
                {"title": "People", "navigateTo": "people/people-page", "loadData" : ""},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page", "loadData" : ""},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarktypes/remarktypes-page", "loadData" : ""},
                {"title": premiumsTitle, "navigateTo": "companygroups/companygroup/premiums/premiums-page", "loadData" : ""},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page", "loadData" : ""},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page", "loadData" : ""},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page", "loadData" : ""},
                {"title": "PAC Authorization", "navigateTo": pacAuthorizationNavigateTo, "loadData" : "pacauthorization"},
                {"title": "Addresses", "navigateTo": addressesNavigateTo, "loadData" : "addresses"}
            ];
        }
        else
        {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page", "loadData" : ""},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page", "loadData" : ""},
                {"title": "People", "navigateTo": "people/people-page", "loadData" : ""},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page", "loadData" : ""},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarktypes/remarktypes-page", "loadData" : ""},
                {"title": premiumsTitle, "navigateTo": "companygroups/companygroup/premiums/premiums-page", "loadData" : ""},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page", "loadData" : ""},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page", "loadData" : ""},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page", "loadData" : ""},
                {"title": "Addresses", "navigateTo": addressesNavigateTo, "loadData" : "addresses"}
            ];
        }

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo,
                loadData: dataItem.loadData
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

module.exports = CompanyGroupViewModel;
