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
exports.SendQuoteService = void 0;
const config_1 = __importDefault(require("../../../config"));
const emailSender_1 = __importDefault(require("../../../helpars/emailSender"));
const createSendQuote = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, phone, company, website, serviceType, customService, budget, } = payload;
    const subject = "New Quote Request from Rapid Flow";
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(to right, #dc2626, #b91c1c);
          color: white;
          padding: 20px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          font-weight: bold;
          margin-bottom: 5px;
          color: #b91c1c;
        }
        .field {
          margin-bottom: 10px;
        }
        .field-name {
          font-weight: bold;
        }
        .field-value {
          margin-left: 10px;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        td:first-child {
          font-weight: bold;
          width: 40%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>A new quote request has been submitted through your website</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Client Information</div>
            <table>
              <tr>
                <td>Name:</td>
                <td>${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${phone}</td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>${company}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>${website || "Not provided"}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Project Details</div>
            <table>
              <tr>
                <td>Service Type:</td>
                <td>${serviceType}</td>
              </tr>
              <tr>
                <td>Custom Solution(Others):</td>
                <td>${customService ? customService : ""}</td>
              </tr>
              <tr>
                <td>Monthly Order Volume:</td>
                <td>${budget}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <p>Please respond to this client within 24 hours to discuss their project requirements.</p>
            <p><a href="mailto:${email}" style="color: #b91c1c; text-decoration: none; font-weight: bold;">Reply to ${firstName}</a></p>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated message from your Rapid Flow Fulfillment Services website.</p>
          <p>&copy; ${new Date().getFullYear()} Rapid Flow Fulfillment Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
    yield (0, emailSender_1.default)(subject, config_1.default.emailSender.email, html);
    return { sent: true };
});
exports.SendQuoteService = {
    createSendQuote,
};
