const { Router } = require("express");
const evento = require("../../models/evento");
const upload = require("../../config/multer")
// const passport = require("passport");

exports.default = Router({ mergeParams: true }).post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    try {
      res.json({ message: "Archivo subido exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  }
);
