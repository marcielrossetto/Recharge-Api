import { Request, Response, NextFunction } from "express";


export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
if (err?.type === "conflict") return res.status(409).send({ message: err.message });
if (err?.type === "not_found") return res.status(404).send({ message: err.message });
return res.status(500).send({ message: "Internal Server Error" });
}