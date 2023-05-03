const fs = require('fs');

describe('fileContents', () => {
    it('returns the correct contents of the password.txt file', () => {
        // Set up mock data
        const filePath = './password.txt';
        const expectedContents = 'sm.cho@hello.com:123456\n' +
            'john.deacon@good.com:bestpassword\n' +
            'alan.may@best.com:mypassword\n' +
            'henry.taylor@edu.com:educatorbest';

        // Write the expected contents to the file
        fs.writeFileSync(filePath, expectedContents);

        // Read the actual contents of the file
        const actualContents = fs.readFileSync(filePath, 'utf-8');

        // Compare the expected and actual contents
        expect(actualContents).toBe(expectedContents);

        // Clean up the test file
        fs.unlinkSync(filePath);
    });

    it('returns the correct contents of the password.txt file', () => {
        // Set up mock data
        const filePath = './password.enc.txt';
        const expectedContents = 'sm.cho@hello.com:bac6964b8919ba21def79e0759a9f73a\n' +
            'john.deacon@good.com:84a02e12a16e97f899e84f5987e5a135\n' +
            'alan.may@best.com:78a8adc1ce19e06e3f39932d294aae9b\n' +
            'henry.taylor@edu.com:915949a26095ad8f1ef5696dde94b8a0';

        // Write the expected contents to the file
        fs.writeFileSync(filePath, expectedContents);

        // Read the actual contents of the file
        const actualContents = fs.readFileSync(filePath, 'utf-8');

        // Compare the expected and actual contents
        expect(actualContents).toBe(expectedContents);

        // Clean up the test file
        fs.unlinkSync(filePath);
    });
});
