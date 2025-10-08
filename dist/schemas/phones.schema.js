"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPhoneSchema = joi_1.default.object({
    document: joi_1.default.string().pattern(/^\d{11}$/).required(), // CPF
    number: joi_1.default.string().pattern(/^\d{10,11}$/).required(),
    carrier_id: joi_1.default.number().integer().required(),
    // opcionais (ignorados no insert pois sua tabela não tem essas colunas)
    name: joi_1.default.string().optional(),
    description: joi_1.default.string().optional()
});
