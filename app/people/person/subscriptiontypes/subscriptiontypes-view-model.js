const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function SubscriptionTypesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "personsubscriptiontypes?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(subscriptionType) {
                viewModel.push({
                    personId: subscriptionType.PersonId,
                    fullName: subscriptionType.FullName,
                    subscriptionTypeId: subscriptionType.SubscriptionTypeId,
                    subscriptionType: subscriptionType.SubscriptionType
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

module.exports = SubscriptionTypesViewModel;
