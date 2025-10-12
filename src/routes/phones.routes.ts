import { Router } from "express";
import { postPhone, getPhonesByDocument, getAllPhones } from "../controllers/phones.controller";
import { validate } from "../middlewares/validate";
import { createPhoneSchema } from "../validations/phones.schemas";

const router = Router();

router.get("/all", getAllPhones); // ✅ Adicione esta linha
router.post("/", validate(createPhoneSchema), postPhone);
router.get("/:document", getPhonesByDocument);
router.get("/", getAllPhones);
router.get("/:document", getPhonesByDocument); // Esta vai ficar apenas para documentos específicos
export default router;