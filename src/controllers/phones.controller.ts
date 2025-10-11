import { Request, Response } from "express";

export async function postPhone(req: Request, res: Response) {
  // TODO: validar + salvar no DB
  return res.status(201).send({ ok: true });
}

export async function listPhones(_req: Request, res: Response) {
  // TODO: buscar no DB
  return res.status(200).send([]); // retorna array vazio por enquanto
}
