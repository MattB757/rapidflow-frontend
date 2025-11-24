"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVideoToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
cloudinary_1.v2.config({
    cloud_name: "dugcllznd",
    api_key: "298919725832732",
    api_secret: "KQbyyHWCgDOc1uhDgWa1Wl-3bsg",
});
const sendVideoToCloudinary = (videoName, path) => {
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload(path, {
            public_id: videoName,
            resource_type: "video", // ⚠️ IMPORTANT for videos
        }, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
            // Delete file regardless of success/failure
            fs_1.default.unlink(path, (err) => {
                if (err) {
                    console.error("File deletion error:", err);
                }
                else {
                    console.log("Temp file deleted");
                }
            });
        });
    });
};
exports.sendVideoToCloudinary = sendVideoToCloudinary;
