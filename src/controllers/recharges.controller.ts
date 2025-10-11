import { Request, Response } from "express";
import * as service from "../services/recharges.service";

export async function createRecharge(req: Request, res: Response) {
  try {
    const created = await service.createRecharge(req.body);
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({ error: err?.message ?? "Erro interno" });
  }
}

export async function listRecharges(_req: Request, res: Response) {
  try {
    const list = await service.listRecharges();
    return res.status(200).json(list);
  } catch (e: any) {
    console.error("GET /recharges error:", e); // <— ajuda a ver a causa real
    return res.status(500).json({ error: "Erro ao listar recargas" });
  }
}

