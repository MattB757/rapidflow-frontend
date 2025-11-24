"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendQuoteRoute = void 0;
const express_1 = __importDefault(require("express"));
const sendQuote_controller_1 = require("./sendQuote.controller");
const router = express_1.default.Router();
router.post("/", 
//   validateRequest(SendQuoteValidation.quoteSchema),
sendQuote_controller_1.SendQuoteController.createSendQuote);
exports.sendQuoteRoute = router;
