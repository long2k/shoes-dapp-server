const jwt  = require('jsonwebtoken') ;

const privateKey = 'long2k'

const verifyToken  = (token) =>{
    return new Promise ((reject, resolve)=>{
        return jwt.verify(token , privateKey, (err, decode)=>{
            if (err || !decode) {
                return reject(err);
            } else {
               return  resolve(decode);
            }
        })
    })
}
const signToken = (data) => {
    return jwt.sign({user: data}, privateKey)
}
     

module.exports = {
    verifyToken,
    signToken
}