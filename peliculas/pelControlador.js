const Peliculas = require("./pelModelo.js"); //Modelo de peliculas importado

// función para mostar las peliculas por titulo, genero, actores o todas las que tenemos en la BD
module.exports.traerPeliculas = async (req, res) => {
  try {
    const queryMovie = {};

    if (req.query.titulo) queryMovie.titulo = req.query.titulo;
    if (req.query.año) queryMovie.año = req.query.año;
    if (req.query.genero) queryMovie.genero = req.query.genero;
    if (req.query.actores) queryMovie.actores = req.query.actores;
    if (req.query.duracion) queryMovie.duracion = req.query.duracion;
    res.json(await Peliculas.find(queryMovie));
    console.log(req.query.titulo + "req query", req.query);
  } catch (error) {
    res.json(error);
  }
};

//Fucnión para mostrar las películas por su id único
module.exports.traerPeliculasFiltros = async (req, res) => {
  try {
    res.json(await Peliculas.findOne({ _id: req.params.id }));
  } catch (error) {
    res.json(error);
  }
};
module.exports.todasPeliculas = async (req, res) => {
  try {
    res.json(await Peliculas.find({}));
  } catch (error) {
    res.json(error);
  }
};

//Función para crear una nueva película
module.exports.nuevaPelicula = async (req, res) => {
  try {
    const pelicula = new Peliculas(req.body);
    await pelicula.save();
    res.json(pelicula);
  } catch (error) {
    res.json(error);
  }
};

//Función para modificar una o varias de las claves de la película
module.exports.modificarPelicula = async (req, res) => {
  try {
    await Peliculas.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Pelicula modificada");
  } catch (error) {
    res.json(error);
  }
};

//Función para borrar una pelicula a traves de su id
module.exports.borrarPelicula = async (req, res) => {
  try {
    await Peliculas.deleteOne({ _id: req.params.id });
    res.json("Película eliminada");
  } catch (error) {
    res.json(error);
  }
};
