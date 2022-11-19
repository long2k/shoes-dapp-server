const User =  require('../../models/user.model');
const {signToken}  = require("../../helper/user-helper");

module.exports= async( req, res )=>{
    try {
        const {email, password, address, firstName, lastName, wallet } = req.body ;
        if( !password || !email) {
            return res.error("Invalid Fields.")
        }
        const checkEmail = await User.findOne({email});
        if(checkEmail){
            return res.error("Existed Email.")
        }
        const newUser = new User({
            email, password, address, firstName, lastName, wallet
        })
        let user = await newUser.save();
        const token = await signToken(user)
        if( newUser && token ){
            const result = {token, user}
            return res.ok(result)
        }
        
    } catch (error) {
        console.log({"error": error})
    }
}