"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.compressVideo = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const ffmpeg_1 = __importDefault(require("@ffmpeg-installer/ffmpeg"));
fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_1.default.path);
// Create uploads directory if it doesn't exist
const uploadDir = path_1.default.join(process.cwd(), "uploads");
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
// Allowed video types
const allowedMimeTypes = [
    "video/mp4",
    "video/quicktime", // .mov
    "video/webm",
    "video/x-msvideo", // .avi
    "video/x-matroska", // .mkv
    "video/x-flv", // .flv
];
// Multer storage config
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const ext = path_1.default.extname(file.originalname); // preserve original extension
        const uniqueName = `${(0, uuid_1.v4)()}${ext}`;
        cb(null, uniqueName);
    },
});
// Multer file filter
const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error("Only video files are allowed (mp4, mov, webm, avi, mkv, flv)."));
    }
};
// Multer instance
const upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: {
        fileSize: 500 * 1024 * 1024, // 500MB
    },
});
// Middleware for single video upload
const videoUpload = upload.single("video");
// Compress video
const compressVideo = (inputPath) => {
    return new Promise((resolve, reject) => {
        const outputPath = path_1.default.join(uploadDir, `compressed-${(0, uuid_1.v4)()}.mp4`);
        console.log(`Compressing video: ${inputPath} => ${outputPath}`);
        (0, fluent_ffmpeg_1.default)(inputPath)
            .outputOptions([
            "-vcodec libx264",
            "-crf 30", // Increase crf for stronger compression (lower quality)
            "-preset veryfast",
            "-movflags +faststart" // Helps with streaming playback
        ])
            .on("progress", (progress) => {
            if (progress.percent) {
                console.log(`Compression progress: ${progress.percent.toFixed(2)}%`);
            }
        })
            .on("end", () => {
            console.log("Compression finished");
            resolve(outputPath);
        })
            .on("error", (err) => {
            console.error("Compression error:", err);
            reject(err);
        })
            .save(outputPath);
    });
};
exports.compressVideo = compressVideo;
exports.uploadFile = {
    upload,
    videoUpload,
};
