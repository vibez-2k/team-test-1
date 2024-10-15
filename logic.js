function generatePassword(length) {
    var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }
    return password;
}
history
console.log(generatePassword(11));
