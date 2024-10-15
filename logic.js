function generatePassword(length) {
    var charSet = "ABCDEFGH";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }
    return password;
}

console.log(generatePassword(12));
