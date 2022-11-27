const express =  require("express")
const Router = express.Router();


Router.post('/create', require('../../controllers/product/create'))
Router.post('/edit', require('../../controllers/product/edit'))
Router.post('/delete', require('../../controllers/product/delete'))
Router.get('/', require('../../controllers/product/list'))
Router.get('/:id', require('../../controllers/product/detail'))


module.exports = Router;