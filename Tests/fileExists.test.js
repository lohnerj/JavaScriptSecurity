//Unit test for the makepasswd.js file checking to see if they password.enc.txt file exists, and if the password.txt file exists
const fs = require('fs');

describe('fileExists', () => {
    it('returns true if password.txt exists', () => {
        // Set up mock data
        const filePath = './password.txt';

        // Call the function and check the result
        const result = fs.existsSync(filePath);
        expect(result).toBe(true);
    });

    it('returns true password.enc.txt exists', () => {
        // Set up mock data
        const filePath = './password.enc.txt';

        // Call the function and check the result
        const result = fs.existsSync(filePath);
        expect(result).toBe(true);
    });


});
