const express = require("express");
const router = express.Router();
const controller = require("./alController.js");

router.get("/", controller.getAlquileres);
router.get("/:id", controller.getAlquilerIdUsuario);
router.get("/alquiler/:id", controller.getAlquilerId);
router.post("/", controller.postAlquiler);
router.patch("/:id", controller.patchAlquiler);
router.delete("/:id", controller.deleteAlquiler);

module.exports = router;
