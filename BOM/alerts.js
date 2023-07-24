/*
    📌 Alerta
    Para informale al usuario de algo.
*/

// window.alert('hola usuario');
// alert('hola usuario');


/*
    📌 Ventana de confimacion
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/
// const ingresar = () =>{
//     const accesoPermitido = confirm('Eres mayor de edad?');
//     if(accesoPermitido){
//         alert('Bienvenido');
//     } else{
//         alert('No sos mayor')
//     }
// }

/*
    📌 Ventana con input
    Una ventana donde el usuario peude introducir un valor.
    Retorna una cadena de texto con la respuesta del usuario.
*/
const saludar = () => {
    const nombre = prompt('Escribe tu nombre');
    alert(`Bienvenido ${nombre}`)
};