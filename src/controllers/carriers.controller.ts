import { Request, Response, NextFunction } from "express";
import * as repo from "../repositories/carriers.repository";
import { createCarrier } from "../services/carriers.service";

export async function listCarriers(req: Request, res: Response, next: NextFunction) {
  try {
    const rows = await repo.findAll();
    res.json(rows);
  } catch (err) { next(err); }
}

export async function getCarrierById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const row = await repo.findById(id);
    if (!row) return res.status(404).json({ message: "Carrier not found" });
    res.json(row);
  } catch (err) { next(err); }
}

export async function createCarrierCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, code } = req.body as { name: string; code: string };
    const created = await createCarrier(name, code);
    res.status(201).json(created);
  } catch (err) { next(err); }
}
