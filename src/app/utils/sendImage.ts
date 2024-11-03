// Package Imports
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

// Configuration
cloudinary.config({
  cloud_name: "deicntkum",
  api_key: "574865974657636",
  api_secret: "o4s1ddwiFrryZifQSwr3wrJWsZk",
});

export const sendImageToCloudinary = async (image: string) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(image);
    return uploadResult;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary.");
  }
};

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

export default upload;
