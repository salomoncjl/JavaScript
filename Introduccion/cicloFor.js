const nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Salo', 'Emma'];
// nombres.forEach((nombre) => {
//     console.log(nombre);
// })

/*
    Ciclo for
    Repite un bloque de codigo mientras se cumpla una condicion.
    
    Expresion 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de codigo.
    Expresion 2: Una condicion, mientras se cumpla se ejecutara el bloque de codigo.
    Expresion 3: esta expresion se ejecuta seimrep y despues de que se ejecute el bloque de codigo.
*/

// for(let numero = 1; numero < 11 ; numero++){
//     console.log(numero);
// }
// for(let numero = 0; numero <= 100 ; numero = numero + 5){
//     console.log(numero);
// }
// for(let numero = 50; numero != 0; numero = numero - 1){
//     console.log(numero);
// }
// for(let numero = 0; numero < 6; numero++){
//     console.log(nombres[numero]);
// }
for(let numero = 0; numero < nombres.length; numero++){
    console.log(nombres[numero]);
}