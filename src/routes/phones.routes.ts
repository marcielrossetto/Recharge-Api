import { Router } from "express";
import { postPhone, getPhones } from "../controllers/phones.controller";

const router = Router();

// POST /phones
router.post("/", postPhone);

// GET /phones  (opcional ?document=12345678901)
router.get("/", getPhones);

export default router;
