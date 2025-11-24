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
exports.MissionService = void 0;
const prisma_1 = __importDefault(require("../../../../shared/prisma"));
// create mission
const createMission = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // delete old data
        yield tx.mission.deleteMany({});
        const mission = yield tx.mission.create({ data: payload });
        return mission;
    }));
    return result;
});
// get all mission
const getAllMission = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.mission.findMany({});
    return result;
});
// get single mission
const getSingleMission = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.mission.findUnique({ where: { id } });
    return result;
});
// update single mission
const updateSingleMission = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _ignoredId } = payload, updateData = __rest(payload, ["id"]);
    const result = yield prisma_1.default.mission.update({ where: { id }, data: updateData });
    return result;
});
// delete single mission
const deleteSingleMission = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.mission.delete({ where: { id } });
    return result;
});
exports.MissionService = { createMission, getAllMission, getSingleMission, updateSingleMission, deleteSingleMission };
