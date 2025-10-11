import { Router } from "express";
import { getCarriers, postCarrier } from "../controllers/carriers.controller";

const router = Router();

router.get("/", getCarriers);   // GET /carriers
router.post("/", postCarrier);  // POST /carriers

export default router;
