"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastFunction = exports.slowFunction = exports.memoize = void 0;
const memoize = (fn) => {
    const cache = [];
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
};
exports.memoize = memoize;
const slowFunction = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i === num) {
            return i;
        }
    }
};
exports.slowFunction = slowFunction;
exports.fastFunction = (0, exports.memoize)(exports.slowFunction);
