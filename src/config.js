const fs = require('fs')
const path = require('path')


const configPath = path.resolve('./config')
const config = {}

try {
    const fileName = process.env.NODE_ENV === 'product' ? "config.prod.json" : "config.dev.json"
    let jsonFile =  path.resolve(configPath, fileName)
    if(fs.existsSync(jsonFile)){
        let json = fs.readFileSync(jsonFile)
        let data = JSON.parse(json)
        for(let k  in data) {
            config[k] = data[k];
        }
    }
} catch (error) {
    console.log({errorFile: error})
}


module.exports = config