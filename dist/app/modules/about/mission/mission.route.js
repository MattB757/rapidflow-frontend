"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const mission_controller_1 = require("./mission.controller");
const router = express_1.default.Router();
// create mission
router.post("/", mission_controller_1.MissionController.createMission);
// get all mission
router.get("/", mission_controller_1.MissionController.getAllMission);
// get single mission
router.get("/:id", mission_controller_1.MissionController.getSingleMission);
// update mission
router.patch("/:id", mission_controller_1.MissionController.updateSingleMission);
// delete mission
router.delete("/:id", mission_controller_1.MissionController.deleteSingleMission);
exports.missionRoutes = router;
