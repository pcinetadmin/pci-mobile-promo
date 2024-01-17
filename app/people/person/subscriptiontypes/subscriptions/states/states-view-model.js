const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function StatesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, publicationCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "personsubscriptionstates?personId=" + personId + "&publicationCode=" + publicationCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);
            
            data.forEach(function(subscription) {
                var state;

                if (subscription.State.length === 0) {
                    state = "All States";
                } else {
                    state = subscription.State;
                }

                viewModel.push({
                    personId: subscription.PersonId,
                    fullName: subscription.FullName,
                    subscriptionTypeId: subscription.SubscriptionTypeId,
                    subscriptionType: subscription.SubscriptionType,
                    publicationCode: subscription.PublicationCode,
                    publication: subscription.Publication,
                    stateCode: subscription.StateCode,
                    state: state
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

module.exports = StatesViewModel;
