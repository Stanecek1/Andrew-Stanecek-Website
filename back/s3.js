import aws from 'aws-sdk';
import dotenv from 'dotenv';
import crypto from 'crypto';
import {promisify} from "util";

const randomBytes = promisify(crypto.randomBytes)
dotenv.config();

const region = 'us-east-1';
const bucktName = 'stanecek-website-bucket';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_ID

//create a new awe service object and assign it values
const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateUploadURL(){
    try{
        const rawBytes = await randomBytes(16);
        const imageName = rawBytes.toString('hex');

        const params = ({
            Bucket: bucktName,
            Key: imageName,
            Expires: 60
        })

        const uploadURL = await s3.getSignedUrlPromise('putObject', params);
        return uploadURL;
    }  
    catch(error){
        return error;
    }
}