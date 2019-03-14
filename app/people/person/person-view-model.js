const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function PersonViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function(hasBio) {
        var data;

        if (global.isProfileEngagement)
        {
            if (hasBio)
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Bio", "navigateTo": "people/person/bio/bio-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"},
                    {"title": "PAC Authorization", "navigateTo": "people/person/pacauthorization/pacauthorization-page"}
                ];
            }
            else
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"},
                    {"title": "PAC Authorization", "navigateTo": "people/person/pacauthorization/pacauthorization-page"}
                ];
            }
        }
        else
        {
            if (hasBio)
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Bio", "navigateTo": "people/person/bio/bio-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"}
                ];
            }
            else
            {
                data = [
                    {"title": "Attributes", "navigateTo": "people/person/attributes/attributes-page"},
                    {"title": "Subscriptions", "navigateTo": "people/person/subscriptiontypes/subscriptiontypes-page"},
                    {"title": "Contact for Companies", "navigateTo": "people/person/contacts/contacts-page"},
                    {"title": "Committees / Contact Lists", "navigateTo": "people/person/committees/committees-page"},
                    {"title": "Meetings", "navigateTo": "people/person/meetings/meetings-page"},
                    {"title": "Remarks", "navigateTo": "people/person/remarks/remarks-page"},
                    {"title": "Web Access", "navigateTo": "people/person/webaccess/webaccess-page"}
                ];
            }
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

module.exports = PersonViewModel;
