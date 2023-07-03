/*  Local Scope o variables locales
    - Son las variables declaradas dentro de una funcion.
    - solo podemos acceder a ellas desde dentro de la funcion.
*/

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var functionAnidada = () => {
        console.log(numero);
    }
    functionAnidada()
}

obtenerNumeroLetras('Salomón');

// console.log(numero); //No deja porque no esta la variable fuera de la funcion