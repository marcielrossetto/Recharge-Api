import { NextFunction, Request, Response } from "express";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err?.type === "conflict")   return res.status(409).send({ error: err.message });
  if (err?.type === "not_found")  return res.status(404).send({ error: err.message });
  if (err?.type === "bad_request")return res.status(400).send({ error: err.message });
  console.error(err);
  return res.status(500).send({ error: "Internal Server Error" });
}

export function conflict(message: string)  { return { type: "conflict", message }; }
export function notFound(message: string)  { return { type: "not_found", message }; }
export function badRequest(message: string){ return { type: "bad_request", message }; }
