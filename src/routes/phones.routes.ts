import { Router } from "express";
import { postPhone } from "../controllers/phone.controller"; // <- singular
import { validateSchema } from "../middlewares/validateSchema";
import { newPhoneSchema } from "../schemas/phones.schema";
import { NewPhoneDTO } from "../protocols/phones";

const router = Router();
router.post("/phones", validateSchema<NewPhoneDTO>(newPhoneSchema), postPhone);
export default router;
