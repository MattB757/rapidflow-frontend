"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const vision_controller_1 = require("./vision.controller");
const router = express_1.default.Router();
// create vision
router.post("/", vision_controller_1.VisionController.createVision);
// get all vision
router.get("/", vision_controller_1.VisionController.getAllVision);
// get single vision
router.get("/:id", vision_controller_1.VisionController.getSingleVision);
// update vision
router.patch("/:id", vision_controller_1.VisionController.updateSingleVision);
// delete vision
router.delete("/:id", vision_controller_1.VisionController.deleteSingleVision);
exports.visionRoutes = router;
