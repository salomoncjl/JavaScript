'use strict';

// Forma 1 - Palabra export
// export const nombre = 'Carlos';

// export const obtenerPost = () => {
//     return ['Post1', 'Post2', 'Post3']
// }

// Forma 2
const nombre = 'Carlos';

const obtenerPost = () => {
    return ['Post1', 'Post2', 'Post3']
};

// Forma de importar - Named Imports


console.log(nombre);
console.log(obtenerPost());
