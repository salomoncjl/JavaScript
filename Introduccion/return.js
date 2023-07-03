// const operacion = (tipo,numero1, numero2) => {
//     let resultado;

//     if (tipo === 'suma'){
//         resultado = numero1 + numero2;
//     } else if (tipo === 'resta'){
//         resultado = numero1 - numero2;
//     }
//     return resultado;
// };

// const miVariable = operacion('suma', 2, 5)
// console.log(miVariable);

const operacion = (tipo,numero1, numero2) => {
    if (tipo === 'suma'){
        return numero1 + numero2;
    } else if (tipo === 'resta'){
        return numero1 - numero2;
    }
};

const miVariable = operacion('suma', 2, 5)
console.log(miVariable);