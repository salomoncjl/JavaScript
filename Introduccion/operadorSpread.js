/*
    Operador Spread
    Permite tomar los elementos d eun arreglo u objeto y expandirlos en otro sitio
*/

// const frutas = ['Manzana', 'Pera', 'Piña', 'Melon', 'Uvas'];
// const comidaFavorita = ['Pizza', 'Sushi', ...frutas];

// console.log(comidaFavorita);

// const datosLogin = {
//     nombre: 'Arturo',
//     correo: 'correo@gmail.com',
//     password: '123',
// }
// const usuario = {
//     ...datosLogin, //el orden afecta, osea que sobreecribe
//     nombre: 'Carlos',
//     edad: 27,
// }

// console.log(usuario);


/*
    Parametro Rest
    Permite que una funcion contenga un numero idefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo
*/
// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//     console.log(nombre,correo, datosAdicionales);
// }

// registrarUsuario('Carlos', 'correo@gmail.com');
// registrarUsuario('Alejandro', 'correo@gmail.com', 28, 'España');

/*
    Destructuracion de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardalos en una variable.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(tercerAmigo);

const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'Mexico',
}

const {nombre, pais, edad} = persona;
console.log(nombre, pais);

const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona.nombre,persona.edad);


const mostrarEdad1 = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad1(persona);





