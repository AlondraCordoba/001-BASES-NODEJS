//Importacion del paquete de archivo.
const fs = require('fs');
const { resolve } = require('path');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if (!Number(base)) {
            reject('Favor de insertar un numero valido');
            return;
        }

        if (!Number(limite)) {
            reject('Favor de insertar un limite valido');
            return;
        }


        for (let i = 1; i <= limite; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, tabla, (err) => {
            //NOTA tablas/Tabla-${base}conLimite-${limite}.txt
            if (err) {
                reject(err);
            } else {
                resolve(`$tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';
        if (!Number(base)) {
            reject('Favor de insertar un numero valido');
            return;
        }

        if (!Number(limite)) {
            reject('Favor de insertar un limite valido');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}`);
        }


    })
}

module.exports = {
    crearArchivo,
    listarTabla
};