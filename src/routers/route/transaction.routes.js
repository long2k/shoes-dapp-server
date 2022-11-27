const express =  require("express")
const Router = express.Router();

Router.get('/:id', require('../../controllers/transaction/list'))
Router.post('/:id', require('../../controllers/transaction/confirm'))

module.exports = Router;