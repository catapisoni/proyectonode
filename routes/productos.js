var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const db = require('../config/conexion');
const tablaproductos = require('../models/tablaproductos');
var title = "Productos";
let year = new Date().getFullYear()

//GET productos listing.
/*router.get('/', function(req, res, next) {
    res.render('listadoProductos.hbs', { title: title, year: year, productos: productos });
});*/

//consulta a la DB
router.get('/', async(req, res) => {
    const traerProd = await tablaproductos.findAll({
        order: [
            ['id', 'DESC']
        ]
    })

    res.render('listadoProductos.hbs', { title, year, productos: traerProd })

})


router.get('/:id', async(req, res) => {
    //toma lo que devuelve el servidor y lo guarda en paramURL
    let paramURL = req.params.id

    const consultaProd = await tablaproductos.findOne({ where: { id: paramURL } });

    res.render('productoSimple.hbs', { prodSingle: consultaProd, title })
});

//prueba buscador
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

    res.render('listadoBuscar.hbs', { title, year, productos: traerProd })

})



module.exports = router