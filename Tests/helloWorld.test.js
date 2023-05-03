const helloWorld = require('../helloWorld');

describe('helloWorld', () => {
    it('logs "hello" to the console', () => {
        console.log = jest.fn();
        helloWorld();
        expect(console.log).toHaveBeenCalledWith('hello');
    });

    it('returns true', () => {
        expect(helloWorld()).toBe(true);
    });
});
