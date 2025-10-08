import { Router } from "express";
import { getCarriers, getCarrierById, postCarrier } from "../controllers/carriers.controller";

const router = Router();
router.get("/carriers", getCarriers);
router.get("/carriers/:id", getCarrierById);
router.post("/carriers", postCarrier); // opcional, se precisar criar

export default router;
