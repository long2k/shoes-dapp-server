const express =  require("express")
const multer = require('multer')
const upload = multer({dest: config.tmp})
const Router = express.Router()


Router.post('/upload', upload.array('files', 10), require('../../controllers/upload-file/upload'));
Router.get('/:bucket/:fn', require('../../controllers/upload-file/downloadd'))


module.exports = Router;