const express = require("express");
const rabc = require("../../middlewares/rabc");
const Router = express.Router();

Router.post("/login", require("../../controllers/user/login"));
Router.post("/register", require("../../controllers/user/register"));
Router.get("/", rabc(true), require("../../controllers/user/profile"));
Router.get("/dailyreward/:id", require("../../controllers/user/getDailyReward"));
module.exports = Router;
