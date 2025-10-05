import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { createPhoneSchema } from "../schemas/phones.schema"; // <-- aqui
import * as controller from "../controllers/phone.controller";

const router = Router();
router.post("/", validateSchema(createPhoneSchema), controller.create);
router.get("/:document", controller.listByDocument);
export default router;
