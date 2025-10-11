import { Router } from "express";
import { getSummaryByDocument } from "../controllers/summary.controller";

const router = Router();
router.get("/:document", getSummaryByDocument);
export default router;
