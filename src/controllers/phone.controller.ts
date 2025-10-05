import { Request, Response, NextFunction } from "express";
import * as service from "../services/phones.service";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const phone = await service.createPhone(req.body);
    res.status(201).send(phone);
  } catch (err) {
    next(err);
  }
}

export async function listByDocument(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { document } = req.params;
    const phones = await service.listPhonesByDocument(document); // <- aqui
    res.send(phones);
  } catch (err) {
    next(err);
  }
}
