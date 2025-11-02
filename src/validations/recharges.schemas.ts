import Joi from "joi";
import { CreateRechargeInput } from "../protocols/recharge";

export const createRechargeSchema: Joi.ObjectSchema<CreateRechargeInput> = Joi.object({
  phone_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": `"phone_id" deve ser um número`,
      "number.integer": `"phone_id" deve ser um número inteiro`,
      "number.positive": `"phone_id" deve ser positivo`,
      "any.required": `"phone_id" é obrigatório`
    }),

  amount: Joi.number()
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
