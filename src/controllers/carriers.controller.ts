import { Request, Response, NextFunction } from "express";
import * as service from "../services/carriers.service";

export async function getCarriers(_req: Request, res: Response, next: NextFunction) {
  try {
    const rows = await service.listCarriers(); // <- era listAll
    res.send(rows);
  } catch (err) {
    next(err);
  }
}

export async function postCarrier(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, code } = req.body;
    // service.createCarrier recebe um objeto { name, code }
    const created = await service.createCarrier({ name, code });
    res.status(201).send(created);
  } catch (err) {
    next(err);
  }
}
