"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRechargeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createRechargeSchema = joi_1.default.object({
    phone_id: joi_1.default.number()
        .integer()
        .positive()
        .required()
        .messages({
        "number.base": `"phone_id" deve ser um número`,
        "number.integer": `"phone_id" deve ser um número inteiro`,
        "number.positive": `"phone_id" deve ser positivo`,
        "any.required": `"phone_id" é obrigatório`
    }),
    amount: joi_1.default.number()
        .min(10)
        .max(1000)
        .required()
        .messages({
        "number.base": `"amount" deve ser um número`,
        "number.min": `"amount" deve ser no mínimo 10`,
        "number.max": `"amount" deve ser no máximo 1000`,
        "any.required": `"amount" é obrigatório`
    })
}).options({ abortEarly: false, allowUnknown: false, stripUnknown: true });
