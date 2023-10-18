// Sentencia if else
// let condicion = true;

// if (condicion) {
//     console.log('Condicion verdadera');
// } else {
//     console.log('Condicion falsa');
// }

// Ejemplo
let numero = "3";
if (numero == 1) {
    console.log("Numero uno");
} else if (numero == 2){
    console.log("Numero dos");
} else if (numero == 3){
    console.log('Numero tres');
} else if (numero == 4){
    console.log('Numero cuatro');
} else{
    console.log('Numero no encontrado');
}

// Ejemplo 2
let mes = 4;
let estacion;

if ( mes == 12 || mes == 1 || mes == 2 ) {
    estacion = "Invierno";
} else if( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera"
} else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Primavera"
} else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Primavera"
}else{
    estacion = "Valor incorrecto"
}
console.log(estacion);


// Dia de la semana
let diaSemana = 1;

if ( diaSemana == 1) {
    console.log('Lunes');
} else if( diaSemana == 2 ){
    console.log('Martes'); 
} else if( diaSemana == 3 ){
    console.log('Miercoles'); 
} else if( diaSemana == 4 ){
    console.log('Jueves'); 
} else if( diaSemana == 5){
    console.log('Viernes');
} else if( diaSemana == 6){
    console.log('Sabado');
} else if( diaSemana == 7){
    console.log('Domingo');
} else {
    console.log('Dia de semana invalido');
}
console.log(estacion);