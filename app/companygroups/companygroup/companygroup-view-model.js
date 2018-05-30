const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function CompanyGroupViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data;

        if (global.isProfileAccounting) {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page"},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page"},
                {"title": "People", "navigateTo": "people/people-page"},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page"},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarks/remarks-page"},
                {"title": "Premiums & Assessments", "navigateTo": "companygroups/companygroup/premiums/premiums-page"},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page"},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page"},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page"},
                {"title": "PAC Eligibility", "navigateTo": "companygroups/companygroup/paceligibility/paceligibility-page"},
                {"title": "Addresses", "navigateTo": "companygroups/companygroup/addresses/addresses-page"}
            ];
        } else {
            data = [
                {"title": "Attributes", "navigateTo": "companygroups/companygroup/attributes/attributes-page"},
                {"title": "Group Membership", "navigateTo": "companygroups/companygroup/hierarchy/hierarchy-page"},
                {"title": "People", "navigateTo": "people/people-page"},
                {"title": "Contacts", "navigateTo": "companygroups/companygroup/contacttypes/contacttypes-page"},
                {"title": "Remarks", "navigateTo": "companygroups/companygroup/remarks/remarks-page"},
                {"title": "Premiums", "navigateTo": "companygroups/companygroup/premiums/premiums-page"},
                {"title": "Committees / Contact Lists", "navigateTo": "companygroups/companygroup/committees/committees-page"},
                {"title": "Meetings", "navigateTo": "companygroups/companygroup/meetings/meetings-page"},
                {"title": "Metrics", "navigateTo": "companygroups/companygroup/metrics/metrics-page"},
                {"title": "PAC Eligibility", "navigateTo": "companygroups/companygroup/paceligibility/paceligibility-page"},
                {"title": "Addresses", "navigateTo": "companygroups/companygroup/addresses/addresses-page"}
            ];
        }

        data.forEach(function(dataItem) {
            viewModel.push({
                title: dataItem.title,
                navigateTo: dataItem.navigateTo
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
