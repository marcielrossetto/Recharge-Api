import Joi from "joi";
import { CreatePhoneInput } from "../protocols/phone";

export const createPhoneSchema: Joi.ObjectSchema<CreatePhoneInput> = Joi.object({
  document: Joi.string()
    .pattern(/^\d{11}$/)
    .required()
    .messages({
      "string.pattern.base": `"document" deve conter exatamente 11 dígitos numéricos`,
      "any.required": `"document" é obrigatório`
    }),

  number: Joi.string()
    .pattern(/^\d{10,11}$/)
    .required()
    .messages({
      "string.pattern.base": `"number" deve conter 10 ou 11 dígitos numéricos`,
      "any.required": `"number" é obrigatório`
    }),

  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.min": `"name" deve ter no mínimo 2 caracteres`,
      "string.max": `"name" deve ter no máximo 100 caracteres`,
      "any.required": `"name" é obrigatório`
    }),

  description: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.min": `"description" não pode ser vazio`,
      "any.required": `"description" é obrigatório`
    }),

  carrier_id: Joi.number()
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
