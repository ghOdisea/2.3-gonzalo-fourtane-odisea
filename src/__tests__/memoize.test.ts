import { memoize} from "../memoize"

describe('memoize', () => {

    const slowMockFunction = jest.fn((num: number)=>{
        for(let i = 0; i <= num; i++){
            if(i === num ){
                return i
            }
        }
    })
    const fastMockFunction = memoize(slowMockFunction)

    it('should be defined ', () => {
        expect(memoize).toBeDefined()
    })
    it('should be defined', () => {
        expect(slowMockFunction).toBeDefined()
    })
    it('should return', () => {
        slowMockFunction(2000)
        expect(slowMockFunction).toHaveReturned()
    })
    it('should be type function',() => {
        expect(typeof fastMockFunction).toBe('function')
    })
    it('should return correct value', () => {
        expect(fastMockFunction(2000)).toBe(2000)
    })
})