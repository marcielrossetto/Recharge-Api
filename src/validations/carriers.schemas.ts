import Joi from "joi";

export const createCarrierSchema = Joi.object({
  name: Joi.string().required().min(2).max(255),
  code: Joi.number().integer().required() // ✅ Mudou de string para number
});