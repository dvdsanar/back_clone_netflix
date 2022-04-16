const mongoose = require("mongoose");

//Modelo para generar las peliculas, claves y tipo de valor que han de llevar
const Schema = new mongoose.Schema({
  titulo: String,
  año: Number,
  genero: String,
  actores: String,
  duracion: Number,
  imagen: String,
});
const Model = mongoose.model("Peliculas", Schema);
module.exports = Model;
