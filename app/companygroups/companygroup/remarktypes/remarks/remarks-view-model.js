const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function ContactsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, companyId, isGroup, isExecutive, page, pageSize, remarkTypeCode, creatorId) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companyremarksfilter?filter=" + filter.replace(/ /g, "%20") + "&companyId=" + companyId + 
                "&isGroup=" + isGroup + "&isExecutive" + isExecutive + "&page=" + page + "&pageSize=" + pageSize + 
                "&remarkTypeCode=" + remarkTypeCode + "&creatorId=" + creatorId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(remark) {
                viewModel.push({
                    remarksId: remark.RemarksId,
                    companyId: remark.CompanyId,
                    companyName: remark.CompanyName,
                    companyId0: remark.CompanyId0,
                    groupId: remark.GroupId,
                    groupName: remark.GroupName,
                    creationDate: remark.CreationDate.substring(0, remark.CreationDate.indexOf(" ")),
                    completionDate: remark.CompletionDate.substring(0, remark.CompletionDate.indexOf(" ")),
                    remarkTypeCode: remark.RemarkTypeCode,
                    remarkType: remark.RemarkType,
                    commentAbbreviated: remark.CommentAbbreviated,
                    comment: remark.Comment,
                    userName: remark.UserName,
                    publicPrivate: remark.PublicPrivate,
                    visitDate: remark.VisitDate.substring(0, remark.VisitDate.indexOf(" "))
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

module.exports = ContactsViewModel;
