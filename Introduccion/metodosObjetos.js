const usuario = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Alejandro', 'Cesar', 'Mnauel'],
    saludo: () => {
        console.log('Hola!');
    }
};

/*
    Metodos propios
    Los objetos pueden tener metodos personalizados.
*/
// usuario.saludo();

/*
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto.
 */
// console.log(Object.keys(usuario));
// const resulado = Object.keys(usuario)

// console.log(resulado);


/*
    Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto.
*/
// const resulado = Object.values(usuario)


/*
    Object.entries()
    Nos devuelve un arreglo con las aprejas de clave y valor del objeto
*/
const resultado = Object.entries(usuario)

console.log(resultado);

console.log(`El objeto tiene ${resultado.length} propiedades.`);

