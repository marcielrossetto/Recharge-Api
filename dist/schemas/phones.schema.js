"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPhoneSchema = joi_1.default.object({
    document: joi_1.default.string().pattern(/^\d{11}$/).required(),
    number: joi_1.default.string().pattern(/^\d{10,11}$/).required(), // ex: 11971234112
    carrier_id: joi_1.default.number().integer().positive().required(),
    name: joi_1.default.string().min(1).required(),
    description: joi_1.default.string().min(1).required()
});
