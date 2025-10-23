import { Router } from "express";
import { createRecharge, getRecharges } from "../controllers/recharges.controller";

const router = Router();

// POST /recharges
router.post("/", createRecharge);

// GET /recharges
router.get("/", getRecharges);

export default router;
