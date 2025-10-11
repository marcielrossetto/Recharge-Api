"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRechargeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createRechargeSchema = joi_1.default.object({
    phone_id: joi_1.default.number().integer().positive().required(),
    value: joi_1.default.number().precision(2).min(10).max(1000).required(),
    paid_with: joi_1.default.string().valid("CREDIT_CARD", "PIX", "CASH").required()
});
