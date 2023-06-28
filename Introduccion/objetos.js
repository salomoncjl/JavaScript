// const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];

const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavorito: ['Negro', 'Rojo', 'Azul'],
    saludo: function(){
        alert('Hola!');
    }
}

// console.log(persona);
// console.log(persona['edad']);

const variable = 'correo';

// console.log(persona[variable]);

// console.log(persona.suscripciones.correo);

persona.pais = 'Mexico';
console.log(persona);

persona.saludo()