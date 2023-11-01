// Matrices en JS
// Declaracion de una matriz
let matriz = [[100,200,300],[400, 500, 600]];

// Modificiar valores
// Renglon 0
// matriz[0][0] = 100;
// matriz[0][1] = 200;
// matriz[0][2] = 300;

// Renglon 1
// matriz[1][0] = 400;
// matriz[1][1] = 500;
// matriz[1][2] = 600;

// console.log(matriz);
// console.log(matriz[0]);
// console.log(matriz[1]);
// console.log(matriz[0][2]);

// Iterar matriz en JS
// Nro Renglones
console.log(matriz[0].length);
// Nro Cloumnas
console.log(matriz[1].length);


for(let ren = 0; ren < matriz.length; ren++){
    //Columnas
    for (let columna = 0; columna < matriz[ren].length; columna++) {
        console.log(`Elemento[${ren}][${columna}] = ${matriz[ren][columna]}`);
        
    }
}
