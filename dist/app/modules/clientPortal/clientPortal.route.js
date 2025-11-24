"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientPortalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const clientPortal_controller_1 = require("./clientPortal.controller");
const router = express_1.default.Router();
// create client portal info
router.post("/", clientPortal_controller_1.ClientPortalController.createClientPortal);
router.get("/", clientPortal_controller_1.ClientPortalController.findClientPortal);
router.patch("/:id", clientPortal_controller_1.ClientPortalController.updateClientPortal);
router.delete("/:id", clientPortal_controller_1.ClientPortalController.deleteClientPortal);
exports.clientPortalRoutes = router;
