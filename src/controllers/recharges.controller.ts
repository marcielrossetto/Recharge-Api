import { Request, Response } from "express";
import { NewRechargeDTO } from "../protocols/recharges";
import * as rechargesService from "../services/recharges.service";

export async function createRecharge(req: Request, res: Response) {
  const data = req.body as NewRechargeDTO;
  const created = await rechargesService.createRecharge(data);
  return res.status(201).send(created);
}
