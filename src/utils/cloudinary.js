import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUNDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

const uploadOnCloudinary= async (localFilePath)=>{
try{
    if(!localFilePath) return null; //agar path hi nahi hai to

    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto"
    });

    //file upload hogyi
    console.log("file has been uploaded ", response.url);
    return response;
}
catch(error){
    fs.unlinkSync(localFilePath);
    return null;
}
}

export {uploadOnCloudinary}