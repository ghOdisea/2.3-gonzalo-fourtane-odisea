const prevValues = [];
export default function memoize(par_impar) {
    let resultado = false; //True: Par, False: Impar
    let repetido = false; // 
    if (prevValues.includes(par_impar)) {
        repetido = true;
        return {
            result: resultado,
            repeated: repetido
        };
    }
    if (par_impar % 2 === 0) {
        resultado = true;
        prevValues.push(par_impar);
    }
    else {
        resultado = false;
        prevValues.push(par_impar);
    }
    return {
        result: resultado,
        repeated: repetido
    };
}
