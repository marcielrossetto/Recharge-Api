import { Request, Response } from "express";
import * as phonesService from "../services/phones.service";
import { asyncHandler } from "../utils/async";

export const postPhone = asyncHandler(async (req: Request, res: Response) => {
  const created = await phonesService.createPhone(req.body);
  res.status(201).json(created);
});

export const getPhones = asyncHandler(async (req: Request, res: Response) => {
  const { document } = req.params as { document: string }; // << antes usava query
  const list = await phonesService.listByDocument(document);
  res.json(list);
});
