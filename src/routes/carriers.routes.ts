import { Router } from "express";
import { getCarriers, postCarrier } from "../controllers/carriers.controller";
import { validateSchema } from "../middlewares/validate";
import { createCarrierSchema } from "../validations/carriers.schemas";

const router = Router();
router.get("/", getCarriers);
router.post("/", validateSchema(createCarrierSchema), postCarrier);

export default router;
