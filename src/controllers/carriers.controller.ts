import { Request, Response } from "express";
import * as service from "../services/carriers.service";

export async function getCarriers(_req: Request, res: Response) {
  const rows = await service.listAll();
  return res.json(rows);
}

export async function postCarrier(req: Request, res: Response) {
  try {
    const { name, code } = req.body;
    if (!name || typeof code !== "number")
      return res.status(422).json({ error: "name e code são obrigatórios" });

    const created = await service.createCarrier(name, code);
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({ error: err?.message ?? "Erro interno" });
  }
}
