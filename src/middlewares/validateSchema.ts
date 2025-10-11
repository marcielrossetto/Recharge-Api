import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export default function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(422).send({
        error: "validation_error",
        details: error.details.map(d => d.message)
      });
    }
    req.body = value;
    next();
  };
}
