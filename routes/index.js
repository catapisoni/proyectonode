var express = require('express');
var router = express.Router();
let year = new Date().getFullYear()
    //prueba buscar
const Sequelize = require('sequelize');
const db = require('../config/conexion');
const tablaproductos = require('../models/tablaproductos');

/*router.get('/', async(req, res) => {
    const traerProd = await tablaproductos.findAll({
        order: [
            ['id', 'DESC']
        ]
    })

    //res.render('listadoProductos.hbs', { title, year, productos: traerProd })

})*/
const Op = Sequelize.Op;
router.post('/', async(req, res) => {
    const busquedaProd = { nombre: req.body.buscar }
    const traerProd = await tablaproductos.findAll({
        where: {
            nombre: {
                //[Op.like]: '%tosta%'
                [Op.substring]: `${busquedaProd.nombre}`,
            }
        }
    })

    res.render('listadoBuscar.hbs', { /*title,*/ year, productos: traerProd })

})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.hbs', { title: 'Sobre nosotros', year: year });
});

module.exports = router;