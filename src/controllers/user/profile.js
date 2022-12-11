// const User =  require('../../models/user.model');
// const {signToken}  = require("../../helper/user-helper");


// module.exports = async( req, res )=>{
//     try {
//         const {id} = req.query ;
//         if( !id) {
//             return res.error("Invalid Fields.")
//         }
//         const user = await User.findOne({id});
//         if(user){
//             return res.ok({user})
//         }
//     } catch (error) {
//         console.log(error)
//         return res.serverError(error);
//     }
// }