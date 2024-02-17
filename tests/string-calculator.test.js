describe('testing string calculator',() => {

    beforeEach(() => {
        const sum = require('./../index');
    });

    it('adds 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })


})