/*
    .length
    Devuelve el numero de caracteres de una cadena de texto.
*/
// const texto = 'Hola yo soy Salomón';

// console.log(texto.length);

/*
    .indexOf() .lastIndexOf()
    Devuelve el index del primer/ultimo carcter especificado.
*/
// const texto1 = 'Hola yo soy Carlos!';
// console.log(texto1.indexOf('o'));
// console.log(texto1.lastIndexOf('o'));

/*
    .slice()
    Devuelve un fragmento de una cadena de texto.
    1er parametro - index desde donde aqueremos cortar.
    2do parametro (opcional) - index hasta donde queremos cortar.
*/
// const texto2 = 'Hola yo soy Alexis anashe!';
// const index = texto2.indexOf('s');
// const lastIndex = texto2.lastIndexOf('s')

// console.log(texto2.slice(index));
// console.log(texto2.slice(index, lastIndex - 3));
// console.log(texto2.slice(12, 18));
// console.log(texto2.slice(-7, -1));

/*
    .replace()
    Devuelve una cadena de texto en donde remplaza un valor por otro.
    1er parametro - el texto que queremos remplazar.
    2do parametro - el texto que queremos poner
*/
// const texto = 'Hola yo soy Alejandro';
// console.log(texto.replace('Alejandro', 'Pedro'));


/*
    .split()
    Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.
    1er paramtro - el caracte que funcionara como separador.
*/
// const texto = 'Hola yo soy Alberto Fuentes!';

// console.log(texto.split(' '));

/*
    .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
const texto = 'Hola yo soy Alberto Fuentes!';
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

