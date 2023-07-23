// href - Retorna la URL de la pagina actual
console.log(window.location.href);// se suele usar

// hostname - Retorna el host de la pagina actual
console.log(location.hostname);

// pathname - Rertorna la ruta y archivo de la pagina actual
console.log(location.pathname); // se suele usar

// protocol - Retorna el protocolo utilizado
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign('https://google.com') // Para redireccionar con un button
}


const regresar = () => {
    history.back() // Llevar al usuario hacia atras
}
const adelantar = () => {
    history.forward() // Llevar al usuario hacia delante
}