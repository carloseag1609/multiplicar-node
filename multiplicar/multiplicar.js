// requires
const fs = require('fs');
const colors = require('colors');


let crearTabla = (base, limite = 10) => {

  console.log('==========================='.green);
  console.log(`========tabla del ${base}========`.green);
  console.log('==========================='.green);

  for(let i = 1; i <= limite; i++) {
    console.log(`${ base } * ${ i } = ${ base * i }`);
  }

}

let crearArchivo = (base, limite = 10) => {

  return new Promise((resolve, reject) => {

    if(!Number(base)) {
      return reject('La base no es un número');
    }

    let template = '';
    
    for (let i = 1; i <= limite; i++) {
      template += `${ base } * ${ i } = ${ base * i } \n`;
    }
    
    fs.writeFile(`./tablas/tabla-${base}.txt`, template, (err) => {
      if (err) 
        reject(err);
      else 
        resolve(`tabla-${base}.txt`);
    });

  });

}

module.exports = {
  crearArchivo,
  crearTabla
}
