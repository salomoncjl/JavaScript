/*
    static
    Me permite definir propeidades y metodos para acceder a ellos sin tener que definir nuevos objetos
*/

class Usuario {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borar(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado`);
    }

    static registrados = 1000;
}

// const usuario = new Usuario ('Salo', 'correo@gmail.com');
// console.log();
// usuario.borar(1);

Usuario.borar(44);
console.log(Usuario.registrados);