import { Request, Response, NextFunction } from "express";
import * as rechargesService from "../services/recharges.service";
import { NewRechargeDTO } from "../protocols/recharges";

type CreateRechargeBody =
  | { phone_id: number; value: number; status?: NewRechargeDTO["status"] }
  | { phoneId: number; value: number; status?: NewRechargeDTO["status"] }
  | { phone_id: number; amount: number; status?: NewRechargeDTO["status"] }
  | { phoneId: number; amount: number; status?: NewRechargeDTO["status"] };

export async function createRecharge(
  req: Request<unknown, unknown, CreateRechargeBody>,
  res: Response,
  next: NextFunction
) {
  try {
    const b = req.body as any;
    const data: NewRechargeDTO = {
      phone_id: b.phone_id ?? b.phoneId,
      value: b.value ?? b.amount,
      status: b.status,
    };
    const created = await rechargesService.createRecharge(data);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}
