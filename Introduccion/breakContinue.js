/*
    Break
    La sentencia brak nos sirve para salir de bloques de tipo Switch.
    Pero tambien nos sirve para forzar la salida ed un ciclo.
*/
// const nombres = ['Arturo','Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Salo', 'Emma', 'Roberto'];

// for(let i = 0; i < nombres.length; i++){
//     if (nombres[i][0] !== 'A'){
//         console.log('Alto! Hay un nombre que no empieza por al letra A');
//         console.log(nombres[i] + ' No empieza con la letra A');
//         break;
//     }
//     console.log(nombres[i]);
// }

/*
    Continue
    La sentencia continue nos sirve para saltar a la siguiente iteracion.
*/
const invitados = ['Arturo','Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Salo', 'Emma', 'Roberto'];
console.log('Listade personas aceptadas');

for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Salo'){
        continue;
    }
    console.log(invitados[i]);
}

















