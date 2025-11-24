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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FraService = void 0;
const prisma_1 = __importDefault(require("../../../../shared/prisma"));
// create fra
const createFRA = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // delete old data
        yield tx.fra.deleteMany({});
        const fra = yield tx.fra.create({ data: payload });
        return fra;
    }));
    return result;
});
// get all fra
const getAllFRA = () => __awaiter(void 0, void 0, void 0, function* () {
    const fra = yield prisma_1.default.fra.findMany({ orderBy: { createdAt: "desc" } });
    return fra;
});
// get single fra
const getSingleFRA = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const fra = yield prisma_1.default.fra.findUnique({ where: { id } });
    return fra;
});
// update fra
const updateFRA = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _ignoredId } = payload, updateData = __rest(payload, ["id"]);
    const result = yield prisma_1.default.fra.update({
        where: { id },
        data: updateData,
    });
    return result;
});
// delete fra
const deleteFRA = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.fra.delete({ where: { id } });
    return result;
});
exports.FraService = {
    createFRA,
    getAllFRA,
    getSingleFRA,
    updateFRA,
    deleteFRA,
};
