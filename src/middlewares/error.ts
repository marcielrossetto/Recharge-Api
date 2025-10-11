import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err?.status) return res.status(err.status).send({ error: err.message });
  if (err?.code === "23505") return res.status(409).send({ error: "Conflict" }); // unique violation
  console.error(err);
  return res.status(500).send({ error: "Internal Server Error" });
}
