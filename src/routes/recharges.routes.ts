import { Router } from "express";
import { createRecharge, getRecharges } from "../controllers/recharges.controller";
import { validateSchema } from "../middlewares/validate";
import { createRechargeSchema } from "../validations/recharges.schemas";

const router = Router();

// POST /recharges (com validação JOI)
router.post("/", validateSchema(createRechargeSchema), createRecharge);

// GET /recharges
router.get("/", getRecharges);

export default router;
