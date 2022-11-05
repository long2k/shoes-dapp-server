const User =  require('../../models/user.model');
const {signToken}  = require("../../helper/user-helper");


module.exports = async( req, res )=>{
    try {
        const {username, password} = req.body ;
        if( !username || !password ) {
            return res.error("Invalid Fields.")
        }
        const user = await User.findOne({username, password});
        if(user){
            const token =  await signToken(user);
            return res.ok({token, user: user})
        }
    } catch (error) {
        console.log(error)
        return res.serverError(error);
    }
}