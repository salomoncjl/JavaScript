// let a = 3, b = 2;
// let z = a + b;
// console.log('El resultado de la suma: ' + z);

// z = a - b;
// console.log('El resultado de la resta: ' +z);

// z = a * b;
// console.log('El resultado de la multiplicacion: ' + z);

// z = a / b;
// console.log('El resultado de la division: ' + z);

// z = a % b;
// console.log('El resultado del resto: ' + z);

// z = a ** b;
// console.log('El resultado de la potencia: ' + z);

// Incremento

// Pre-incremento 
// z = ++a;
// console.log(a);
// console.log(z);

// Post-incremento
// z = b++;
// console.log(b);
// console.log(z);

// Decremento
// Predecremento
// z = --a;
// console.log(a);
// console.log(z);

// // Post-decremento
// z = b--;
// console.log(a);
// console.log(z);

// let a = 3, b = 2, c = 1,d = 4;
// let z = a * b + c / d;
// console.log(z);

// z = c + a * b / d;
// console.log(z);

// z = (c + a) * b / c;
// console.log(z);


// Operador de asignacion
// let a = 1;
// a += 3; // a = a + 3
// console.log(a);

// a -= 2;
// console.log(a);

/*
    *=
    /=
    %=
    **=
*/

// let a = 3, b = 2, c = "3";

// // Revisa si los valores
// let z = a == b;
// console.log(z);

// // Revisa los valores pero tambien los tipos
// z = a === c 
// console.log(z);

// let z = 3 != 4;
// console.log(z);

// z = 3 !== 2;
// console.log(z);

// Mayor y Menor que <>
// z = a < b;
// x = a > b;
// y = a >= b;
// o = a <= b; 
// console.log(z);
// console.log(x);
// console.log(y);
// console.log(o);

// Ejercicio Par o Impar
// let a = 9;

// if( a % 2 == 0){
//     console.log('Es un numero par');
// } else {
//     console.log('Es un numero impar');
// }

// Ejercicio Edad
// let edad = 20, adulto = 18;
// if(edad >= adulto){
//     console.log("Es un adulto");
// } else{
//     console.log("Es menor de edad");
// }

// Operador AND (&&)
// let a = -1;
// let valMin = 0, valMax = 10;

// if( a >= valMin && a <= valMax ){
//     console.log("Dentro de rango");
// } else {
//     console.log("Fuera del rango");
// }

// Operador OR(||)

// let vacaciones = true, diaDescanso = false;

// if ( vacaciones || diaDescanso){
//     console.log('El Padre puede asisitr al juego del hijo');
// } else {
//     console.log('El padre está ocupado');
// }

// Operador Ternario (? !)
// let resultado = ( 1 > 2 ) ? 'Verdadero' : 'Falso'
// console.log(resultado);

// let numero = 9;
// resultado = ( numero % 2 == 0) ? 'Numero Par' : 'Numero impar';
// console.log(resultado);

// // Convertir tipo String a tipo Numero

// let miNumero = '18';

// //console.log(typeof miNumero);

// let edad = Number(miNumero);

// console.log(edad);
// if (isNaN(edad)){
//     console.log('no es un numero');
// } else {
//     if (edad >= 18) {
//         console.log('Puede votar');
//     }else{
//         console.log('Muy joven para votar');
//     }
// }


// // Con operador Ternario
// resultado = edad >= 18 ? 'Puede votar' : 'No puede votar'
// console.log(resultado);

let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);