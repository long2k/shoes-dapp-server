const express =  require("express")
const rabc = require('../../middlewares/rabc')
const Router = express.Router();


Router.post('/login', require('../../controllers/user/login'))
Router.post('/register', require('../../controllers/user/register'))
Router.get('/',rabc(true), require('../../controllers/user/profile'))

module.exports = Router;