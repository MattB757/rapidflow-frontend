"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// create faq
const createFaq = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.create({ data: payload });
    return faq;
});
// get all faq
const getAllFaq = () => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.findMany({ orderBy: { createdAt: "desc" } });
    return faq;
});
// get single faq
const getSingleFaq = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.findUnique({ where: { id } });
    return faq;
});
// update faq
const updateFaq = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, question, answer } = payload;
    const faq = yield prisma_1.default.faq.update({
        where: { id },
        data: {
            category,
            question,
            answer,
        },
    });
});
// delete faq
const deleteFaq = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.delete({ where: { id } });
    return faq;
});
exports.FaqService = {
    createFaq,
    getAllFaq,
    getSingleFaq,
    updateFaq,
    deleteFaq,
};
