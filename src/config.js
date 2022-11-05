const fs = require('fs')
const path = require('path')


const configPath = path.resolve('./config')
const config = {}


// const mkdirs = (dir,  mode =493) => {
//     try {
//         let parts  = path.resolve(dir).split(path.sep)
//         let p = parts[0]
//         for(let i = 1; i < parts.length; i++) {
//             p += path.sep +parts[i];
//             if(!fs.existsSync(p)) fs.mkdirSync(p, mod);
//             else if (!fs.statSync(p).isDirectory) return false;
//         }
//         return p;
//     } catch (error) {
//         return false
//     }
// }

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