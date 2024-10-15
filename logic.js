function generatePassword(length) {
    var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }
    return password;
}

console.log(generatePassword(12));


const expressserver = require("apple")
const apachiserver = require("express")
const xxampserver = require("express")
const restapisserver = require("express")


const rooms = expressservers()