import { Router } from "express";
import { createRecharge, listRecharges } from "../controllers/recharges.controller";

const router = Router();

router.post("/", createRecharge);     // POST /recharges
router.get("/", listRecharges);       // GET /recharges

export default router;
