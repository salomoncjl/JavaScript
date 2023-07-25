/*
    window.setTimeOut()
    Nos pérmite ejecutar una funcion despues de cierto tiempo.
*/
// Forma 1
// setTimeout(() => {
//         console.log('hola');
// }, 5000)


// Forma 2 
const saludo = () => {
    console.log('Hola! no boton');
};
setTimeout(saludo, 5000)

// Forma con boton
let id;
const iniciar = () => {
    console.log('Iiciando timer');
    let id = setTimeout(saludo, 5000)
};

const parar = () => {
    console.log('Parando timer');
    clearTimeout(id)
}