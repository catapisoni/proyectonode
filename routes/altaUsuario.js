var express = require('express');
const tablausuarios = require('../models/tablaUsuarios');
var router = express.Router();
const db = require('../config/conexion');
let title = "Registrese"
let year = new Date().getFullYear()

router.get('/', function(request, response) {
    response.render('altaUsuario.hbs', { title: "registrese", year: year })
})

//prueba
router.post('/', async(req, res) => {
    const newUsuario = {
        id: 0,
        nombre: req.body.nombre_usuario,
        apellido: req.body.apellido_usuario,
        email: req.body.email_usuario,
        usuario: req.body.nombre_user,
        pass: req.body.contraseña_usuario,

    }
    console.log(newUsuario)
        //ojo el orden de los campos -> ver la tabla antes
    try {
        const cargarUsuario = await tablausuarios.create({
            id: newUsuario.id,
            nombre: newUsuario.nombre,
            apellido: newUsuario.apellido,
            email: newUsuario.email,
            usuario: newUsuario.usuario,
            contraseña: newUsuario.pass,

        })
        console.log(cargarUsuario)

        res.render('usuarioAprobado.hbs', { newUsuario, year, data: data, title, alta: true })

    } catch (error) {
        console.log("Error en el alta " + error)
        res.render('usuarioAprobado.hbs', { newUsuario, year, alta: false, error })
    }
})


/*
router.get('/', (req, res) => {
    res.render('altaUsuario.hbs', { title });
});*/

module.exports = router;