const sum = require('./../add');


describe('testing string calculator',() => {


    it('adds 2 numbers', () => {
        expect(sum('1,2')).toBe(3);
    });

    it('add numbers even if the number string is empty', () => {
        expect(sum(',2,3')).toBe(5);
    })

    it('add method should handle new line characters (\n) passed with number strings', () => {
        expect(sum('1,2\n,3')).toBe(6);
    })

    it('add method should handle new line characters (\n) passed with empty strings', () => {
        expect(sum('\n,2\n,3')).toBe(5);
    })

});