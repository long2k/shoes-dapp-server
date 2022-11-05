const jwt  = require('jsonwebtoken') ;

const privateKey = 'long2k'

const verifyToken  = (token) =>{
    return new Promise ((reject, resolve)=>{
        return jwt.verify(token , privateKey, (err, decode)=>{
            if (err || !decode) {
                return resolve(null);
            } else {
               return  resolve(decoded);
            }
        })
    })
}
const signToken = (data) => {
    return jwt.sign({user: data}, privateKey,)
    // return new Promise ((reject, resolve)=>{
    //     return jwt.sign({user: data} , privateKey, (err, encode)=>{
    //         if (err || !encode) {
    //             return resolve(null);
    //         } else {
    //            return resolve(encode);
    //         }
    //     })
    // })
}
     

module.exports = {
    verifyToken,
    signToken
}