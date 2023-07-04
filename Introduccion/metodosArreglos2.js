/*
    .indexOf()
    Obtenemos el primer index de un elemento.
    si no hay elementos nos retorna -1
*/
const nombre = ['Carlos', 'Rafael','Estefania', 'Marcos', 'Rafael', 'Cele'];
// console.log(nombre.indexOf('Marcos'));
// console.log(nombre.indexOf('Salo'));

 /*
    .lastIndexIOf()
    Obtenemos el ultimo index de un elemento.
 */
// console.log(nombre.lastIndexOf('Rafael'));

/*
    .forEach()
    Nos permite ejecutar una funcion por cada elemento
*/
// nombre.forEach((nombre, index) => { //Recorrer un array
//     console.log(`Hola ${nombre} (${index})`); 
// })

/*
    .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos
*/

// const resultados = nombre.find((nombre) => {
//     if (nombre[0] === 'R') {
//         return nombre
//     }
// })
// console.log(resultados);

/*
    .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion.
*/
// const nombresMayusculas = nombre.map((nombre) => {
//     return nombre.toUpperCase();
// });
// console.log(nombresMayusculas); 

/*
    .filter()
    Nos permite ejecutar una funcion por cada elemento y luego crear un arreglo en base a los resultados de esa funcion.
*/
// const nombre4Letras = nombre.filter((nombre) => {
//     if (nombre.length === 4){
//         return nombre;
//     }
// })
// console.log(nombre4Letras);


/*
    .includes()
    Nos permite saber si el arreglo contiene un lemento especificado
*/
// console.log(nombre.includes('Carlos'));


/*
    .every()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplieron la condicion.
*/
// const nombreValidos = nombre.every((nombre) => {
//     if(typeof nombre === 'string'){
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(nombreValidos);

/*
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algun elemento cumplio la condicion.
*/

const nombreValidos = nombre.some((nombre) => {
    if(typeof nombre !== 'string'){
        return true;
    } else {
        return false;
    }
})
console.log(nombreValidos);



