const ObservableModule = require("@nativescript/core/data/observable");
var ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
var http = require("@nativescript/core/http");
var dialogs = require("@nativescript/core/ui/dialogs");

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, meetingTypeCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "companymeetings?companyId=" + companyId + "&isGroup=" + isGroup + "&meetingTypeCode=" + meetingTypeCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${global.token}` }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                viewModel.push({
                    companyId: meeting.CompanyId,
                    companyName: meeting.CompanyName,
                    meetingCode: meeting.MeetingCode,
                    meeting: meeting.Meeting
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

module.exports = MeetingsViewModel;
