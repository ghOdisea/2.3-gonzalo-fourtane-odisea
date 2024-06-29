"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../memoize");
describe('memoize', () => {
    const slowMockFunction = jest.fn((num) => {
        for (let i = 0; i <= num; i++) {
            if (i === num) {
                return i;
            }
        }
    });
    const fastMockFunction = (0, memoize_1.memoize)(slowMockFunction);
    it('should be defined ', () => {
        expect(memoize_1.memoize).toBeDefined();
    });
    it('should be defined', () => {
        expect(slowMockFunction).toBeDefined();
    });
    it('should return', () => {
        slowMockFunction(2000);
        expect(slowMockFunction).toHaveReturned();
    });
    it('should be type function', () => {
        expect(typeof fastMockFunction).toBe('function');
    });
    it('should have return first', () => {
        expect(fastMockFunction(2000)).toBe(2000);
    });
});
