const colores = ['rojo', 'verder', 'azul'];

/*
    .length
    (propiedad) - Nos permite concoer la cantidad de elementos de un array
*/

console.log(colores.length);

/*
    .toString()
    Nos permite tranformar una rreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/
// document.body.innerHTML = colores.toString()

/*
    .join()
    Nos permite transformar un arreglo a una cadena de texto y seprar cada elemento.
*/
console.log(colores.join('- -'));

/*
    .sort()
    Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = [5, 2, 6, 1, 8, 4, 3];
console.log(numeros.sort());

/*
    .reverse ()
    Nos permite ordenar un arreglo de forma descendente.
*/

console.log(letras.reverse());
console.log(numeros.reverse());

/*
    .concat()
    Nos permite juntar dos arreglos en uno solo.
*/
const arreglo1 = [1,2,3];
const arreglo2 = ['A','B','C']
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
    .push()
    Nos permite agregar un elemnto al final de un arreglo.
*/
colores.push('Amarillo')
console.log(colores);

/*
    .pop()
    Nos permite eliminar el ultimo elemento de un arreglo.
*/
colores.pop();

console.log(colores);

/*
    .shift()
    Eliminar el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
// console.log(dias);
// const diasEliminados = dias.shift();
// console.log(diasEliminados);
console.log(dias[0]);

/*
    .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos
*/
dias.unshift('carlos')
console.log(dias);

/*
    .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1ro parametro - Posicion donde queremos comenzar a insertar los elementos.
    - 2do parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada.
    - Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(1, 2, 'Rafael', 'Roberto')
console.log(amigos);
// amigos.splice(1, 0, 'Rafael', 'Roberto')
// console.log(amigos);

const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon']
const frutasFavoritas = frutas.splice(1, 3); //tambien funciona para cortar entre 2 parametros y guardarlo en una variable
console.log(frutasFavoritas);
