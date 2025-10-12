import Joi from "joi";
import { CreateCarrierInput } from "../protocols/carrier";

export const createCarrierSchema = Joi.object<CreateCarrierInput>({
  name: Joi.string().min(2).max(255).required(),
  code: Joi.number().integer().positive().required()
});
