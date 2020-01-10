// Requires
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {
  crearArchivo,
  crearTabla
} = require('./multiplicar/multiplicar');

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch (comando) {

  case 'listar':
    crearTabla(base, limite);
  break;

  case 'crear':
    crearArchivo(base, limite)
      .then(archivo => console.log(`Archivo ${colors.green(archivo)} creado`))
      .catch(err => console.log(err))
  break;

  default:
    console.log('Comando inválido');

}