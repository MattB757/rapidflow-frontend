"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    env: process.env.NODE_ENV,
    frontend_url: process.env.FRONTEND_URL,
    backend_base_url: process.env.BACKEND_IMAGE_URL,
    port: process.env.PORT,
    emailSender: {
        email: process.env.EMAIL,
        app_pass: process.env.APP_PASS,
        contact_mail_address: process.env.CONTACT_MAIL_ADDRESS,
    },
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
};
