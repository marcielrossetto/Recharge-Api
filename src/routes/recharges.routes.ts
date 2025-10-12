import { Router } from "express";
import { postRecharge, getRechargesByNumber } from "../controllers/recharges.controller";
import { validate } from "../middlewares/validate";
import { createRechargeSchema } from "../validations/recharges.schemas";

const router = Router();
router.post("/", validate(createRechargeSchema), postRecharge);
router.get("/:number", getRechargesByNumber);
export default router;
