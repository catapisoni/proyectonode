var express = require('express');
var router = express.Router();
let title = "Ingrese a su cuenta"
let year = new Date().getFullYear()

/* GET productos listing. */
router.get('/', function(req, res, next) {
    res.render('ingreso.hbs', { title, year });
});


/*router.get('/', (req, res) => {
    res.render('altaUsuario.hbs', { title });
});*/

module.exports = router;