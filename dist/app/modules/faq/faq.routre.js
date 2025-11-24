"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faq_controller_1 = require("./faq.controller");
const router = express_1.default.Router();
// create faq
router.post("/", faq_controller_1.FaqController.createFaq);
// get all faq
router.get("/", faq_controller_1.FaqController.getAllFaq);
// get single faq
router.get("/:id", faq_controller_1.FaqController.getSingleFaq);
// update faq
router.patch("/:id", faq_controller_1.FaqController.updateFaq);
// delete faq
router.delete("/:id", faq_controller_1.FaqController.deleteFaq);
exports.faqRoutes = router;
