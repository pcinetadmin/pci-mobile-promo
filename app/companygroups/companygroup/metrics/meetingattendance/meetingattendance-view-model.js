const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function MeetingAttendanceViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companymetricmeetings?companyId=" + companyId + "&isGroup=" + isGroup,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(company) {
                viewModel.push({
                    companyId: company.CompanyId,
                    companyName: company.CompanyName,
                    year: company.Year,
                    meetingCount: company.MeetingCount,
                    attendeeCount: company.AttendeeCount
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

module.exports = MeetingAttendanceViewModel;
