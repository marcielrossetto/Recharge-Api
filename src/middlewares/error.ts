import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

const pgStatus: Record<string, number> = {
  "23505": 409, // unique_violation
  "23503": 422, // foreign_key_violation
  "23502": 422, // not_null_violation
};

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = err?.status ?? pgStatus[err?.code] ?? 500;
  const body = {
    error: err?.message ?? "Internal Server Error",
    code: err?.code,
    detail: err?.detail,
    constraint: err?.constraint,
  };
  console.error("[ERROR]", err); // log completo no terminal
  res.status(status).send(body);
}
