const sum = require('./../index');


describe('testing string calculator',() => {


    it('adds 2 numbers', () => {
        expect(sum('1,2')).toBe(3);
    });

    it('add numbers even if the number string is empty', () => {
        expect(sum(',2,3')).toBe(5);
    })

});