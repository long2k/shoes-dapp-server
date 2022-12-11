const express = require("express");
const rabc = require("../../middlewares/rabc");
const Router = express.Router();

Router.post("/create", rabc(true), require("../../controllers/product/create"));
Router.post("/edit", rabc(true), require("../../controllers/product/edit"));
Router.post("/delete", rabc(true), require("../../controllers/product/delete"));
Router.get("/", require("../../controllers/product/list"));
Router.get("/:id", require("../../controllers/product/detail"));

module.exports = Router;
