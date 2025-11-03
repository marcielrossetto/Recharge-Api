import { Request, Response } from "express";
import * as phonesService from "../services/phones.service";
import { asyncHandler } from "../utils/async";

// já existente
export const postPhone = asyncHandler(async (req: Request, res: Response) => {
  const created = await phonesService.createPhone(req.body);
  res.status(201).json(created);
});

// NOVA — lista todos os telefones
export const listAllPhones = asyncHandler(async (_req: Request, res: Response) => {
  const phones = await phonesService.listAll();
  res.json(phones);
});

// já existente — lista por documento
export const getPhones = asyncHandler(async (req: Request, res: Response) => {
  const { document } = req.params;
  const list = await phonesService.listByDocument(document);
  res.json(list);
});
