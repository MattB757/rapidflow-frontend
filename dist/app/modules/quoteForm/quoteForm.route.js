"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteFormRoute = void 0;
const express_1 = __importDefault(require("express"));
const quoteForm_controller_1 = require("./quoteForm.controller");
const router = express_1.default.Router();
// create quote form
router.post("/", quoteForm_controller_1.QuoteFormController.createQuoteForm);
// get all
router.get("/", quoteForm_controller_1.QuoteFormController.getAll);
// update
router.patch("/:id", quoteForm_controller_1.QuoteFormController.update);
exports.quoteFormRoute = router;
