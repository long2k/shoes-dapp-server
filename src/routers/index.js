const express =  require('express') 
const Router = express.Router();

Router.use('/user', require('./route/user.routes'))

module.exports =  Router;