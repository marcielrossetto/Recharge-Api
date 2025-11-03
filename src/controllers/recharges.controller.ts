import { Request, Response } from "express";
import * as rechargesService from "../services/recharges.service";
import { asyncHandler } from "../utils/async";

// POST /recharges → cria nova recarga
export const createRecharge = asyncHandler(async (req: Request, res: Response) => {
  const { phone_id, amount } = req.body;
  const created = await rechargesService.createRecharge(Number(phone_id), Number(amount));
  res.status(201).json(created);
});

// GET /recharges/:number → lista todas as recargas de um número
export const getRecharges = asyncHandler(async (req: Request, res: Response) => {
  const number = (req.params.number ?? "").replace(/\D/g, "");
  const list = await rechargesService.listByNumber(number);
  res.json(list);
});

// ✅ NOVO: GET /recharges → lista todas as recargas do sistema
export const listAllRecharges = asyncHandler(async (_req: Request, res: Response) => {
  const all = await rechargesService.listRecharges();
  res.json(all);
});
