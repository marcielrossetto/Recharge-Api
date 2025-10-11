import Joi from "joi";

export const createPhoneSchema = Joi.object({
  document: Joi.string().pattern(/^\d{11}$/).required(),
  number: Joi.string().pattern(/^\d{10,11}$/).required(), // ex: 11971234112
  carrier_id: Joi.number().integer().positive().required(),
  name: Joi.string().min(1).required(),
  description: Joi.string().min(1).required()
});
