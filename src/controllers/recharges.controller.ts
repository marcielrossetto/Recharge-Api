import { Request, Response } from "express";
import * as rechargesService from "../services/recharges.service";
import { asyncHandler } from "../utils/async";

export const createRecharge = asyncHandler(async (req: Request, res: Response) => {
  const { phone_id, amount } = req.body;
  const created = await rechargesService.createRecharge(Number(phone_id), Number(amount));
  res.status(201).json(created);
});

export const getRecharges = asyncHandler(async (_req: Request, res: Response) => {
  const list = await rechargesService.listRecharges();
  res.json(list);
});
