import { Router } from "express";
import { getSummaryController } from "../controllers/summary.controller";

const router = Router();
router.get("/", getSummaryController); // GET /summary?document=...

export default router;
