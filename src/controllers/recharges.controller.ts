import { Request, Response } from "express";

export async function createRecharge(req: Request, res: Response) {
  // TODO: validar, checar phone_id e salvar no DB
  return res.status(201).send({ ok: true });
}

export async function listRecharges(req: Request, res: Response) {
  // TODO: se houver query ?phone_id= filtrar no DB
  return res.status(200).send([]); // por enquanto
}
