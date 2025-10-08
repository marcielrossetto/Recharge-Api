"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPhoneSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newPhoneSchema = joi_1.default.object({
    customerId: joi_1.default.number().integer().positive().required(),
    number: joi_1.default.string().pattern(/^\d{10,11}$/).required(),
    carrierId: joi_1.default.number().integer().positive().required()
});
