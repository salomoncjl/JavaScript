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
const usuario = {
    edad: 27,
    pais: 'Mexico',
    ticket: false,
};

if(usuario.edad > 17 && usuario.ticket == true){
    console.log('El usuario es mayor de edad y tiene ticket, puede entrar');
} else {
    console.log('El usuario no es mayor de edad y no podra entrar');
}