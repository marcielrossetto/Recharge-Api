import Joi from "joi";
import { CreateRechargeInput } from "../protocols/recharge";

export const createRechargeSchema: Joi.ObjectSchema<CreateRechargeInput> = Joi.object({
  phone_id: Joi.number().integer().positive().required(),
  amount: Joi.number().min(10).max(1000).required(), // <- trocado para amount
});
