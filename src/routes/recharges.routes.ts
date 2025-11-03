import { Router } from "express";
import { createRecharge, getRecharges, listAllRecharges } from "../controllers/recharges.controller";
import { validateSchema } from "../middlewares/validate";
import { createRechargeSchema } from "../validations/recharges.schemas";

const router = Router();

router.post("/", validateSchema(createRechargeSchema), createRecharge); // POST /recharges
router.get("/", listAllRecharges);                                     // GET /recharges
router.get("/:number", getRecharges);                                  // GET /recharges/:number

export default router;
