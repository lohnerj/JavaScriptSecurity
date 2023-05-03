const crypto = require('crypto');


const secretKey = crypto.randomBytes(32);
console.log(secretKey);