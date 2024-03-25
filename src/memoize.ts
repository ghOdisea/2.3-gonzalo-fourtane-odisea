const prevValues : Array<number> = []

export default function memoize(par_impar : number){

    let resultado: boolean = false  //True: Par, False: Impar
    let repetido: boolean = false   // 

    if(prevValues.includes(par_impar)){
        repetido = true
        return {
            result: resultado,
            repeated: repetido
        }
    }

    if(par_impar % 2 === 0){
        resultado = true
        prevValues.push(par_impar)
    } else {
        resultado = false
        prevValues.push(par_impar)
    }
    
    return {
        result: resultado,
        repeated: repetido
    }

}