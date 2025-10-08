import Joi, { ObjectSchema } from "joi";
import { NewPhoneDTO } from "../protocols/phones";

export const newPhoneSchema: ObjectSchema<NewPhoneDTO> = Joi.object({
  customerId: Joi.number().integer().positive().required(),
  number: Joi.string().pattern(/^\d{10,11}$/).required(),
  carrierId: Joi.number().integer().positive().required()
});
