import Joi from "joi";

export const createPhoneSchema = Joi.object({
  document: Joi.string().pattern(/^\d{11}$/).required(), // CPF
  number: Joi.string().pattern(/^\d{10,11}$/).required(),
  carrier_id: Joi.number().integer().required(),
  // opcionais (ignorados no insert pois sua tabela não tem essas colunas)
  name: Joi.string().optional(),
  description: Joi.string().optional()
});
