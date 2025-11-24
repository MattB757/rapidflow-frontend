"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
let server;
// Main function to start the server
function main() {
    try {
        server = app_1.default.listen(config_1.default.port, () => {
            console.log("Server is running on port", config_1.default.port);
        });
    }
    catch (error) {
        console.log(error);
    }
}
// Start the server
main();
process.on("unhandledRejection", (err) => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("uncaughtException", () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
});
