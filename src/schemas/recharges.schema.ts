import Joi from "joi";

export const createRechargeSchema = Joi.object({
  phone_id: Joi.number().integer().positive().required(),
  value: Joi.number().precision(2).min(10).max(1000).required(),
  paid_with: Joi.string().valid("CREDIT_CARD", "PIX", "CASH").required()
});
