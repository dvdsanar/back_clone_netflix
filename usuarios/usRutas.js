const express = require("express");
const router = express.Router();
const controller = require("./usControlador.js"); //Controlador de Usuarios
const verificacion = require("../configuracion/middleware.js"); //Middleware para la verificacion

//Rutas de todos los verbos de nuestras funciones para los usuarios
router.get("/", controller.traerUsuarios); //Cualquier rol puede acceder al no tener ningún parametro el middleware
//router.get("/:id", controller.traerUsuariosID);
router.post("/", controller.nuevoUsuario); //Solo puede acceder el rol admin
router.patch("/:id", controller.modificarParteUsuario);
router.delete("/:id", controller.borrarUsuario);

router.post("/auth", controller.generarFicha); //Ruta para la generacion del token de acceso

module.exports = router;
