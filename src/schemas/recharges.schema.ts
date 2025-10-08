import Joi, { ObjectSchema } from "joi";
import { NewRechargeDTO } from "../protocols/recharges";

export const newRechargeSchema: ObjectSchema<NewRechargeDTO> = Joi.object({
  phoneId: Joi.number().integer().positive().required(),
  amount: Joi.number().valid(10, 15, 20, 25, 30, 35, 40, 50).required()
});
