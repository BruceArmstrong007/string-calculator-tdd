const sum = require('./../add');


describe('testing string calculator',() => {


    it('adds 2 numbers', () => {
        expect(sum('1,2')).toBe(3);
    });

    it('add method should add n numbers', () => {
        expect(sum('1,2,3')).toBe(6);
    });

    it('add numbers even if the number string is empty', () => {
        expect(sum(',2,3')).toBe(5);
    })

    it('add numbers even if the number string contains space', () => {
        expect(sum(' ,2,3')).toBe(5);
    })

    it('add method should handle new line characters (\n) passed with number strings', () => {
        expect(sum('1,2\n,3')).toBe(6);
    })

    it('add method should handle new line characters (\n) passed with empty strings', () => {
        expect(sum('\n,2\n,3')).toBe(5);
    })

    it('add method should handle multiple new line characters (\n) passed with empty strings', () => {
        expect(sum('\n\n,2,3')).toBe(5);
    })

    it('add method should handle multiple new line characters (\n) passed with number strings', () => {
        expect(sum('\n,2\n\n,3')).toBe(5);
    });

    it('add method should handle new line characters (\n) passed instead of commas (,)', () => {
        expect(sum('5\n2,3')).toBe(10);
    })


    it('add method should handle new line characters (\n) passed instead of commas (,)', () => {
        expect(sum('5\n2,3')).toBe(10);
    })

    it('add method should add new delimiter (;) instead of comma if string starts with //; and result should be same',() => {
        expect(sum('1,2,3')).toBe(6);
        expect(sum('//;1;2;3')).toBe(6);
    })

    it('add method should not add negative numbers and should return list of negative numbers as an error',()=>{
        expect(sum('1,2,-3')).toBe(3);
        
    })

});