const User =  require('../../models/user.model');
const {signToken}  = require("../../helper/user-helper");

module.exports= async( req, res )=>{
    try {
        const {username, password, email} = req.body ;
        if( !username || !password || !email) {
            return res.error("Invalid Fields.")
        }
        const newUser = new User({
            username, password, email, isActive: true
        })
        let user = await newUser.save();
        const token = await signToken(user)
        if( newUser && token ){
            const result = {token, user}
            return res.ok(result)
        }
        
    } catch (error) {
        console.log({loi: error})
    }
}