import { Request, Response, NextFunction } from "express";
import * as summaryService from "../services/summary.service";

export async function getSummary(req: Request, res: Response, next: NextFunction) {
  try {
    const { document } = req.params;
    const payload = await summaryService.getSummaryByDocument(document);
    res.send(payload);
  } catch (err) { next(err); }
}
