const path = require("path");
const { v4: uuidv4 } = require("uuid");
const Storage = require("../../services/minio/index");

module.exports = async (req, res) => {
    try {
        let files = req.files;
        if (!files) {
            return res.error("Invalid Field.");
        }
        let uploads = req.files.map((uploaded) => {
            let origin = uploaded.originalname;
            let info = path.parse(origin);
            let fn = uuidv4().toLowerCase();
            if (info.ext && info.ext != "") fn += info.ext;
            return {
                fn,
                origin,
                path: uploaded.path,
                ext: info.ext,
                size: uploaded.size,
            };
        });

        let bucket = await Storage.makeBucket(config.bucket);
        if (!bucket) {
            return res.error("Can not make bucket.");
        }
        let url = [];
        for (let upload of uploads) {
            let fn = await Storage.putItem(bucket, upload.fn, upload.path);
            const fileUrl = config.baseUrl + "/file/" + bucket + "/" + fn;
            url.push(fileUrl);
        }
        return res.ok(url);
    } catch (error) {
        console.log(error);
        return res.serverError(error);
    }
};
