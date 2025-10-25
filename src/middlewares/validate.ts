import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
      convert: true,
    });

    if (!error) {
      req.body = value;
      return next();
    }

    const details = error.details.map(d => ({
      message: d.message.replace(/["]/g, "'"),
      path: d.path.join("."),
      type: d.type,
    }));

    return res.status(422).json({
      error: "ValidationError",
      details,
    });
  };
}
