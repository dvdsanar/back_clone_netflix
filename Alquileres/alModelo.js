const mongoose = require("mongoose");

//Modelo para generar los usuarios de nuestra API, claves y tipo de valor que han de llevar
const Schema = new mongoose.Schema({
  fecha_alquiler: Number,
  fecha_devolucion: Number,
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
  idPelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Peliculas",
    required: true,
  },
});
const Model = mongoose.model("Alquileres", Schema);
module.exports = Model;
