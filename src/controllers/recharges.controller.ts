import { Request, Response, NextFunction } from "express";
import * as rechargesService from "../services/recharges.service";

export async function postRecharge(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await rechargesService.createRecharge(req.body);
    res.status(201).send(created);
  } catch (err) { 
    next(err); 
  }
}

export async function getRechargesByNumber(req: Request, res: Response, next: NextFunction) {
  try {
    const { number } = req.params;
    const list = await rechargesService.listByNumber(number);
    res.send(list);
  } catch (err) { 
    next(err); 
  }
}