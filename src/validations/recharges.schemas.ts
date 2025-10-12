import Joi from "joi";

export const createRechargeSchema = Joi.object({
  phone_id: Joi.number().integer().positive().required(),
  value: Joi.number().min(10).max(1000).required() // Entre R$ 10,00 e R$ 1.000,00
});