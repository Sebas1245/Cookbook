const   aws = require('aws-sdk'), 
        crypto = require('crypto'), 
        { promisify } = require('util'),
        service = {};

const randomBytes = promisify(crypto.randomBytes)

const region = process.env.AWS_REGION;
const bucketName ="cookbook-files";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey, 
    signatureVersion: 'v4'
});

service.generateUploadURL = async function generateUploadURL() {
    // add a security layer to the generation of image name by generating
    // random bytes that turn into the image name
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex')
    const params = ({
        Bucket: bucketName,
        Key: imageName, 
        Expires: 60
    })
    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL;
}

module.exports = service;