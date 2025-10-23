import { Request, Response } from "express";
import * as service from "../services/carriers.service";
import { asyncHandler } from "../utils/async";

export const getCarriers = asyncHandler(async (_req: Request, res: Response) => {
  const rows = await service.list();
  res.json(rows);
});

export const postCarrier = asyncHandler(async (req: Request, res: Response) => {
  const created = await service.createCarrier(req.body);
  res.status(201).json(created);
});
