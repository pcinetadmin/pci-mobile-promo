const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function SubscriptionsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, subscriptionTypeId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personsubscriptions?personId=" + personId + "&subscriptionTypeId=" + subscriptionTypeId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(subscription) {
                viewModel.push({
                    personId: subscription.PersonId,
                    fullName: subscription.FullName,
                    subscriptionTypeId: subscription.SubscriptionTypeId,
                    subscriptionType: subscription.SubscriptionType,
                    publicationCode: subscription.PublicationCode,
                    publication: subscription.Publication
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

module.exports = SubscriptionsViewModel;
