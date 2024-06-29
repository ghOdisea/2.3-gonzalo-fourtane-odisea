export const memoize = (fn: Function): Function => {
    const cache: Array<any> = []

    return function(...args:any){
        if (cache[args]){
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result
        return result
    }
}
export const slowFunction = (num: number) => {
    for(let i = 0; i <= num; i++){
        if(i === num ){
            return i
        }
    }
}

export const fastFunction = memoize(slowFunction)

// console.time()
// console.log(slowFunction(500000))
// console.timeEnd()

// console.time()
// console.log(fastFunction(500000))
// console.timeEnd()

// console.time()
// console.log(fastFunction(500000))
// console.timeEnd()


