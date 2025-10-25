import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const status = Number(err?.status) || 500;
  const message =
    typeof err?.message === "string"
      ? err.message
      : typeof err === "string"
      ? err
      : JSON.stringify(err);

  if (status >= 500) console.error("[ERROR]", err);

  res.status(status).json({ error: message });
}
