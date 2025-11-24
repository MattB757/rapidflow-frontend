"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
exports.corsOptions = {
    // origin: ["http://localhost:3000", "http://localhost:3001"],
    origin: [
        "https://rapidflowfulfillment.com",
        "https://www.rapidflowfulfillment.com",
        "https://matthew-frontend.vercel.app",
        "https://matthew-dashboard.vercel.app",
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
app.use(body_parser_1.default.json({
    verify: function (req, res, buf) {
        req.rawBody = buf;
    },
}));
// app.use(bodyParser.json());
// Middleware setup
app.use((0, cors_1.default)(exports.corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// app.use(bodyParser.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
// Route handler for the root endpoint
app.get("/", (req, res) => {
    res.send({
        message: "How's Project API",
    });
});
// app.use("/uploads", express.static(path.join("/var/www/uploads")));
app.use("/uploads", express_1.default.static(path_1.default.join(process.cwd(), "uploads"))); // Serve static files from the "uploads" directory
// Setup API routes
app.use("/api/v1", routes_1.default);
// Error handling middleware
app.use(globalErrorHandler_1.default);
// 404 Not Found handler
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!",
        },
    });
});
exports.default = app;
// import express, { Application, NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import bodyParser from "body-parser";
// import router from "./app/routes";
// import GlobalErrorHandler from "./app/middlewares/globalErrorHandler";
// import { handleStripeWebhook } from "./app/modules/subscriptions/subscriptions.controller";
// const app: Application = express();
// // CORS config
// export const corsOptions = {
//   origin: ["http://localhost:3000", "http://localhost:3001"],
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };
// // 👉 Webhook route - must be defined BEFORE express.json()
// app.post(
//   "/webhooks",
//   express.raw({ type: "application/json" }), // must use raw body
//   handleStripeWebhook
// );
// // ✅ Middleware setup
// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json()); // only used after webhook
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
// // ✅ Root route
// app.get("/", (req: Request, res: Response) => {
//   res.send({
//     message: "How's Project API",
//   });
// });
// // ✅ Static uploads
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
// // ✅ API routes
// app.use("/api/v1", router);
// // ✅ Global error handler
// app.use(GlobalErrorHandler);
// // ✅ 404 Handler
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "API NOT FOUND!",
//     error: {
//       path: req.originalUrl,
//       message: "Your requested path is not found!",
//     },
//   });
// });
// export default app;
