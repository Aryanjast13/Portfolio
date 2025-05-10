import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import { Request, Response, NextFunction } from "express";
import env from './env';


  cloudinary.config({
    cloud_name:env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,

  });

  const uploadToCloudinary = async (
    buffer: Buffer
  ): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) return reject(error);
          if (result) return resolve(result);
          reject(new Error("Unknown Cloudinary upload error"));
        }
      );

      stream.end(buffer);
    });
  };

export default uploadToCloudinary;