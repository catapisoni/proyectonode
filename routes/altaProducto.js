var express = require('express');
//const tablaproductos = require('../models/tablaproductos');
var router = express.Router();
const db = require('../config/conexion');
let title = "Ingrese el nuevo producto"
let year = new Date().getFullYear()

router.get('/', (req, res) => {
    res.render('form-altaprod.hbs', { title, year })

})

//Cargar nuevo producto
//llamamos a la tabla conectada a la BD
const tablaProductos = require('../models/tablaproductos')

//posteamos nuevo prod
router.post('/', async(req, res) => {
    const nuevoProd = {
            id: 0,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.body.imagen,
            stock: req.body.stock,
            categoria: req.body.categoria,

        }
        //console.log(nuevoProd)

    try {
        const cargarProd = await tablaProductos.create({
                id: nuevoProd.id,
                nombre: nuevoProd.nombre,
                descripcion: nuevoProd.descripcion,
                precio: nuevoProd.precio,
                imagen: nuevoProd.imagen,
                stock: nuevoProd.stock,
                categoria: nuevoProd.categoria,

            })
            //console.log(cargarProd)
        res.render('form-altaprod.hbs', { title, alta: true, year })
    } catch (error) {
        res.render('form-altaprod.hbs', { title, alta: false, year })
    }

})






module.exports = router;