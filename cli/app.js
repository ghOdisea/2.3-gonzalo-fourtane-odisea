import * as readline from 'node:readline';
import memoize from '../dist/memoize.js'

const rl = readline.createInterface(process.stdin, process.stdout);

console.log('- Memoize -')
console.log('Ingrese un numero para saber si es Par o Impar: ')
//El mensaje del prompt esta repetido en un console.log porque no me aparecia el mensaje en el inicio de la app.
rl.setPrompt('Ingrese un numero para saber si es Par o Impar: ');
rl.on('line', (number) => {
    let message = ''
    let repeated = ''
    let par_Impar = memoize(number)
    switch(par_Impar.result){
        case true:
            message = `El numero ${number} es un numero Par`
            if(par_Impar.repeated == false ){
                repeated = `No se ha utilizado el memoize`
            }else{
                repeated = `Se ha utilizado el memoize`
            }
            break
        case false:
            message = `El numero ${number} es un numero Impar`
            if(par_Impar.repeated == false ){
                repeated = `No se ha utilizado el memoize`
            }else{
                repeated = `Se ha utilizado el memoize`
            }
            break
    }
    console.log(message)
    console.log(repeated)
rl.prompt();

rl.on('SIGINT', () => {
    rl.question('Exit (y or n)? ', (input) => {
        if (input.match(/^y(es)?$/i)) { rl.pause(); }
    });
})
})