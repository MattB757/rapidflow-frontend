"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ourProcessRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ourProcess_controller_1 = require("./ourProcess.controller");
const router = express_1.default.Router();
// create our process
router.post("/", ourProcess_controller_1.OurProcessController.createOurProcess);
// get all our process
router.get("/", ourProcess_controller_1.OurProcessController.getAllOurProcess);
// get single our process
router.get("/:id", ourProcess_controller_1.OurProcessController.getSingleOurProcess);
// update our process
router.patch("/:id", ourProcess_controller_1.OurProcessController.updateOurProcess);
// delete our process
router.delete("/:id", ourProcess_controller_1.OurProcessController.deleteOurProcess);
exports.ourProcessRoutes = router;
