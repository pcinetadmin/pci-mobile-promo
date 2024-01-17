const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function AddressesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "companyaddresses?companyId=" + companyId + "&isGroup=N",
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(address) {
                viewModel.push({
                    mainAddressesId: address.MainAddressesId,
                    companyId: address.CompanyId,
                    companyName: address.CompanyName,
                    companyId0: address.CompanyId0,
                    groupId: address.GroupId,
                    groupName: address.GroupName,
                    streetAddress: address.StreetAddress,
                    suite: address.Suite,
                    city: address.City,
                    stateCode: address.StateCode,
                    countryCode: address.CountryCode,
                    postalCode: address.PostalCode,
                    poBox: address.PoBox,
                    poBoxCityCode: address.PoBoxCityCode,
                    poBoxStateCode: address.PoBoxStateCode,
                    poBoxPostalCode: address.PoBoxPostalCode,
                    primaryAddress: address.PrimaryAddress,
                    phoneNumber: address.PhoneNumber
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

module.exports = AddressesViewModel;
