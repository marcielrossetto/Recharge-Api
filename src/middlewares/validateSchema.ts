import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema<T>(schema: ObjectSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });
    if (error) return next({ status: 422, message: "Validation error", details: error.details });
    req.body = value as T; // body do req agora está tipado
    next();
  };
}
