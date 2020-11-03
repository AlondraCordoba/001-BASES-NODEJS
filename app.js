// COMENTARIOS (NOTAS Y CODIGO ANTERIOR)
// const { throws } = require('assert');

/*IMPORTACION DEL PAQUETE DE MANIPULACION DE ARCHIVOS */
/* Los imports o requires al principio del codigo --- Como buena practica*/
/* Una constante no cambiara nunca su valor durante su ejecucion, fs (file system)*/

//const fs = require('fs');

/* No declarar variables con VAR */
/* Lenguaje debilmente tipeado*/
// let base = 20; /* Este numero se puede cambiar y por ende tambien cambiara el resultado*/
// let tabla = ''; /* Variable tipo string pero esto estara 'vacio'*/

/* Tabla de multiplicar */
/* CICLO 
for (let i = 1; i <= 10; i++) {
    // console.log(base + " * " + i + " = " + (i * base));
    // ESP ATLGr + tecla]} = ``

    tabla += `${base} * ${i} = ${base * i}\n`;
    // Es lo mismo que tabla = tabla + ...
    // Para agregar espaciado en la tabla(documento) se utilia la diagonal invetida = ALT + 92, seguido de n = \n
    // tabla = tabla + `${base} * ${i} = ${base * i}`;  tabla = ella misma + for(tabla)
    // tabla = Lo que este actualmente en el FOR y nuevamente se sobreescribira tabla = `${base} * ${i} = ${base * i}`;

    // console.log(`${base} * ${i} = ${base * i}`); Lo escribira en CONSOLA

    //document.write("" + base + " X " + i + " = " + (i * base) + "<br>");

    //CORRER LA APP en TERMINAL; Con la palabra reservada node 
    //node (archivo que se quiere correr) + ENTER

    // npm descargar un paquete para que se ejecute automaticamente = nodemon

    //Antes se tiene que preparar el archivo (npm init esto solo se hace una primera vez por proyecto)

    // Instalar un paquete nodemon = npm install nodemon -g --save
    // Comprobar que se instalo correctamente node (archivo que se quiere correr)
    // nodemon app.js, este se ejecuta automaticamente, rs ejecuta (pero no es necesario ya que al guardar se ejeucta automaticamente).
    // CNTRL + C, sales o cancelas nodemon.

    //Error de ejecucion de Scripts
    // Instalamos SASS con el siguiente comando npm install -g sass
     windows powershell(administrador) >  Set-ExecutionPolicy Unrestricted > S 

} */


/* MANDAR LLAMAR AL OBJETO */

// Para acceder a las funciones del mismo se pondra su nombre seguido de un .
// Si es una funcion se debe recordar que se deben agregar ()
// Texto Harcodeado = Texto escrito por nosotros Ejemplo 'Hola Alondra' o 'Soy estudiante de la UTAGS'
/* Primer parametro = 'Como se llama el archivo' el cual se genera en la carpeta RAIZ del proyecto('nombre_del archivo') o se puede    agregar la ruta donde queremos que se guarde ('ruta/nombre_del_archivo'), 
   Segundo parametro = 'Que quiero que contenga mi archivo',
   Tercer parametro = Funcion tipo flecha ((variable dentro de la funcion)=>) = La cual hara o almacenara lo que tendra que hacer en caso de error
   Entre {} contendra lo que hara en caso de un error.
*/
// fs.writeFile('tabla-2.txt', 'Soy estudiante de la UTAGS', (err) => {...}
/*
fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
    // Siempre que se tenga un IF SIN algun OPERADOR esto por DEFAULT es que esta preguntando por un TRUE
    // Siempre que se tenga un IF CON !NOMBRE_DE_LA_VARIABLE por DEFAULT es que esta preguntando por un FALSE*/
// throw o trycatch tronara de una manera 'amigable' y sino lo hara de una manera 'horrible'
// Si el IF esta en una linea se ejecutara tal cual
// False aqui no entra ya que no hubo ERROR 
/*
    if (err == true) throw err; // Se pausa el sistema
    // Si no hubo un error entonces mostrara ese mensaje
    // console.log('El archivo tabla-2.txt ha sido generado con exito') 
    // console.log(`El archivo tabla-${base}.txt ha sido generado con exito`)
    /*Es lo mismo que se realizo pero un poco mas extenso en cuestion de lineas de codigo, siendo que esto es algo 'pequeño'
    if (err == true) {
        throw err;
    }
});*/

//node_modules.
//package-lock.json.
// yargs -- interaccion de la consola para hacer sistema menos cerrado, es decir que se pueda manipular el sistema sin modificar el codigo fuente. 
//  Menú Interactivo con NodeJS
const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
        //JSON ANIDADO EN OTRO JSON.
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];


let base = argv.base
let limite = argv.limite


switch (comando) {
    case 'listar':
        multiplicar.listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error ${error}`));

        break;
    case 'crear':
        multiplicar
            .crearArchivo(base, limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
            .catch(error => console.log(`Ocurrio un error ${error}`));
        break;
    default:
        console.log('Comando no reconocido');
}

//multiplicar
//  .crearArchivo(5)
//  .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
//  .catch(error => console.log(`Ocurrio un error ${error}`));

//  TERMINAL
// LISTAR
/* SIN PARAMETROS
node app listar
Imprime en pantalla la tabla de multiplicar

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -b, --base                                                          [required]
  -l, --limite                                                     [default: 10]

Missing required argument: base
*/
/* CON PARAMETROS
-- solo para los parametros de la funcion. 
BASE
 node app listar --base numero / node app listar -b numero

node app listar --base 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

 LIMITE
node app listar -b 7 -l 5
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
*/

//CREAR
/* PARAMETROS
node app crear --base 7 --limite 5 
El archivo $tabla-7.txt ha sido generado con exito
node app crear -b 
node app crear -b _ -l _
 */