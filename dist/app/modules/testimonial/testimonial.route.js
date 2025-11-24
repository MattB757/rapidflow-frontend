"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const testimonial_controller_1 = require("./testimonial.controller");
const fileUploader_1 = require("../../../helpars/fileUploader");
const parseNestedJson_1 = require("../../middlewares/parseNestedJson");
const router = express_1.default.Router();
// create testimonial
router.post("/", fileUploader_1.uploadFile.videoUpload, parseNestedJson_1.parseBodyData, testimonial_controller_1.TestimonialController.createTestimonial);
// get title and description
router.get("/title", testimonial_controller_1.TestimonialController.getTestimonialTitle);
// get all testimonial
router.get("/", testimonial_controller_1.TestimonialController.getAllTestimonial);
// get single testimonial
router.get("/:id", testimonial_controller_1.TestimonialController.getSingleTestimonial);
// update title and description
router.patch("/title", testimonial_controller_1.TestimonialController.updateTestimonialTitle);
// update without title and description
router.patch("/:id", fileUploader_1.uploadFile.videoUpload, parseNestedJson_1.parseBodyData, testimonial_controller_1.TestimonialController.updateTestimonial);
// delete title and description
router.delete("/title", testimonial_controller_1.TestimonialController.deleteTestimonialTitle);
// delete testimonial
router.delete("/:id", testimonial_controller_1.TestimonialController.deleteTestimonial);
exports.testimonialRoutes = router;
