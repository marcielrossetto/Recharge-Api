import { Router } from "express";
import { postPhone, getPhones } from "../controllers/phones.controller";
import { validateSchema } from "../middlewares/validate";
import { createPhoneSchema } from "../validations/phones.schemas";

const router = Router();

// POST /phones (com validação JOI)
router.post("/", validateSchema(createPhoneSchema), postPhone);

// GET /phones (?document=12345678901)
router.get("/", getPhones);

export default router;
