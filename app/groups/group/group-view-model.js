const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function GroupViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data;

        if (global.isProfileAccounting) {
            data = [
                {"title": "Attributes", "navigateTo": "groups/group/attributes/attributes-page"},
                {"title": "Group Membership", "navigateTo": "groups/group/hierarchy/hierarchy-page"},
                {"title": "People", "navigateTo": "groups/group/persons/persons-page"},
                {"title": "Contacts", "navigateTo": "groups/group/contacts/contacts-page"},
                {"title": "Remarks", "navigateTo": "groups/group/remarks/remarks-page"},
                {"title": "Premiums & Assessments", "navigateTo": "groups/group/premiums/premiums-page"},
                {"title": "Committees / Contact Lists", "navigateTo": "groups/group/committees/committees-page"},
                {"title": "Meetings", "navigateTo": "groups/group/meetings/meetings-page"},
                {"title": "Metrics", "navigateTo": "groups/group/metrics/metrics-page"},
                {"title": "PAC Eligibility", "navigateTo": "groups/group/paceligibility/paceligibility-page"},
                {"title": "Addresses", "navigateTo": "groups/group/addresses/addresses-page"}
            ];
        } else {
            data = [
                {"title": "Attributes", "navigateTo": "groups/group/attributes/attributes-page"},
                {"title": "Group Membership", "navigateTo": "groups/group/hierarchy/hierarchy-page"},
                {"title": "People", "navigateTo": "groups/group/persons/persons-page"},
                {"title": "Contacts", "navigateTo": "groups/group/contacts/contacts-page"},
                {"title": "Remarks", "navigateTo": "groups/group/remarks/remarks-page"},
                {"title": "Premiums", "navigateTo": "groups/group/premiums/premiums-page"},
                {"title": "Committees / Contact Lists", "navigateTo": "groups/group/committees/committees-page"},
                {"title": "Meetings", "navigateTo": "groups/group/meetings/meetings-page"},
                {"title": "Metrics", "navigateTo": "groups/group/metrics/metrics-page"},
                {"title": "PAC Eligibility", "navigateTo": "groups/group/paceligibility/paceligibility-page"},
                {"title": "Addresses", "navigateTo": "groups/group/addresses/addresses-page"}
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

module.exports = GroupViewModel;
