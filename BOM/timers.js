/*
    📌 window.setTimeOut()
    Nos pérmite ejecutar una funcion despues de cierto tiempo.
*/
// 🤯 Forma 1
// setTimeout(() => {
//         console.log('hola');
// }, 5000)


// 🤯 Forma 2 
// const saludo = () => {
//     console.log('Hola! no boton');
// };
// setTimeout(saludo, 5000)

// 🤯 Forma con boton
// let id;
// const iniciar = () => {
//     console.log('Iiciando timer');
//     id = setTimeout(saludo, 5000);
// };

// const parar = () => {
//     console.log('Parando timer');
//     clearTimeout(id);
// }

/*
    📌 window.setInterval()
    Nos permite ejecutar una funcion cada cierto tiempo.
*/
//
let cuenta = 0;
let id

const iniciar = () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++
    }, 1000);
}

const parar = () => {
    console.log('Paramos la cuenta');
    clearInterval(id)
}

