const ObservableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var http = require("http");
var dialogs = require("ui/dialogs");

function ContactsViewModel(items) {
    const viewModel = new ObservableArray(items);
    
    viewModel.load = function(companyId, isGroup, contactCode) {
        return http.request({
            url: global.apiBaseServiceUrl + "company/companycontacts?companyId=" + companyId + "&isGroup=" + isGroup + "&contactCode=" + contactCode,
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": global.token }
        }).then(function (response) {
            var result = response.content.toString();
            var data = JSON.parse(result);

            var prevCompanyName = "";

            data.forEach(function(person) {
                var showCompanyHeader = false;
                var webAccessEndDate;
                var bio;

                if (prevCompanyName !== person.CompanyName) {
                    showCompanyHeader = true;
                }

                if (person.WebAccessEndDate === null || person.WebAccessEndDate.length === 0) {
                    webAccessEndDate = null;
                } else {
                    var spaceIndex = person.WebAccessEndDate.indexOf(" ");

                    if (spaceIndex === -1)
                    {
                        webAccessEndDate = person.WebAccessEndDate;
                    }
                    else
                    {
                        webAccessEndDate = person.WebAccessEndDate.substring(0, person.WebAccessEndDate.indexOf(" "));
                    }
                }
                
                // The following is necessary, adding space at the end of bio, so it will display properly in the Label with CSS padding.
                if (person.BioPlainText === null || person.BioPlainText.length === 0) {
                    bio = "";
                } else {
                    bio = person.BioPlainText + new Array(Math.round((person.BioPlainText.length) * 0.005)).join("\n");
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
                    webAccessEndDate: webAccessEndDate,
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
                    bio: bio,
                    secretaryId: person.SecretaryId,
                    secretary: person.Secretary,
                    secretaryTitle: person.SecretaryTitle,
                    secretaryEmailAddress: person.SecretaryEmailAddress,
                    secretaryWorkPhone: person.SecretaryWorkPhone,
                    secretaryExtension: person.SecretaryExtension,
                    secretaryFax: person.SecretaryFax,
                    contactCode: person.ContactCode,
                    contactType: person.ContactType,
                    primaryRep: person.PrimaryRep,
                    sortOrder: person.SortOrder,
                    isGroup: isGroup,
                    showCompanyHeader: showCompanyHeader
                });

                prevCompanyName = person.CompanyName;
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
