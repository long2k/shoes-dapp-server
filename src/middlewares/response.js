module.exports = (req, res, next)=>{
    res.ok = (data) =>{
        return res.status(200).json(data);
    };
    res.error = (message ='Bad Request.', code = 400) => {
        return res.status(code).json({error: {code , message}})
    };
    res.unauthorized = (message = 'Unauthorized', code = 401) => {
        return res.status(code).json({error: {code , message}})
    };
    res.forbiddeb = (message = 'Forbidden', code = 403, detail = undefined) => {
        return res.status(code).json({error: {message, code, detail}})
    };
    res.notFound = (message = 'Not Found.', code = 404, detail = undefined)=> {
        return res.status(code).json({error: {message , code, detail}})
    };
    res.serverError = (message = 'Server error.', code = 500, detail =  undefined) => {
        return res.status(code).json({error: {message, code , detail}})
    }
    return next()
}