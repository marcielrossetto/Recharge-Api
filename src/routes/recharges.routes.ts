import { Router, Request, Response, NextFunction } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { rechargeCreateSchema } from "../schemas/recharge.schema";
import * as rechargesService from "../services/recharges.service";

const router = Router();

// POST /recharges
router.post("/recharges", validateSchema(rechargeCreateSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created = await rechargesService.createRecharge(req.body);
    return res.status(201).send(created);
  } catch (err) { next(err); }
});

// GET /recharges/:number
router.get("/recharges/:number", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { number } = req.params;
    const list = await rechargesService.listRecharges(number);
    return res.send(list);
  } catch (err) { next(err); }
});

export default router;
