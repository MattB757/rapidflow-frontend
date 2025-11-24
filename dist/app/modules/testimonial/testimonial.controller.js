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
exports.TestimonialController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const testimonial_service_1 = require("./testimonial.service");
// create testimonial
const createTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.createTestimonial(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial created successfully !",
        data: result,
    });
}));
// get title and description
const getTestimonialTitle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.getTestimonialTitle();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial retrieved successfully !",
        data: result,
    });
}));
// get all testimonial
const getAllTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.getAllTestimonial();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial retrieved successfully !",
        data: result,
    });
}));
// get single testimonial
const getSingleTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.getSingleTestimonial(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial retrieved successfully !",
        data: result,
    });
}));
// update title and description
const updateTestimonialTitle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.updateTestimonialTitle(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial updated successfully !",
        data: result,
    });
}));
// update without title and description
const updateTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.updateTestimonial(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial updated successfully !",
        data: result,
    });
}));
// delete title and description
const deleteTestimonialTitle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.deleteTestimonialTitle();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial deleted successfully !",
        data: result,
    });
}));
// delete testimonial
const deleteTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.deleteTestimonial(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Testimonial deleted successfully !",
        data: result,
    });
}));
exports.TestimonialController = {
    createTestimonial,
    getTestimonialTitle,
    getAllTestimonial,
    getSingleTestimonial,
    updateTestimonialTitle,
    updateTestimonial,
    deleteTestimonialTitle,
    deleteTestimonial,
};
