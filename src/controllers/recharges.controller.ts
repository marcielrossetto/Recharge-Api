import { Request, Response, NextFunction } from "express";
import * as service from "../services/recharges.service";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { phone_id, value } = req.body;
    const recharge = await service.createRecharge(phone_id, value);
    res.status(201).send(recharge);
  } catch (err) { next(err); }
}

export async function listByNumber(req: Request, res: Response, next: NextFunction) {
  try {
    const { number } = req.params;
    const rows = await service.listByNumber(number);
    res.send(rows);
  } catch (err) { next(err); }
}
