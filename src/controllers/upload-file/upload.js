const Storage = require('../../services/minio/index');
module.exports = async(req, res)=>{
    try {
        let files = req.files;
        if(!files){
            return res.error('Invalid Field.')
        }
        let uploads = req.files.map(uploaded => {
			let origin = uploaded.originalname;
			let info = path.parse(origin);
			let fn = uuidv4().toLowerCase();
			if (info.ext && info.ext != '') fn += info.ext;
			return {
				fn,
				origin,
				path: uploaded.path,
				ext: info.ext,
				size: uploaded.size
			};
		});
        let bucket = await Storage.makeBucket(BUCKET_NAME);
        if (!bucket) {
			return res.error('Can not make bucket.');
		}
        let url = []
        for (let upload of uploads) {
			let fn = await Storage.putFile(bucket, upload.fn, upload.path);
            fileUrl = config.baseUrl + '/file/' + bucket + '/' + fn
            url.push(fileUrl)
        }
        return res.ok(url)
    } catch (error) {
        return res.serverError(error)
    }
}