import Joi from "joi";

export const createRechargeSchema = Joi.object({
  phone_id: Joi.number().integer().required(),
  value: Joi.number().min(10).max(1000).required()
});
