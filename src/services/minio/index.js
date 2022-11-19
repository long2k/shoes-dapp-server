const minioClient = require('./minio-cli');

const makeBucket = (bucket)=>{
    return new Promise((resolve, reject) => {
        minioClient.makeBucket(bucket, (err)=>{
            if(err) {
                console.log("error:", err)
                resolve(null)
            }
            resolve(bucket)
        })
    })
}

const putItem = (filename, bucket)=>{
    return new Promise((resolve, reject) => {
        minioClient.fPutObject(bucket,filename,  function(err, etag){
            if(err) return resolve(err)
            return resolve(filename)
        })
    })
}

const getItem = (bucket, filename) =>{
    return new Promise((resolve, reject) => {
        minioClient.fGetObject(bucket, filename, function(err){
            if(err) {
                console.log(err)
                return resolve(null)
            }
            return resolve(null)
        })
    })
}


module.exports= {
    makeBucket,
    putItem,
    getItem
}