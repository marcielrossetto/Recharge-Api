import { Router } from "express";
import { postPhone, getPhones } from "../controllers/phones.controller";
import { validateSchema } from "../middlewares/validate";
import { createPhoneSchema } from "../validations/phones.schemas";

const router = Router();

router.post("/", validateSchema(createPhoneSchema), postPhone);
router.get("/:document", getPhones); // << antes era GET "/"

export default router;
