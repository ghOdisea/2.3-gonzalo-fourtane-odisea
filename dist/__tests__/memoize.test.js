"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../memoize"));
describe('memoize', () => {
    it('should return true if even', () => {
        expect((0, memoize_1.default)(2).result).toBeTruthy();
    });
    it('should return false if not even', () => {
        expect((0, memoize_1.default)(3).result).toBeFalsy();
    });
    it('should return true if number is repeated', () => {
        (0, memoize_1.default)(3);
        (0, memoize_1.default)(3);
        expect((0, memoize_1.default)(3).repeated).toBeTruthy();
    });
    it('should return false if number is Not repeated', () => {
        expect((0, memoize_1.default)(7).repeated).toBeFalsy();
    });
});
