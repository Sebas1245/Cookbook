const   Recipe = require('../../models/Recipe'),
        Comment = require('../../models/Comment'),
        awsS3Utils = require('../../services/s3')
        ctr = {};

ctr.getSecureS3Url = () => async (req, res, next) => {
    const url = await awsS3Utils.generateUploadURL();
    res.status(200).json({url});
}

module.exports = ctr;