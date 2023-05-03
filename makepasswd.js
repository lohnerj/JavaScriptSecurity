const fs = require('fs');
const crypto = require('crypto');

// Read from password.txt
const passwordData = fs.readFileSync('password.txt', 'utf-8');
const passwordArray = passwordData.split(/\r?\n/);
// Split the data into an array of email:password strings


// Encrypt the password part of each email:password string
const encryptedPasswordArray = passwordArray.map((passwordString) => {
    const [email, password] = passwordString.split(':');
    const cipher = crypto.createCipher('aes-256-cbc', 'mySecretKey');
    let encryptedPassword = cipher.update(password, 'utf-8', 'hex');
    encryptedPassword += cipher.final('hex');
    return `${email}:${encryptedPassword}`;
});

// Write the encrypted information to password.enc.txt
fs.writeFileSync('password.enc.txt', encryptedPasswordArray.join('\n'));

