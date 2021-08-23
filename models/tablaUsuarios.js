const Sequelize = require('sequelize')
const db = require('../config/conexion')

const tablaUsuarios = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: { type: Sequelize.STRING },
    apellido: { type: Sequelize.STRING },
    usuario: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    contraseña: { type: Sequelize.STRING },



});

module.exports = tablaUsuarios