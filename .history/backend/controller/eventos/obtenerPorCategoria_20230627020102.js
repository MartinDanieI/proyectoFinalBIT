const { Router } = require("express");
const evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).get(
  "/events/category/:category",
  async (req, res) => {
    try {
      let categoria = req.params.category;

      const eventoEncontrado = await evento.find({ categoria: categoria });
      return res.status(200).json(eventoEncontrado);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Hubo un error en el servidor", error);
    }
  }
);