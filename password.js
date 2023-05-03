const readline = require("readline");
const fs = require('fs');
const crypto = require('crypto');



function comparePassword(userEmail, userPass) {
    let check = userEmail + ":" + userPass
// Read from password.enc.txt
    const encryptedPasswordData = fs.readFileSync('password.enc.txt', 'utf-8');

// Split the encrypted data into an array of email:encrypted_password strings
    const encryptedPasswordArray = encryptedPasswordData.split('\n');

// Decrypt the password part of each email:encrypted_password string
    const decryptedPasswordArray = encryptedPasswordArray.map((encryptedPasswordString) => {
        const [email, encryptedPassword] = encryptedPasswordString.split(':');
        const decipher = crypto.createDecipher('aes-256-cbc', 'mySecretKey');
        let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf-8');
        decryptedPassword += decipher.final('utf-8');
        return `${email}:${decryptedPassword}`;
    });




        if (decryptedPasswordArray.includes(check)) {
            console.log("True")
            return decryptedPasswordArray.includes(check);
        } else {
            console.log("False")
            return decryptedPasswordArray.includes(check);
        }




}

module.exports = comparePassword;