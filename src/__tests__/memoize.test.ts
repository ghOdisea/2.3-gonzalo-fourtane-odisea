import memoize from "../memoize"

describe('memoize', () => {
    it('should be a defined as a function', () => {
        expect(memoize).toBeDefined
    })
    it('should return true if even', () => {
        expect(memoize(2).result).toBeTruthy()
    })
    it('should return false if not even', () => {
        expect(memoize(3).result).toBeFalsy()
    })
    it('should return true if number is repeated', () => {
        memoize(3)
        memoize(3)
        expect(memoize(3).repeated).toBeTruthy()
    })
    it('should return false if number is Not repeated', () => {
        expect(memoize(7).repeated).toBeFalsy()
    })

})