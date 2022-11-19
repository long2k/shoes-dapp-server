const express =  require('express') 
const Router = express.Router();

Router.use('/user', require('./route/user.routes'))
Router.use('/product', require('./route/product.routes'))
Router.use('/file', require('./route/upload.routes'))

module.exports =  Router;