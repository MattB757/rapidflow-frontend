"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendQuoteValidation = void 0;
const zod_1 = require("zod");
const quoteSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    phone: zod_1.z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number"),
    company: zod_1.z.string().min(1, "Company is required"),
    serviceType: zod_1.z.string().min(1, "Service type is required"),
    budget: zod_1.z.string().min(1, "Budget is required"),
    website: zod_1.z.string().url("Invalid website URL").optional(),
    customService: zod_1.z.string().optional(),
});
exports.SendQuoteValidation = {
    quoteSchema,
};
