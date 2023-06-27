const { Router } = require("express");
const evento = require("../../models/evento");
// const passport = require("passport");

exports.default = Router({ mergeParams: true }).post(
  "/events",
  upload.single("file"),
  //   passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      res.json({ message: "Archivo subido exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  }
);
