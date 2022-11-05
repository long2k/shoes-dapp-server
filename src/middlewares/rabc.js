module.exports = (require = true) => {
    return  async(req, res, next)=>{
        try {
            const token = req.headers.authorization || req.headers.Authorization
            const data = token ? verify() : null;
            if(data) req.user = data
            if(!data || !token){
                return res.unauthorized()
            }
        } catch (error) {
            console.log("error:", error)
            return res.serverError(error.message)
        }
        return next()
    }
}
