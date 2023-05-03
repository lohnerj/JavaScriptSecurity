const comparePassword = require('../password');

describe('comparePassword', () => {
    it('Acceptance 1', () => {
        const userEmail = 'sm.cho@hello.com';
        const userPass = '123456';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(true);
    });

    it('Acceptance 2', () => {
        const userEmail = 'john.deacon@good.com';
        const userPass = 'bestpassword';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(true);
    });

    it('Acceptance 3', () => {
        const userEmail = 'alan.may@best.com';
        const userPass = 'mypassword';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(true);
    });

    it('Acceptance 4', () => {
        const userEmail = 'henry.taylor@edu.com';
        const userPass = 'educatorbest';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(true);
    });

    it('Acceptance 5', () => {
        const userEmail = 'sm.cho@hello.com';
        const userPass = '1234567';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(false);
    });

    it('Acceptance 6', () => {
        const userEmail = 'henry.taylor@edu.com';
        const userPass = 'educatorbests';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(false);
    });

    it('Acceptance 7', () => {
        const userEmail = 'noname@hello.com';
        const userPass = '1234';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(false);
    });

    it('Acceptance 8', () => {
        const userEmail = 'alan.may@best.com';
        const userPass = '';
        const result = comparePassword(userEmail, userPass);
        expect(result).toBe(false);
    });


});
