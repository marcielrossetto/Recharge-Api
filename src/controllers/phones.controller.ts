import { Request, Response, NextFunction } from "express";
import * as phonesService from "../services/phones.service";

export async function postPhone(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await phonesService.createPhone(req.body);
    res.status(201).send(created);
  } catch (err) { next(err); }
}

export async function getPhonesByDocument(req: Request, res: Response, next: NextFunction) {
  try {
    const { document } = req.params;
    const list = await phonesService.listByDocument(document);
    res.send(list);
  } catch (err) { next(err); }
}
export async function getAllPhones(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await phonesService.listAll();
    res.send(list);
  } catch (err) { 
    next(err); 
  }
}
