const express = require("express");
const router = express.Router();
const controller = require("./alController.js");

router.get("/", controller.getAlquileres);
router.get("/usuario", controller.getAlquilerIdUsuario);
router.post("/", controller.postAlquiler);
router.patch("/:id", controller.patchAlquiler);
router.delete("/:id", controller.deleteAlquiler);

module.exports.router;
