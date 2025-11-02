import { Router } from "express";
import { createRecharge, getRecharges } from "../controllers/recharges.controller";
import { validateSchema } from "../middlewares/validate";
import { createRechargeSchema } from "../validations/recharges.schemas";

const router = Router();

router.post("/", validateSchema(createRechargeSchema), createRecharge);
router.get("/:number", getRecharges); // << antes era GET "/"

export default router;
