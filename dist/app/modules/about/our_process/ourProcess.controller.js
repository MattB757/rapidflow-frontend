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
exports.OurProcessController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../../shared/sendResponse"));
const ourProcess_service_1 = require("./ourProcess.service");
// create our process
const createOurProcess = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ourProcess_service_1.OurProcessService.createOurProcess(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Our Process created successfully !",
        data: result,
    });
}));
// get all our process
const getAllOurProcess = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ourProcess_service_1.OurProcessService.getAllOurProcess();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Our Process retrieved successfully !",
        data: result,
    });
}));
// get single our process
const getSingleOurProcess = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ourProcess_service_1.OurProcessService.getSingleOurProcess(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Our Process retrieved successfully !",
        data: result,
    });
}));
// update our process
const updateOurProcess = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ourProcess_service_1.OurProcessService.updateOurProcess(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Our Process updated successfully !",
        data: result,
    });
}));
// delete our process
const deleteOurProcess = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ourProcess_service_1.OurProcessService.deleteOurProcess(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Our Process deleted successfully !",
        data: result,
    });
}));
exports.OurProcessController = {
    createOurProcess,
    getAllOurProcess,
    getSingleOurProcess,
    updateOurProcess,
    deleteOurProcess,
};
