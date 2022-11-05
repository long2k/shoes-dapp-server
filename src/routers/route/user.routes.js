const express =  require("express")
const Router = express.Router();


Router.post('/login', require('../../controllers/user/login'))
Router.post('/register', require('../../controllers/user/register'))

module.exports = Router;