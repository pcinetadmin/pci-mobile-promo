const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function ContactsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "personcontacts?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            var prevContactType = "";

            data.forEach(function(contact) {
                var showContactHeader = false;

                if (prevContactType !== contact.ContactType && contact.ContactType !== null) {
                    showContactHeader = true;
                }

                viewModel.push({
                    personId: contact.PersonId,
                    fullName: contact.FullName,
                    companyId: contact.CompanyId,
                    companyName: contact.CompanyName,
                    companyId0: contact.CompanyId0,
                    groupId: contact.GroupId,
                    groupName: contact.GroupName,
                    contactCode: contact.ContactCode,
                    contactType: contact.ContactType,
                    primaryRep: contact.PrimaryRep,
                    sortOrder: contact.SortOrder,
                    showContactHeader: showContactHeader
                });

                prevContactType = contact.ContactType;
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

module.exports = ContactsViewModel;
