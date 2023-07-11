/*
    Ciclo forEach
    Es un metodo de los arreglos que podemos usar para recorrer los elementos.
*/
// const amigos = ['Alejando', 'Cesar', 'Manuel'];

// amigos.forEach((amigo, index) => {
//     console.log(`El amigo #${index} es: ${amigo}`);
// });

// amigos.forEach((amigo, index) => console.log(`El amigo #${index} es: ${amigo}`)); //Se puede acordar asi tambien como es una linea de codigo

/*
    Ciclo for in
    Nos permite recorrer las propiedades de un objeto.
*/
// const persona = {
//     nombre: 'Carlos',
//     edad: 27,
//     correo: 'correo@correo.com',
// };

// for(propiedad in persona){
//     persona[propiedad] = '';
// }
// console.log(persona);

/*
    Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Poedemos recorer: Arreglos, Cadenas de texto, mapas y lista de nodos, etc.
*/
const etiquetas = document.head.children;
// console.log(etiquetas);

// for(elemento of etiquetas){
//     console.log(elemento);
// }
// console.log([...etiquetas]);

[...etiquetas].forEach((elemento) => console.log(elemento))