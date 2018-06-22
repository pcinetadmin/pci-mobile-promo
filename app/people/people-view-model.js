const observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function PeopleViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(filter, isGroup, page, pageSize, companyId) {
        return http.request({
            url: global.apiBaseServiceUrl + "person/personfilter?filter=" + filter.replace(/ /g, "%20") + "&isGroup=" + isGroup + "&page=" + page + "&pageSize=" + pageSize + "&companyId=" + companyId,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            data.forEach(function(person) {
                if (person.PersonId !== null && person.PersonId !== 0) {
                    var webAccessEndDate;

                    if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                        webAccessEndDate = null;
                    } else {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }

                    viewModel.push({
                        personId: person.PersonId,
                        prefix: person.Prefix,
                        firstName: person.FirstName,
                        middleName: person.MiddleName,
                        lastName: person.LastName,
                        suffix: person.Suffix,
                        fullName: person.FullName,
                        informalSalutation: person.InformalSalutation,
                        title: person.Title,
                        personCompany: person.PersonCompany,
                        companyId: person.CompanyId,
                        companyName: person.CompanyName,
                        companyId0: person.CompanyId0,
                        groupId: person.GroupId,
                        groupName: person.GroupName,
                        webAccessCode: person.WebAccessCode,
                        webAccessGroupType: person.WebAccessGroupType,
                        webAccessEndDate: webAccessEndDate, //person.WebAccessEndDate,
                        webAccessComment: person.WebAccessComment,
                        webAccess: person.WebAccess,
                        webRegistered: person.WebRegistered,
                        logonId: person.LogonId,
                        departmentId: person.DepartmentId,
                        department: person.Department,
                        supervisorId: person.SupervisorId,
                        supervisor: person.Supervisor,
                        ddScopeId: person.DdScopeId,
                        ddScope: person.DdScope,
                        ddFormatId: person.DdFormatId,
                        ddFormat: person.DdFormat,
                        profileReportStatusCode: person.ProfileReportStatusCode,
                        profileReportStatus: person.ProfileReportStatus,
                        profileChangesNeeded: person.ProfileChangesNeeded,
                        profileReportDate: person.ProfileReportDate,
                        lastLicenseAgreeDate: person.LastLicenseAgreeDate,
                        lastPasswordChangeDate: person.LastPasswordChangeDate,
                        mainAddressesId: person.MainAddressesId,
                        streetAddress: person.StreetAddress,
                        address1: person.Address1,
                        address2: person.Address2,
                        city: person.City,
                        stateCode: person.StateCode,
                        state: person.State,
                        postalCode: person.PostalCode,
                        countryCode: person.CountryCode,
                        country: person.Country,
                        poBox: person.PoBox,
                        poBoxCity: person.PoBoxCity,
                        poBoxStateCode: person.PoBoxStateCode,
                        poBoxState: person.PoBoxState,
                        poBoxPostalCode: person.PoBoxPostalCode,
                        emailAddress: person.EmailAddress,
                        workPhone: person.WorkPhone,
                        extension: person.Extension,
                        cellPhone: person.CellPhone,
                        fax: person.Fax,
                        secretaryId: person.SecretaryId,
                        secretary: person.Secretary,
                        secretaryTitle: person.SecretaryTitle,
                        secretaryEmailAddress: person.SecretaryEmailAddress,
                        secretaryWorkPhone: person.SecretaryWorkPhone,
                        secretaryExtension: person.SecretaryExtension,
                        secretaryFax: person.SecretaryFax
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

module.exports = PeopleViewModel;
