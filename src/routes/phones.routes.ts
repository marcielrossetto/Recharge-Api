import { Router } from "express";
import { postPhone, getPhonesByDocument } from "../controllers/phones.controller";

const router = Router();

router.post("/", postPhone);
router.get("/document/:document", getPhonesByDocument);

export default router;
