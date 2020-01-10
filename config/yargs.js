const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    default: 10,
    alias: 'l'
  }
};

const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar de un número', opts)
  .command('crear', 'Crea un archivo de texto con la tabla de multiplicar que se le especifique', opts)
  .help()
  .argv;

module.exports = {
  argv
}