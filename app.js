//requires
const argv = require('./config/yargs').argv;
// var colors = require('colors');
const colors = require('colors/safe');


// require de una libreria de nodejs y solo la definimos
// const fs = require('fs');
// require de libreria a instalar
// const fs = require('express');
// require de archivos que creamos en el proyecto ./
// const fs = require('./fs');

// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = '5';

// console.log(multiplicar);

//ubicacion del archivo que ese esta utilizando
// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);

// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

//aqui se ven los modulos de mi carpeta del proyecto objeto global
// console.log(module);

// let data = '';

// utilizando for
// for (let i = 1; i < 11; i++) {
//     data += `${ base } * ${ i } = ${ base * i} \n`;
// }

// const data = new Uint8Array(Buffer.from('Hello Node.js'))

// fs.writeFile(file, data[, options], callback)

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
// });