const express = require("express");
const router = express.Router();
const controller = require("./pelControlador.js"); //Controlador de peliculas importado
const verificacion = require("../configuracion/middleware.js"); //Middleware para la verificacion

//Rutas de todos los verbos de nuestras funciones para las peliculas
router.get("/", controller.traerPeliculas); //Cualquier rol puede acceder al no tener ningún parametro el middleware
router.get("/todas", controller.todasPeliculas);
router.get("/:id", controller.traerPeliculasFiltros);
router.post("/", controller.nuevaPelicula); //Solo puede acceder el rol admin
router.patch("/:id", controller.modificarPelicula);
router.delete("/:id", controller.borrarPelicula);

module.exports = router;
