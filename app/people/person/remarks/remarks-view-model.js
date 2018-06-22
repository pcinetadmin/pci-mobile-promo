const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function RemarksViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, personId, isExecutive, page, pageSize, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personremarksfilter?filter=" + filter.replace(/ /g, "%20") + "&personId=" + personId + 
                "&isExecutive" + isExecutive + "&page=" + page + "&pageSize=" + pageSize + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remark) {
                if (remark.PersonId !== null) {
                    viewModel.push({
                        remarksId: remark.RemarksId,
                        personId: remark.PersonId,
                        fullName: remark.FullName,
                        creationDate: remark.CreationDate.substring(0, remark.CreationDate.indexOf(" ")),
                        completionDate: remark.CompletionDate.substring(0, remark.CompletionDate.indexOf(" ")),
                        remarkTypeCode: remark.RemarkTypeCode,
                        remarkType: remark.RemarkType,
                        commentAbbreviated: remark.CommentAbbreviated,
                        comment: remark.Comment,
                        userName: remark.UserName,
                        publicPrivate: remark.PublicPrivate,
                        visitDate: remark.VisitDate.substring(0, remark.VisitDate.indexOf(" ")),
                        copyToCompany: remark.CopyToCompany
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

module.exports = RemarksViewModel;
