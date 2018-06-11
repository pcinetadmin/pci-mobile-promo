const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var dialogs = require("ui/dialogs");

function MetricsViewModel(items) {
    const viewModel = new ObservableArray(items);

    viewModel.load = function() {
        var data = [
            {"title": "Committee Membership", "navigateTo": "companygroups/companygroup/metrics/committeemembership/committeemembership-page"},
            {"title": "Meeting Attendance", "navigateTo": "companygroups/companygroup/metrics/meetingattendance/meetingattendance-page"}
        ];

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

module.exports = MetricsViewModel;
