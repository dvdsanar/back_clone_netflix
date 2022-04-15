const Alquileres = require("./alModelo.js");
const Usuarios = require("../usuarios/usModelo.js");
const Peliculas = require("../peliculas/pelModelo.js");

module.exports.getAlquileres = async (req, res) => {
  res.json(await Alquileres.find({}).populate(["idUsuario", "idPelicula"]));
};

module.exports.getAlquilerIdUsuario = async (req, res) => {
  res.json(
    await Alquileres.find({ idUsuario: req.params.id }).populate([
      "idUsuario",
      "idPelicula",
    ])
  );
};

module.exports.getAlquilerId = async (req, res) => {
  res.json(await Alquileres.findOne({ _id: req.params.id }));
};

module.exports.postAlquiler = async (req, res) => {
  const alquiler = {
    fecha_alquiler: req.body.fecha_alquiler,
    fecha_devolucion: req.body.fecha_devolucion,
    idUsuario: req.body.idUsuario,
    idPelicula: req.body.idPelicula,
  };
  try {
    const postAlquiler = await Alquileres.create(alquiler);
    res
      .status(201)
      .json(await postAlquiler.populate(["idUsuario", "idPelicula"]));
  } catch (error) {
    res.json(error);
  }
};

module.exports.deleteAlquiler = async (req, res) => {
  try {
    if (req.params.id) {
      res.json(await Alquileres.deleteOne({ _id: req.params.id }));
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports.patchAlquiler = async (req, res) => {
  try {
    if (req.params.id) {
      await Alquileres.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json("Alquiler actualizado = " + req.params.id);
    }
  } catch (error) {
    res.json(error);
  }
};
