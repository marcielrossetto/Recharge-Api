import { Request, Response } from "express";
import * as service from "../services/carriers.service";

export async function getCarriers(_req: Request, res: Response) {
  const data = await service.listCarriers();
  res.send(data);
}

export async function getCarrierById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = await service.getCarrier(id);
  res.send(data);
}

export async function postCarrier(req: Request, res: Response) {
  const { name, code }:{ name:string; code:number } = req.body;
  const created = await service.createCarrier(name, code);
  res.status(201).send(created);
}
