const readline = require("readline");
const fs = require('fs');
const crypto = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userEmail;
let userPass;
let check;



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

// Log the decrypted password array to the console
console.log(decryptedPasswordArray);




rl.question("Enter email: ", function(email) {
    rl.question("Enter password: ", function(password) {
        userEmail = email;
        userPass = password;
        check = userEmail + ":" + userPass
        rl.close();
    });
});

//Check password and email.
rl.on("close", function() {
    if (decryptedPasswordArray.includes(check)) {
        console.log("True")
        return decryptedPasswordArray.includes(check);
    } else {
        console.log("False")
        return decryptedPasswordArray.includes(check);
    }



    /*
    console.log(userEmail);
    console.log(userPass);
    process.exit(0); */
});