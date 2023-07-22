// 1 Forma de importar - Named Imports

// import {nombre as nombreImportado, obtenerPost} from '../src/nameExports';

// //el nombre as nombreImportado es para cambiar el alias, por si se llega a tener una variable con el mismo nombre que el import

// console.log('mi nombre es ' + nombreImportado);
// console.log(obtenerPost());

// 2 Forma de importar - Namespace Imports
// import * as datos from './nameExports'

// console.log(datos.nombre);
// console.log(datos.obtenerPost());

// Default Imports
// import cualquierNombrePongo from './defaultExport'
// console.log(cualquierNombrePongo());

// 3 Forma Empty Imports