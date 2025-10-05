import { Request, Response, NextFunction } from "express";
import * as service from "../services/summary.service";

export async function getSummary(req: Request, res: Response, next: NextFunction) {
  try {
    const { document } = req.params;
    const data = await service.getByDocument(document);
    res.send(data);
  } catch (err) { next(err); }
}
