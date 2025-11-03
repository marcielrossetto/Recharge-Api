import { Request, Response } from "express";
import { asyncHandler } from "../utils/async";
import * as summaryService from "../services/summary.service";

export const getSummaryController = asyncHandler(async (req: Request, res: Response) => {
  const document = req.params.document; // string | undefined

  // se não veio documento → summary geral
  if (!document) {
    const data = await summaryService.getSummary(); // sem argumento
    return res.json(data);
  }

  const data = await summaryService.getSummary(document); // com documento
  return res.json(data);
});
