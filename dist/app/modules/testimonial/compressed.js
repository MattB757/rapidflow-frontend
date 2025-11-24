"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressVideo = compressVideo;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
function compressVideo(inputPath, outputPath, targetSizeMB = 20) {
    return new Promise((resolve, reject) => {
        fluent_ffmpeg_1.default.ffprobe(inputPath, (err, metadata) => {
            if (err)
                return reject(err);
            const duration = metadata.format.duration; // in seconds
            if (!duration)
                return reject(new Error("Could not determine video duration"));
            // Convert target size MB to bits (1 MB = 8,388,608 bits)
            const targetSizeBits = targetSizeMB * 8 * 1024 * 1024; // 20 * 8 * 1024 * 1024
            // Audio bitrate in bits per second
            const audioBitrate = 128 * 1000; // 128 kbps
            // Calculate target total bitrate (video + audio)
            const totalBitrate = targetSizeBits / duration;
            // Calculate target video bitrate
            const videoBitrate = Math.floor(totalBitrate - audioBitrate);
            if (videoBitrate <= 0) {
                return reject(new Error("Video bitrate calculated as <= 0, increase target size or check video duration"));
            }
            (0, fluent_ffmpeg_1.default)(inputPath)
                .videoCodec("libx264")
                .audioCodec("aac")
                .videoBitrate(videoBitrate / 1000) // in kbps
                .audioBitrate(128)
                .outputOptions([
                "-preset veryfast",
                "-movflags +faststart", // for better streaming
                "-pix_fmt yuv420p" // for compatibility
            ])
                .on("end", () => resolve())
                .on("error", (err) => reject(err))
                .save(outputPath);
        });
    });
}
