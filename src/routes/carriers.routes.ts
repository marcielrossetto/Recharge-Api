import { Router } from "express";
import { getCarriers, postCarrier } from "../controllers/carriers.controller";
import { validate } from "../middlewares/validate";
import { createCarrierSchema } from "../validations/carriers.schemas";

const router = Router();
router.get("/", getCarriers);
router.post("/", validate(createCarrierSchema), postCarrier);

export default router;
