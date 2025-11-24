"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cta_controller_1 = require("./cta.controller");
const router = express_1.default.Router();
// get all cta
router.get("/", cta_controller_1.CtaController.getAllCta);
// get single cta
router.get("/:id", cta_controller_1.CtaController.getSingleCta);
// update cta
router.patch("/:id", cta_controller_1.CtaController.updateCta);
// create cta
router.post("/", cta_controller_1.CtaController.creteCta);
exports.ctaRoutes = router;
