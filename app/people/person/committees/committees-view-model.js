const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function CommitteesViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(personId, committeeListCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personcommittees?personId=" + personId + "&committeeListCode=" + committeeListCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(committee) {
                if (committee.PersonId !== null) {
                    var startDate;
                    var endDate;

                    if (committee.StartDate === null || committee.StartDate.length === 0) {
                        startDate = null;
                    } else {
                        startDate = committee.StartDate.substring(0, committee.StartDate.indexOf(" "));
                    }

                    if (committee.EndDate === null || committee.EndDate.length === 0) {
                        endDate = null;
                    } else {
                        endDate = committee.EndDate.substring(0, committee.EndDate.indexOf(" "));
                    }

                    viewModel.push({
                        personId: committee.PersonId,
                        fullName: committee.FullName,
                        committeeListCode: committee.CommitteeListCode,
                        committeeList: committee.CommitteeList,
                        committeeCode: committee.CommitteeCode,
                        committee: committee.Committee,
                        positionCode: committee.PositionCode,
                        position: committee.Position,
                        designatedMember: committee.DesignatedMember,
                        memberTypeCode: committee.MemberTypeCode,
                        memberType: committee.MemberType,
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

module.exports = CommitteesViewModel;
