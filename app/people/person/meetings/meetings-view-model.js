const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function MeetingsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personmeetings?personId=" + personId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(meeting) {
                if (meeting.PersonId !== null) {
                    var startDate;
                    var endDate;

                    if (meeting.StartDate === null || meeting.StartDate.length === 0) {
                        startDate = null;
                    } else {
                        startDate = meeting.StartDate.substring(0, meeting.StartDate.indexOf(" "));
                    }

                    if (meeting.EndDate === null || meeting.EndDate.length === 0) {
                        endDate = null;
                    } else {
                        endDate = meeting.EndDate.substring(0, meeting.EndDate.indexOf(" "));
                    }

                    viewModel.push({
                        personId: meeting.PersonId,
                        fullName: meeting.FullName,
                        meetingCode: meeting.MeetingCode,
                        meeting: meeting.Meeting,
                        attendanceStatusCode: meeting.AttendanceStatusCode,
                        attendanceStatus: meeting.AttendanceStatus,
                        startDate: startDate,
                        endDate: endDate
                    });
                }
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
