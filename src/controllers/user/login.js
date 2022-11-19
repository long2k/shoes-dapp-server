const User =  require('../../models/user.model');
const {signToken}  = require("../../helper/user-helper");


module.exports = async( req, res )=>{
    try {
        const {email, password} = req.body ;
        if( !email || !password ) {
            return res.error("Invalid Fields.")
        }
        const user = await User.findOne({email, password});
        if(user){
            const token =  await signToken(user);
            return res.ok({token, user: user})
        }
    } catch (error) {
        console.log(error)
        return res.serverError(error);
    }
}