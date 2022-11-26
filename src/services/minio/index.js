const minioClient = require('./minio-cli');

const makeBucket = (bucket)=>{
    return new Promise((resolve, reject) => {
        minioClient.makeBucket(bucket, (err)=>{
            if (err && err.code != 'BucketAlreadyOwnedByYou') resolve(null);
            resolve(bucket)
        })
    })
}

const putItem = (bucket, name, fp) => {
	return new Promise((resolve, reject) => {
		let meta = {'Content-Type': 'application/octet-stream'};
		minioClient.fPutObject(bucket, name, fp, meta, (err, etag) => {
			if (err) return resolve(null);
			return resolve(name);
		});
	});
};



const getItem = (bucket, name) => {
	return new Promise((resolve, reject) => {
		minioClient.getObject(bucket, name, (err, dataStream) => {
			if (err) return resolve(null);
			return resolve(dataStream);
		});
	});
};





module.exports= {
    makeBucket,
    putItem,
    getItem
}