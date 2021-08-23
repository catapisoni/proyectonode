/*const Sequelize = require('sequelize');
//conexion DB
const db = requiere('../config/conexion')


//definir tabla de bd a consumir
const tablaproductos = db.define('productos', {
    id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    precio: { type: Sequelize.DECIMAL },
    imagen: { type: Sequelize.STRING },
    stock: { type: Sequelize.INTERGER },
    categoria: { type: Sequelize.STRING },

})




module.exports = tablaproductos*/


const Sequelize = require('sequelize')
const db = require('../config/conexion')

//Definimos la tabla la cual vamos a consumir
const tablaProductos = db.define('productos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: { type: Sequelize.STRING },
    descripcion: { type: Sequelize.TEXT },
    precio: { type: Sequelize.DECIMAL },
    imagen: { type: Sequelize.STRING },
    stock: { type: Sequelize.INTEGER },
    categoria: { type: Sequelize.STRING },


});

module.exports = tablaProductos