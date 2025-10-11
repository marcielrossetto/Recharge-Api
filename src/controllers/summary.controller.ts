import { Request, Response } from "express";

export async function getSummary(_req: Request, res: Response) {
  // TODO: agregar por carrier no DB
  return res.status(200).send([]); // por enquanto
}
