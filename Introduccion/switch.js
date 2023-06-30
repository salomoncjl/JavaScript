const usuario = {
    nombre: 'Carlos',
    pais: 'Peru',

}

switch(usuario.pais){
    case 'Mexico':
        console.log('El usuario es mexicano');
        break
    case 'España':
        console.log('El usuario es Español');
        break
    case 'Argentina':
        console.log('El usuario es Argentino');
        break
    default: console.log('El usuario es de otro pais');
}