"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRechargeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newRechargeSchema = joi_1.default.object({
    phoneId: joi_1.default.number().integer().positive().required(),
    amount: joi_1.default.number().valid(10, 15, 20, 25, 30, 35, 40, 50).required()
});
