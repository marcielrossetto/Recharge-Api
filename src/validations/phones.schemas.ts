import Joi from "joi";
import { CreatePhoneInput } from "../protocols/phone";

export const createPhoneSchema = Joi.object<CreatePhoneInput>({
  document: Joi.string().pattern(/^\d{11}$/).required(),
  number: Joi.string().pattern(/^\d{10,11}$/).required(),
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(1).required(),
  carrier_id: Joi.number().integer().positive().required()
});
