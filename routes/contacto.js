//importa express
var express = require('express');
//ejecuta
var router = express.Router();
//importa nodemailer
var nodemailer = require('nodemailer');
const { post } = require('./productos');


var title = "Contacto"
let year = new Date().getFullYear()
    //renderiza la vista
router.get('/', function(req, res, next) {
    res.render('contacto.hbs', { title, year: year });
});


router.post('/', (req, res) => {
    //variable para reconocer los la info del imput
    const user = {
            nombre: req.body.nombre,
            email: req.body.email,
            mensaje: req.body.mensaje
        }
        //enviar por nodemailer
    async function main() {
        //importar transporter
        const transporter = require('../config/transporter')

        // Envio, segun la conexion del Transport
        let info = await transporter.sendMail({
            from: `${user.nombre} <${user.email}>`, // sender address
            to: "davidezequielkenny@gmail.com", // list of receivers
            subject: "Nuevo Mensaje", // Subject line
            //text: "Hello world?", // plain text body
            html: `<strong>Nuevo Contacto</strong>
    <p>Nombre: ${user.nombre}</p>
    <p>Email: ${user.email}</p>
    <p>Mensaje: ${user.mensaje}</p>`, // html body
        });
        //console.log("Message sent: %s", info.messageId);
        console.log(info)
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        res.render('enviocontacto', { user, title, year, envio: true })

    }
    //main().catch(res.render("errorcontacto.hbs",{error:"error"}));
    main().catch(console.error)
})







//exporta
module.exports = router;