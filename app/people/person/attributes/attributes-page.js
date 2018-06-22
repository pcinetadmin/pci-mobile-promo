const observableModule = require("data/observable");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var email = require("nativescript-email");
var phone = require("nativescript-phone");

function onNavigatingTo(args) {
    const page = args.object;
    var navigationContext = page.navigationContext;

    page.actionBar.title = "Attributes";

    page.bindingContext = navigationContext;
}

function onBackTap(args) {
    try {
        frameModule.topmost().goBack();
    } catch(e) {
        dialogs.alert(e);
    }
}

function onPhoneTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onMobileTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onEmailTap(args) {
    try {
        var emailButton = args.object;
        var emailAddress = emailButton.text;

        email.compose({
            to: [emailAddress]
        });
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSecretaryPhoneTap(args) {
    try {
        var phoneButton = args.object;
        var phoneNumber = phoneButton.text;

        phone.dial(phoneNumber, false);
    } catch(e) {
        dialogs.alert(e);
    }
}

function onSecretaryEmailTap(args) {
    try {
        var emailButton = args.object;
        var emailAddress = emailButton.text;

        email.compose({
            to: [emailAddress]
        });
    } catch(e) {
        dialogs.alert(e);
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackTap = onBackTap;
exports.onPhoneTap = onPhoneTap;
exports.onMobileTap = onMobileTap;
exports.onEmailTap = onEmailTap;
exports.onSecretaryPhoneTap = onSecretaryPhoneTap;
exports.onSecretaryEmailTap = onSecretaryEmailTap;
