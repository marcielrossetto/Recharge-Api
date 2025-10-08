import { Router } from "express";
import { createRecharge } from "../controllers/recharges.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { newRechargeSchema } from "../schemas/recharges.schema";
import { NewRechargeDTO } from "../protocols/recharges";

const router = Router();
router.post("/recharges", validateSchema<NewRechargeDTO>(newRechargeSchema), createRecharge);
export default router;
