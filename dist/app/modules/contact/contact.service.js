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
exports.ContactService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const mongodb_1 = require("mongodb");
const updateContactIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (payload.id && mongodb_1.ObjectId.isValid(payload.id)) {
            const existing = yield prisma_1.default.contact.findUnique({
                where: { id: payload.id },
            });
            if (existing) {
                return yield prisma_1.default.contact.update({
                    where: { id: payload.id },
                    data: {
                        location: payload.location,
                        email: payload.email,
                        phone: payload.phone,
                        socialmedia: payload.socialmedia,
                    },
                });
            }
        }
        const { id } = payload, createData = __rest(payload, ["id"]);
        return yield prisma_1.default.contact.create({
            data: createData,
        });
    }
    catch (error) {
        console.error("Error in updateContactIntoDb:", error);
        throw error;
    }
});
const findContractIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.contact.findMany({});
    }
    catch (error) {
        console.error("Error in findContract:", error);
        throw error;
    }
});
/*************  ✨ Windsurf Command 🌟  *************/
/**
 * Deletes a contact from the database
 * @param id - The ID of the contact to delete
 * @returns The deleted contact
 */
const deleteContactIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.contact.delete({ where: { id } });
    }
    catch (error) {
        console.error("Error in deleteContact:", error);
        throw error;
    }
});
exports.ContactService = {
    updateContactIntoDb,
    findContractIntoDb,
    deleteContactIntoDb,
};
