import { Request, Response } from "express";
import { getSummary } from "../services/summary.service";
import { asyncHandler } from "../utils/async";

export const getSummaryController = asyncHandler(async (req: Request, res: Response) => {
  const { document } = req.query as { document?: string };
  const data = await getSummary(document);
  res.json(data);
});
