import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function validate(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(422).send({
        message: "Validation error",
        details: error.details.map(d => d.message)
      });
    }
    req.body = value;
    next();
  };
}
