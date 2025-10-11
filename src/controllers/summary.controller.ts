import { Request, Response } from "express";
import * as service from "../services/summary.service";

export async function getSummaryByDocument(req: Request, res: Response) {
  const { document } = req.params;
  const data = await service.getSummaryByDocument(document);
  return res.status(200).send(data);
}
