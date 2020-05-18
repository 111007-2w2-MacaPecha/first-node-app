// let sayHello = (name) => {
//   console.log("Hello " + name);
// };
//
// sayHello("Maka");
const logger = require('./logger'); //esta es la forma de pedir el logger
const path = require('path');
const os = require('os'); //funciones del sistema operativo
const fs = require('fs');

// let pathObj = path.parse(__filename);
//
// logger.log('path', pathObj);
//
// let freeMem = os.freemem();
// let totalMem = os.totalmem();
//
// console.log(pathObj);
// console.log('free', freeMem);
// console.log('total', totalMem);
// console.log(logger);
//
// logger.log('free', freeMem);
// logger.log('total', totalMem);

// let rootDir = fs.readdirSync('./'); //muestra los archivos de esa ruta en forma Sincrona
// fs.readdir('./', ((err, files) => { //muestra los archivos de esa ruta en forma Sincrona
//   (err) ? console.log(err) : console.log('async' ,files);
// }));
// console.log('sync' ,rootDir);


// 1 - Create a method to get all the files inside a given path
// 2 - Create a method to Print all the files
// 3 - Create a method to sort and print the files
// 4 - Create a method to get the amount of files starting with one letter
function showFiles(path){
  fs.readdir(path, (err, files) => { //muestra los archivos de esa ruta en forma Asincrona
    (err) ? console.log(err) : console.log('1 y 2- showFiles' ,files); // averiguar async await
  });
}
let show = showFiles('C:\\Program Files');

function sortFiles(path){
  fs.readdir(`${path}`, (err, files) => { //muestra los archivos de esa ruta en forma Asincrona
    (err) ? console.log(err) : console.log('3- sortFiles', files.reverse());
  });
}
let sort = sortFiles('C:\\Program Files');

function amountFiles(path, letter){
  let amount=0;
  fs.readdir((path), (err, files) => { //muestra los archivos de esa ruta en forma Asincrona
    if(err) return console.log(err);
      files.forEach( (file) => {
        if(file.substring(0, 1) === letter.toUpperCase()) {
          amount++;
        }
      });
    console.log(`4- ${amount} Files with letter \"${letter}\"`);
  });
}
let amount = amountFiles('C:\\Program Files', 'm');
