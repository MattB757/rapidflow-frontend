"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const home_controller_1 = require("./home.controller");
const router = express_1.default.Router();
// create home info
router.post("/", home_controller_1.HomeController.createHomeInfo);
// get all home info
router.get("/", home_controller_1.HomeController.getAllHomeInfo);
// get single home info
router.get("/:id", home_controller_1.HomeController.getSingleHomeInfo);
// update home info
router.patch("/:id", home_controller_1.HomeController.updateHomeInfo);
// delete home info
router.delete("/:id", home_controller_1.HomeController.deleteHomeInfo);
exports.homeRoutes = router;
