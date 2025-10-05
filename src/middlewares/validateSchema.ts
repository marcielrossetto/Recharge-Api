import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(422).send({
        message: "Validation failed",
        details: error.details.map(d => d.message),
      });
    }
    next();
  };
}
