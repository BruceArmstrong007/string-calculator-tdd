const sum = require('./../index');


describe('testing string calculator',() => {


    it('adds 2 numbers', () => {
        expect(sum('1,2')).toBe(3)
    });


})