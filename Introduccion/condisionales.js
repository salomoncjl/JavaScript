// Ejemplo 1:
// const usuario = {
//     edad: 27,
//     pais: 'Mexico',
//     ticket: true,
// };

// if( usuario.edad > 17){
//     console.log('El usuario es mayor de edad y puede entrar');
// } else {
//     console.log('El usuario no es mayor de edad y no podra entrar');
// }

// Ejemplo 2:
// const usuario = {
//     edad: 27,
//     pais: 'Mexico',
//     ticket: false,
// };

// if(usuario.edad > 17 && usuario.ticket ){
//     console.log('El usuario es mayor de edad y tiene ticket, puede entrar');
// } else {
//     console.log('El usuario no es mayor de edad y no podra entrar');
// }

// Ejemplo 3 - Anidando condisionales

// const usuario = {
//     edad: 27,
//     pais: 'Mexico',
//     ticket: false,
// };

// if (usuario.edad >= 18){
//     if (usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene ticket.');
//     } else {
//         console.log('El usuario es mayor de edad, pero no tiene ticket.');
//     }
// } else {
//     console.log('El usuario es menor de edad.');
// }

// Ejemplo 4 - elseif
const usuario = {
    edad: 27,
    pais: 'Argentina',
    ticket: false,
};

if(usuario.pais === 'Mexico'){
    console.log('El usuario es mexicano');
} else if (usuario.pais === 'Colombia'){
    console.log('El usuario es de Colombia');
} else if (usuario.pais === 'Argentina'){
    console.log('El usuario es de Argentina');
} else {
    console.log('El usuario no tiene pais');
}