"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fraRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fra_controller_1 = require("./fra.controller");
const router = express_1.default.Router();
// create fra
router.post("/", fra_controller_1.FraController.createFRA);
// get all fra
router.get("/", fra_controller_1.FraController.getAllFRA);
// get single fra
router.get("/:id", fra_controller_1.FraController.getSingleFRA);
// update fra
router.patch("/:id", fra_controller_1.FraController.updateFRA);
// delete fra
router.delete("/:id", fra_controller_1.FraController.deleteFRA);
exports.fraRoutes = router;
