"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPhoneSchema = joi_1.default.object({
    document: joi_1.default.string()
        .pattern(/^\d{11}$/)
        .required()
        .messages({
        "string.pattern.base": `"document" deve conter exatamente 11 dígitos numéricos`,
        "any.required": `"document" é obrigatório`
    }),
    number: joi_1.default.string()
        .pattern(/^\d{10,11}$/)
        .required()
        .messages({
        "string.pattern.base": `"number" deve conter 10 ou 11 dígitos numéricos`,
        "any.required": `"number" é obrigatório`
    }),
    name: joi_1.default.string()
        .min(2)
        .max(100)
        .required()
        .messages({
        "string.min": `"name" deve ter no mínimo 2 caracteres`,
        "string.max": `"name" deve ter no máximo 100 caracteres`,
        "any.required": `"name" é obrigatório`
    }),
    description: joi_1.default.string()
        .min(1)
        .required()
        .messages({
        "string.min": `"description" não pode ser vazio`,
        "any.required": `"description" é obrigatório`
    }),
    carrier_id: joi_1.default.number()
        .integer()
        .positive()
        .required()
        .messages({
        "number.base": `"carrier_id" deve ser um número`,
        "number.integer": `"carrier_id" deve ser um número inteiro`,
        "number.positive": `"carrier_id" deve ser positivo`,
        "any.required": `"carrier_id" é obrigatório`
    })
}).options({ abortEarly: false, allowUnknown: false, stripUnknown: true });
