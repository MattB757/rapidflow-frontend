"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialService = void 0;
const fs_1 = __importDefault(require("fs"));
// import path from "path";
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const fileUploader_1 = require("../../../helpars/fileUploader");
const uuid_1 = require("uuid");
const sendImageToCloudinary_1 = require("../../../utils/sendImageToCloudinary");
const ApiErrors_1 = __importDefault(require("../../../errors/ApiErrors"));
const http_status_1 = __importDefault(require("http-status"));
// import path from "path";
// import { compressVideo } from "./compressed";
// create testimonial
const createTestimonial = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, text, name, rating } = req.body;
    const file = req.file;
    // Validate required fields
    if (!title || !description || !text || !name || !rating || !file) {
        throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, "All fields are required");
    }
    // Upload video to Cloudinary
    const uploadResult = yield (0, sendImageToCloudinary_1.sendVideoToCloudinary)(`video-${(0, uuid_1.v4)()}`, file.path);
    const videoUrl = uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.secure_url;
    if (!videoUrl) {
        throw new ApiErrors_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Video upload failed");
    }
    // Save testimonial to database
    const testimonial = yield prisma_1.default.testimonial.create({
        data: {
            title,
            description,
            text,
            name,
            rating: parseInt(rating),
            videoUrl,
        },
    });
    return testimonial;
});
// get title and description
const getTestimonialTitle = () => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield prisma_1.default.testimonial.findFirst({
        select: {
            title: true,
            description: true,
        },
    });
    return testimonial;
});
// get all testimonial
const getAllTestimonial = () => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield prisma_1.default.testimonial.findMany({
        select: {
            id: true,
            text: true,
            name: true,
            rating: true,
            videoUrl: true,
        },
    });
    return testimonial;
});
// get single testimonial
const getSingleTestimonial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield prisma_1.default.testimonial.findUnique({ where: { id } });
    return testimonial;
});
// update title and description
const updateTestimonialTitle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield prisma_1.default.testimonial.updateMany({
        data: {
            title: payload.title,
            description: payload.description,
        },
    });
    return updated;
});
// update without title and description
const updateTestimonial = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, name, rating } = req.body;
    const { id } = req.params;
    const file = req.file;
    if (!id) {
        throw new ApiErrors_1.default(http_status_1.default.BAD_REQUEST, "Testimonial ID is required");
    }
    const updateData = {};
    if (text !== undefined)
        updateData.text = text;
    if (name !== undefined)
        updateData.name = name;
    if (rating !== undefined)
        updateData.rating = parseInt(rating, 10);
    if (file) {
        let videoPath = file.path;
        let shouldDeleteOriginal = false;
        // Compress if over 100MB
        const sizeInMB = file.size / (1024 * 1024);
        if (sizeInMB > 100) {
            videoPath = yield (0, fileUploader_1.compressVideo)(file.path);
            shouldDeleteOriginal = true; // মূল ফাইল ডিলিট করতে হবে
        }
        // Upload to Cloudinary
        const uploadResult = yield (0, sendImageToCloudinary_1.sendVideoToCloudinary)(`video-${(0, uuid_1.v4)()}`, videoPath);
        // Delete the correct file
        if (shouldDeleteOriginal)
            fs_1.default.unlinkSync(file.path); // মূল ভিডিও ডিলিট
        if (videoPath !== file.path)
            fs_1.default.unlinkSync(videoPath); // compress ভিডিও ডিলিট
        if (!(uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.secure_url)) {
            throw new ApiErrors_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Video upload failed");
        }
        updateData.videoUrl = uploadResult.secure_url;
    }
    // Update testimonial
    const updatedTestimonial = yield prisma_1.default.testimonial.update({
        where: { id },
        data: updateData,
    });
    return updatedTestimonial;
});
// delete title and description
const deleteTestimonialTitle = () => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield prisma_1.default.testimonial.deleteMany({});
    return testimonial;
});
// delete testimonial
const deleteTestimonial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield prisma_1.default.testimonial.delete({ where: { id } });
    return testimonial;
});
exports.TestimonialService = {
    createTestimonial,
    getTestimonialTitle,
    getAllTestimonial,
    getSingleTestimonial,
    updateTestimonialTitle,
    updateTestimonial,
    deleteTestimonialTitle,
    deleteTestimonial,
};
