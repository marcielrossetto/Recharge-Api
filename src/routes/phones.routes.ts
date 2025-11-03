import { Router } from "express";
import { postPhone, getPhones, listAllPhones } from "../controllers/phones.controller";
import { validateSchema } from "../middlewares/validate";
import { createPhoneSchema } from "../validations/phones.schemas";

const router = Router();

// POST /phones
router.post("/", validateSchema(createPhoneSchema), postPhone);

// GET /phones → lista todos
router.get("/", listAllPhones);

// GET /phones/:document → lista por documento
router.get("/:document", getPhones);

export default router;
