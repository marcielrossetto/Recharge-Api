import Joi from "joi";


export const phoneCreateSchema = Joi.object({
number: Joi.string().pattern(/^\d{11}$/).required(),
name: Joi.string().min(2).required(),
description: Joi.string().min(3).required(),
carrierId: Joi.number().integer().positive().required(),
document: Joi.string().pattern(/^\d{11}$/).required(),
});