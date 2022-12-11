const express = require("express");
const rabc = require("../../middlewares/rabc");
const Router = express.Router();

//Get tx of account id
Router.get("/:id", require("../../controllers/transaction/list"));
//Admin confirm transaction
Router.post(
  "/:id",
  rabc(true),
  require("../../controllers/transaction/confirm")
);

module.exports = Router;
