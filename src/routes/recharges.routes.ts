import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { createRechargeSchema } from "../schemas/recharges.schema";
import * as controller from "../controllers/recharges.controller";

const router = Router();

router.post("/", validateSchema(createRechargeSchema), controller.create);
router.get("/:number", controller.listByNumber);

export default router;
