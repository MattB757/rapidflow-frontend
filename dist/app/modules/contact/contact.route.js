"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
// create home info
router.patch("/", contact_controller_1.contactController.updateContact);
router.get("/", contact_controller_1.contactController.findContract);
router.delete("/:id", contact_controller_1.contactController.deleteContact);
exports.contactRoutes = router;
