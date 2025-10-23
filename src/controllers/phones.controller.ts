import { Request, Response } from "express";
import * as phonesService from "../services/phones.service";
import { asyncHandler } from "../utils/async";

export const postPhone = asyncHandler(async (req: Request, res: Response) => {
  const created = await phonesService.createPhone(req.body);
  res.status(201).json(created);
});

export const getPhones = asyncHandler(async (req: Request, res: Response) => {
  const { document } = req.query as { document?: string };
  const list = document
    ? await phonesService.listByDocument(document)
    : await phonesService.listAll();
  res.json(list);
});
