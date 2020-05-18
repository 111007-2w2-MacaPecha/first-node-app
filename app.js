// let sayHello = (name) => {
//   console.log("Hello " + name);
// };
//
// sayHello("Maka");
const logger = require('./logger'); //esta es la forma de pedir el logger
const path = require('path');
const os = require('os'); //funciones del sistema operativo
const fs = require('fs');

let pathObj = path.parse(__filename);

logger.log('path', pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

// console.log(pathObj);
// console.log('free', freeMem);
// console.log('total', totalMem);
// console.log(logger);

logger.log('free', freeMem);
logger.log('total', totalMem);

let rootDir = fs.readdirSync('./'); //muestra los archivos de esa ruta en forma Sincrona
fs.readdir('./', ((err, files) => { //muestra los archivos de esa ruta en forma Sincrona
  (err) ? console.log(err) : console.log('async' ,files);
}));

console.log('sync' ,rootDir);
