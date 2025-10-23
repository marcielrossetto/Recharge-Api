import { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  // normaliza erro
  const status = Number(err?.status) || 500;
  const message =
    (typeof err?.message === "string" && err.message) ||
    (typeof err === "string" && err) ||
    "Internal Server Error";

  // log útil no dev
  if (status >= 500) {
    console.error("[ERROR]", err);
  }

  res.status(status).json({ error: message });
}
